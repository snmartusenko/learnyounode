const http = require('http');
const url = require('url');
// const dateFormat = require('dateformat');


if (process.argv.length < 3) {
    console.log('no port number');
    return 0;
}


// var server = http.createServer(function (request, response) {
//     request.pipe(map(function (chunk) {
//         return convert(chunk);
//     })).pipe(response);
// });
// server.listen(process.argv[2]);


var server = http.createServer(function (request, response) {

    var urlParts = url.parse(request.url, true);
    var query = urlParts.query;
    // console.log(request.url);
    // console.log(parts);
    // console.log(query);

    if (urlParts.pathname == '/api/parsetime') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(getIsoTimeFromQueryTime(urlParts.query.iso)));
    }

    if (urlParts.pathname == '/api/unixtime') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(getUnixTimeFromQueryTime(urlParts.query.iso)));
    }

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end();

});
server.listen(process.argv[2]);


function getIsoTimeFromQueryTime(queryTime) {
    var date = new Date(queryTime);

    // var hour = date.getUTCHours();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var res = {
        "hour": hour,
        "minute": minute,
        "second": second,
    }
    return res;
}


function getUnixTimeFromQueryTime(queryTime) {
    var date = new Date(queryTime);
    var unixtime = date.getTime();

    var res = {
        "unixtime": unixtime,
    }
    return res;
}



