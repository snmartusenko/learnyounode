const fs = require('fs');
const path = require('path');


if (process.argv.length < 3) {
    console.log('no path to file');
    return 0;
}

if (process.argv.length < 4) {
    console.log('no file extention');
    return 0;
}

var folder = process.argv[2];
var fileExt = process.argv[3];


function filterDir(list, fileExt) {
    // console.log(list);
    // console.log(fileExt);

    var res = list.filter(function (value, index, array) {
        if (path.extname(value) == '.' + fileExt) return true;
    });
    // console.log('after filter=', res);

    printList2(res);
}

function printList(list) {
    for (i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}

function printList2(list) {
    list.forEach(function(value){
        console.log(value);
    })
}


fs.readdir(folder, function callback(err, list) {
    if (err) return console.error(err);
    filterDir(list, fileExt);
});





