var express = require('express')
var app = express();

app.get('/', (request,response) =>{
    // response.setHeader('Content-Type', 'application/json')
    // response.send(JSON.stringify({name: 'todo-app-api'}))
    
    var res = {
            data : "Response Code: ",
            msg : "Test code"
        };

    console.log(JSON.stringify(res));
    response.json(res);
    console.log('api consumed')
})

app.listen(3008)
