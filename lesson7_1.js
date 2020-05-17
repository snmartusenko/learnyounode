const http = require('http');

if (process.argv.length < 3) {
    console.log('no url');
    return 0;
}

var url = process.argv[2];

http.get(url, function (response) {
    var data = '';
    response.setEncoding('utf8');

    response.on('data', function (chunk) {
        data += chunk;
    });

    response.on('error', function (err) {
        console.error(err);
    });

    response.on('end', function () {
        console.log(data.length);
        console.log(data);
    })

    // console.log('has response');
});

