var server = require("./server");
var router = require("./router");
var requestsHandlers = require("./requestsHandlers");


var handle = {};
handle["/"] = requestsHandlers.start;
handle["/start"] = requestsHandlers.start;
handle["/upload"] = requestsHandlers.upload;

server.start(router.route, handle);
