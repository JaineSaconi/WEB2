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
        type: Boolean,
        require: true,
    },
    opt2: {
        type: Boolean,
        require: true,
    },
    opt3: {
        type: Boolean,
        require: true,
    },    
    opt4: {
        type: Boolean,
        require: true,
    },
    opt5: {
        type: Boolean,
        require: true,
    },
    dificulty: {
        type: Number,
        require: true,
    },
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;