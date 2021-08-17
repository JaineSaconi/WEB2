const express = require('express');
const authConfig = require('../../config/auth');
const mongoose =  require('../../database');

const Sala = require('../models/classes');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { codigo } = req.body;

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

router.get("/salas/:idProfessor", async (req, res) => {
  const idProfessor = req.params.idProfessor;

  try{
    const salas = await Sala.find({idProfessor});

    res.json(salas);
  } catch(err){
    res.status(500).send({message: "nao deu certo"});
  }
});

router.patch('/update/:id' , async (req, res) => {
    const _id =  req.params.id

    if(!_id){
      res.json({message: "sem id"});
    }
  try {
    const updateSala = await Sala.updateOne({_id: req.params.id}, 
      {$set: {isShow: req.body.isShow}});

    res.json(updateSala);
  } catch (err) {
    res.json({message: err});
  }
})
module.exports = app => app.use('/room', router);

//611af650a895fd4dd82ee22a