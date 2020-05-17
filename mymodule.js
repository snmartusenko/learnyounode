const fs = require('fs');
const path = require('path');

const My = {
    test: function () {
        return 'test';
    }
}


function getFilteredFileListFromDir(folder, ext, callback) {
    // console.log('test2');
    fs.readdir(folder, function (err, list) {
        // console.log('test4');
        if (err) return callback(err);
        var res = filterFiles(list, ext);

        callback(null, res);
    });
    // console.log('test3');
}


function filterFiles(list, ext) {
    var res = list.filter(function (value, index, array) {
        if (path.extname(value) == '.' + ext) return true;
    });
    return res;
}



module.exports = function (folder, ext, callback) {
    // console.log('test1');
    return getFilteredFileListFromDir(folder, ext, callback);
};



// module.exports.action = function (folder, ext) {
//     return action(folder, ext);
// };

// module.exports.test = function () {

//     var test = function () {
//         return 'test';
//     }
//     console.log(test())
// };

// module.exports = My;







