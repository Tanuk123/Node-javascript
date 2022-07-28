const async = require("async");
async.waterfall([
    function(callback) {
        callback(null, 'gfg', 'one');
    },
    function(arg1, arg2, callback) {
        // The arg1 now equals 'gfg'
        // and arg2 now equals 'one'
        callback(null, 'two');
    },
    function(arg1, callback) {
        // The arg1 now equals 'two'
        callback(null, 'complete');
    }
], function(err, result) {
    // Result now equals 'complete'
});