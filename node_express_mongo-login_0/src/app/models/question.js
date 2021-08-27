const mongoose =  require('../../database');

const QuestionSchema = new mongoose.Schema({
    idQuestion: {
        type: Number,
        require: true,
    },
    descriptionQuestion: {
        type: String,
        require: true,
    },
    opt1: {
        type: String,
        require: true,
    },
    opt2: {
        type: String,
        require: true,
    },
    opt3: {
        type: String,
        require: true,
    },    
    opt4: {
        type: String,
        require: true,
    },
    opt5: {
        type: String,
        require: true,
    },
    dificulty: {
        type: Number,
        require: true,
    },
    answer: {
        type: String,
        required: true
    }
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;