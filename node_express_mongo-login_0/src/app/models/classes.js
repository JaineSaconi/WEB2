const mongoose =  require('../../database');

const ClassesSchema = new mongoose.Schema({
    codigo: {
        type: String,
        unique: true,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    idAluno:[{
        type: String,
        require: false,
    }],
    idProfessor: {
        type: String,
        require: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

const Classes = mongoose.model('Classes', ClassesSchema);

module.exports = Classes;