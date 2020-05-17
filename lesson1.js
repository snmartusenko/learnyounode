// console.log(process.argv);

var argv = process.argv;

if (argv.length > 2) {
    var summ = 0;
    for (var i=2; i<argv.length; i++) {
        // console.log('item ', i, '=', argv[i]);
        summ += Number(argv[i]);
    }
    console.log(summ);
}