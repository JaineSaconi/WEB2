const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const mailer = require('../../modules/mailer');
const app = express();

const authConfig = require('../../config/auth');

const User = require('../models/user');

const router = express.Router();

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

function generateToken(params =  {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

router.get("/get", function(req, res) {
    return res.send("Minha primeira rota!");
  });


router.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        if (await User.findOne({ email }))
            return res.status(400).send({ error: 'Usuário já existe'});

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ 
            user,
            token: generateToken({ id: user.id }), 
        });
    } catch (err) {
        return res.status(400).send({ error: 'Falha no registro' })
    }
}); 

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user)
        return res.status(400).send({ error: 'Usuário não encontrado' });
        
    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Senha inválida' });

    user.password = undefined;
        
    res.send({ 
        user, 
        token: generateToken({ id: user.id }),
     });
});

router.post('/forgot_password', async (req, res) => {
    const { email } = req.body;
    
    try {
        const user = await User.findOne({ email });

        if(!user)
            return res.status(400).send({ error: 'Usuário não encontrado' });

        const token = crypto.randomBytes(20).toString('hex');

        const now = new Date();
        now.setHours(now.getHours() + 1);

        await User.findByIdAndUpdate(user.id, {
            '$set': {
                passwordResetToken: token,
                passwordResetExpires: now,
            }
            });

        mailer.sendMail({
            to: email,
            from: '719680b375-9693e4@inbox.mailtrap.io',
            template: 'auth/forgot_password',
            context: { token },
        }, (err) => {
            if(err)
                return res.status(400).send({ error: 'Não foi possível restaurar a senha' })

            return res.send();
        });

    } catch (err) {
        res.status(400).send({ error: 'Erro na recuperação de senha, tente novamente' });
    } 
});

router.post('/reset_password', async (req, res) => {
    const { email, token, password } = req.body;

    try {
        const user = await User.findOne({ email })
            .select('+passswordResetToken passwordResetExpires');

        if(!user)
            return res.status(400).send({ error: 'Usuário não encontrado' });
            
        if(token !== user.passwordResetToken)
            return res.status(400).send({ error: 'Token inválido' });
            
        const now = new Date();
            
        if (now > user.passwordResetExpires)
            return res.status(400).send({ error: 'Token expirou, gere um novo token' });

        user.password = password;

        await user.save();

        res.send();

    } catch (err) {
        res.status(400).send({ error: 'Não foi possível resetar a senha, tente novamente' });
    }
})
module.exports = app => app.use('/auth', router);