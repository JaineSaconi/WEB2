const express = require('express');
const authConfig = require('../../config/auth');

const Sala = require('../models/classes');

const router = express.Router();

router.post('/register', async (req, res) => {

  try{
    if( await Sala.findOne({ codigo }))
      return res.status(400).send({ error: 'Código ja existe' });

      const sala = await Sala.create(req.body);

      return res.send({
        sala
      });
  } catch (err) {
    return res.status(400).send({ error: "Falha no regitro"})
  }
});

module.exports = app => app.use('/room', router);