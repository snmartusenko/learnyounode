const http = require('http');

if (process.argv.length < 3) {
    console.log('no url');
    return 0;
}

var url = process.argv[2];

http.get(url, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        console.log(data);
    });
    response.on('error', function (err) {
        console.error(err);
    });
    // console.log('has response');
});

