const express = require('express');
const Sala = require('../models/classes');

const router = express.Router();
const mailer = require('../../modules/mailer');

router.post('/register', async (req, res) => {
  const { codigo } = req.body;

  try {
    if (await Sala.findOne({ codigo }))
      return res.status(400).send({ error: 'Código ja existe' });

    const sala = await Sala.create(req.body);

    return res.send({
      sala
    });
  } catch (err) {
    return res.status(400).send({ error: "Falha no regitro" })
  }
});

router.get("/salas/:idProfessor", async (req, res) => {
  const idProfessor = req.params.idProfessor;

  try {
    const salas = await Sala.find({ idProfessor });

    res.json(salas);
  } catch (err) {
    res.status(500).send({ message: "nao deu certo" });
  }
});

router.get("/sala/:codSala", async (req, res) => {
  const codigo = req.params.codSala;

  try {
    const salas = await Sala.find({ codigo });

    res.json(salas);
  } catch (err) {
    res.status(500).send({ message: "nao deu certo" });
  }
});

router.post('/contacted', async (req, res) => {
  const formData = req.body;
  console.log(formData)
  const info = await mailer.sendMail({
    to: formData.emailContact, // list of receivers
    subject: formData.subjectContact, // Subject line
    html: '<div style="padding: 10px; font-size: 18px;background-color: #f27830; color: #ffffff; border-radius: 5px; margin-left: 15px; margin-right: 15px;">'+formData.messageContact +'<br><br> <div style="font-size: 13px">Caso tenha alguma dúvida, favor entrar em contato com os e-mails: <br> lucascamacho@alunos.utfpr.edu.br <br> jaine@alunos.utfpr.edu.br <br> lucasmitsudo@gmail.com </div></div>', // plain text body
  });
  console.log("Message sent: %s", info.messageId);
  res.json(info);
})

router.patch('/update/:id', async (req, res) => {
  const _id = req.params.id

  if (!_id) {
    res.json({ message: "sem id" });
  }
  try {
    const updateSala = await Sala.updateOne({ _id: req.params.id },
      { $set: { isShow: req.body.isShow } });

    res.json(updateSala);
  } catch (err) {
    res.json({ message: err });
  }
})
module.exports = app => app.use('/room', router);

//611af650a895fd4dd82ee22a