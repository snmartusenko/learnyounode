const http = require('http');
const map = require('through2-map');


if (process.argv.length < 3) {
    console.log('no port number');
    return 0;
}


var server = http.createServer(function (request, response) {
    request.pipe(map(function (chunk) {
        return convert(chunk);
    })).pipe(response);
});
server.listen(process.argv[2]);


function convert(chunk) {
    return chunk.toString().toUpperCase();
}
