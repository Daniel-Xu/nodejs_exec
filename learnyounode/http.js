var http = require("http")
var bl = require("bl")

var n = 0;
var result = [];
function asy_http(order){
    http.get(process.argv[order+2], function(res){
            res.pipe(bl(function(err, data){
                if(err)
                    return console.err(data)

                result[order] = data.toString();
                n++;
                if(n == 3)
                    print_result();
            }))

    })
}

function print_result() {
    for (var i=0; i < 3; i++) {
        console.log(result[i])
    };
}

for (var i=0; i < 3; i++) {
    asy_http(i);
};
