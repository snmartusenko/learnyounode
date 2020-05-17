const net = require('net');
const dateFormat = require('dateformat');
// const sprintf = require('sprintf-js').sprintf;

if (process.argv.length < 3) {
    console.log('no port number');
    return 0;
}

var server = net.createServer(function (socket) {
    listenSocket(socket);
});
server.listen(process.argv[2]);

function listenSocket(socket) {
    socket.on('connect', function () {
        console.log('Somebody is connected!');
    });
    socket.on('end', function () {
        console.log('Trasfer was ended');
    });

    // socket.write(getTranferData());
    socket.end(getTranferData());
}

function getTranferData() {
    var res = '';
    var date = new Date;
    var year = date.getFullYear();
    var month = 1 + +date.getMonth();
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    // res = year + '-' + sprintf("%2d", month) + '-' + day + ' ' + hours + ':' + minutes;
    res = dateFormat(date, 'yyyy-mm-dd HH:MM') + '\n';

    return res;
}

// console.log(getTranferData());