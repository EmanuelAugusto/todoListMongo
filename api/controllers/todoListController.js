const mongoose = require('mongoose'),
    Task = mongoose.model('Task')

exports.todasTarefas = function(req, res){
    Task.find({}, function(error, task){
        if(error) 
            res.send(error)

        res.json(task)
    })
}

exports.criarTarefa = function(req, res){
    let novaTarefa = new Task(req.body)

    novaTarefa.save(function(error, task){
        if(error)
            res.send(error)

        res.json(task)
    })
}

exports.detalharTarefa = function(req, res){
    Task.findById(req.params.tarefaId, function(error, task){
        if(error)
            res.send(error)

        res.json(task)
    })
}

exports.atualizarTarefa = function(req, res){
    Task.findByIdAndUpdate({_id: req.params.tarefaId}, 
        req.body, 
        { new: true}, 
        function(error, task){
            if(error)
                res.send(error)
        
                res.json(task)
    })
}

exports.apagarTarefa = function(req, res){
    Task.remove({ _id: req.params.tarefaId}, function(error, task){
        if(error)
            res.send(error)

        res.json({message: "Tarafa deletada"})
    })
}

exports.buscaStatus = function(req, res){
    console.log(req.body.status)
    Task.find({status:  req.body.status }, function(error, task){
        if(error)
            res.send(error)

        res.json(task)
    })
}