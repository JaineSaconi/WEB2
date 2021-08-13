const mongoose =  require('../../database');

const ClassesSchema = new mongoose.Schema({
    idClasses: {
        type: Number,
        require: true,
    },
    codigo: {
        type: String,
        require: true,
    },
    descriptionClasses: {
        type: String,
        require: true,
    },
    idAluno:[{
        type: Number,
        require: true,
    }],
    idProfessor: {
        type: Number,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

const Classes = mongoose.model('Classes', ClassesSchema);

module.exports = Classes;