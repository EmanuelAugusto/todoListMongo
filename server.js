const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    bodyParser = require('body-parser');


mongoose.Promise = global.Promise

var url = "mongodb://localhost:27017/Tododb";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var routes = require('./api/routes/routes')

routes(app)


app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' Nao Encontrada'})
});

app.listen(port)


console.log("Server Running in PORT" , port)