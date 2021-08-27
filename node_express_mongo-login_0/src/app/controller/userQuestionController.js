const express = require('express');

const UserQuestion = require('../models/userQuestion');
const Question = require('../models/question');
const router = express.Router();
const util = require('util')

router.get("/questions", async (req, res) => {

  try{
    Question.find({}, (err, userC) => {
        if(err){
          res.send("erro");
        }
        res.send(userC);
      });
    
  }catch(err){
    res.status(500).send({message: "nao deu certo"});
  }
});

router.post('/register', async (req, res) => {

  try{
      const userQuestion = await UserQuestion.create(req.body);

      return res.send({
        userQuestion
      });
  } catch (err) {
    return res.status(400).send({ error: "Falha no regitro", res:err, body: req.body})
  }
});

router.get("/:id", async (req, res) => {
  const userid = req.params.id;

  try{
    const userQuestion = await UserQuestion.find({userid});

    res.json(userQuestion);
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
  const updateUserQuestion = await UserQuestion.updateOne({_id: req.params.id}, 
     {questions: req.body.questions});

    // console.log(util.inspect(updateUserQuestion));

    res.json(updateUserQuestion);
} catch (err) {
  res.json({message: err});
}
})

module.exports = app => app.use('/userquestion', router);

