var http = require('q-io/http')
var _ = require('lodash')

var idUrl = 'http://localhost:7000'
var jsonUrl = "http://localhost:7001/"

var nCancat = _.bind(String.prototype.concat, jsonUrl)

http.read(idUrl)
    .then(_.compose(http.read, nCancat))
    .then(_.compose(console.log, JSON.parse))
    .then(null, console.error)
    .done()
