const mongoose = require('mongoose')
const Schema = mongoose.Schema

var TaskSchema = new Schema({
    nome: {
        type: String,
        required: "Digite o nome da Tarefa"
    },
    dataCriacao: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pendente', 'em andamento', "concluida"]
        }],
        default: "pendente"
    }

})


module.exports = mongoose.model("Task", TaskSchema)