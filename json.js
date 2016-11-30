var express = require('express')
var fs = require('fs')
var app = express()
fs.readFile(process.argv[3], function callback(err, data) {
    if (err) {
        return err
    }
    app.get('/books', function(req, res) {
        var object = JSON.parse(data)
        res.json(object)
    })  
})

app.listen(process.argv[2])
