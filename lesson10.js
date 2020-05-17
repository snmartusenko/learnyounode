const http = require('http');
const fs = require('fs');


if (process.argv.length < 3) {
    console.log('no port number');
    return 0;
}

if (process.argv.length < 4) {
    console.log('no file path');
    return 0;
}

var file = fs.createReadStream(process.argv[3]);

var server = http.createServer(function (request, response) {
    file.pipe(response);
});
server.listen(process.argv[2]);

// function listenSocket(socket) {
//     socket.on('connect', function () {
//         console.log('Somebody is connected!');
//     });
//     socket.on('end', function () {
//         console.log('Trasfer was ended');
//     });

//     // socket.write(getTranferData());
//     socket.end(getTranferData());
// }

