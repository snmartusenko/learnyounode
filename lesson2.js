const fs = require('fs');

if (process.argv.length < 3) {
    console.log('no path to file');
    return 0;
}

var fileBuf = fs.readFileSync(process.argv[2]);

var content = fileBuf.toString()
// console.log('content=', content);

var rows = content.split('\n');
// console.log('rows=', rows);

var count = rows.length;
console.log(count-1);
