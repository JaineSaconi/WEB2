const mongoose =  require('../../database');

const UserQuestionSchema = new mongoose.Schema({
  userid:{
    type: String,
    required: false,
  },
  questions:[{
    qid: {
      type: String,
      required: true,
    },
    answers: [{
      type: Boolean,
      required: false,
    }],
    selected: [{
      type: String,
      required: true
    }],
    required: false,
  }],
});

const UserQuestion = mongoose.model('UserQuestionSchema', UserQuestionSchema );
module.exports = UserQuestion;''