const fs = require('fs');

if (process.argv.length < 3) {
    console.log('no path to file');
    return 0;
}

function someF(data) {
    var content = data.toString()
    // console.log('content=', content);

    var rows = content.split('\n');
    // console.log('rows=', rows);

    var count = rows.length;
    console.log(count - 1);
}


fs.readFile(process.argv[2], function callback(err, data) {
    if (err) return 0;
    someF(data);
});





