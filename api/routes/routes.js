module.exports = function(app){
    var todoController = require('../controllers/todoListController')

    app.route('/tarefa')
        .get(todoController.todasTarefas)
        .post(todoController.criarTarefa);
    
    app.route('/tarefaStatus')
        .get(todoController.buscaStatus)

    app.route("/tarefa/:tarefaId")
        .get(todoController.detalharTarefa)
        .put(todoController.atualizarTarefa)
        .delete(todoController.apagarTarefa)
}