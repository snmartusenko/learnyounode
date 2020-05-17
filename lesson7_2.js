const http = require('http');
const BufferList = require('bl');

if (process.argv.length < 3) {
    console.log('no url');
    return 0;
}

var url = process.argv[2];
var bl = new BufferList;

http.get(url, function (response) {
    response.setEncoding('utf8');

    // response.on('data', function (chunk) {
    //     bl.append(chunk);
    // });

    response.pipe(bl);

    response.on('error', function (err) {
        console.error(err);
    });

    response.on('end', function () {
        console.log(bl.length);
        console.log(bl.toString());
    })
});

