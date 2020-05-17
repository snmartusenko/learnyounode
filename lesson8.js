const http = require('http');
const BufferList = require('bl');

if (process.argv.length < 3) {
    console.log('no url 1');
    return 0;
}

if (process.argv.length < 4) {
    console.log('no url 2');
    return 0;
}

if (process.argv.length < 5) {
    console.log('no url 3');
    return 0;
}

var url = [];
url[0] = process.argv[2];
url[1] = process.argv[3];
url[2] = process.argv[4];

var bl = [];
bl[0] = new BufferList;
bl[1] = new BufferList;
bl[2] = new BufferList;

var res = [];
var countResponseEnds = 0;

// for (i = 0; i < 3; i++) {
//     httpGet(i);
// }



// function httpGet (index) {
//     http.get(process.argv[2 + index], function (response) {
//       response.pipe(bl(function (err, data) {
//         if (err) {
//           return console.error(err)
//         }
  
//         results[index] = data.toString()
//         count++
  
//         if (count === 3) {
//           printResults()
//         }
//       }))
//     })
//   }

// function httpGet(i) {
//     http.get(url[i], function (response) {
//         response.setEncoding('utf8');

//         // response.pipe(bl);
//         response.on('data', function (chunk) {
//             res[i] += chunk;
//         });

//         response.on('error', function (err) {
//             console.error(err);
//         });

//         response.on('end', function () {
//             countResponseEnds++;
//             if (countResponseEnds >= 3) {
//                 printBLists();
//             }
//         })
//     });
//     // console.log('http get');
// }

http.get(url[0], function (response) {
    response.setEncoding('utf8');

    response.pipe(bl[0]);

    response.on('error', function (err) {
        console.error(err);
    });

    response.on('end', function () {
        countResponseEnds++;
        if (countResponseEnds >= 3) {
            printBLists();
        }
    })
});

http.get(url[1], function (response) {
    response.setEncoding('utf8');

    response.pipe(bl[1]);

    response.on('error', function (err) {
        console.error(err);
    });

    response.on('end', function () {
        countResponseEnds++;
        if (countResponseEnds >= 3) {
            printBLists();
        }
    })
});

http.get(url[2], function (response) {
    response.setEncoding('utf8');

    response.pipe(bl[2]);

    response.on('error', function (err) {
        console.error(err);
    });

    response.on('end', function () {
        countResponseEnds++;
        if (countResponseEnds >= 3) {
            printBLists();
        }
    })
});



function printBLists() {
    for (i = 0; i < 3; i++) {
        // console.log(res[i].length);
        console.log(bl[i].toString());
    }
}
