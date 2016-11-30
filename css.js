var express = require('express')
var app = express()
app.use(require('stylus').middleware(process.argv[3]))
app.get('/main.css', function(req, res) {
})
app.listen(process.argv[2])
