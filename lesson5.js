const mymodule = require('./mymodule.js');

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


function printList(list) {
    list.forEach(function (value) {
        console.log(value);
    })
}


// mymodule.test();
// console.log(mymodule);
mymodule(folder, fileExt, function(err, list){
    // console.log('test5');
    if (err) console.error(err);

    printList(list);
    // console.log('test6');
});
