const async = require("async");
async.parallel([
        function callback() {
            setTimeout(function() {
                console.log("First callback");
                callback(null, 1);
            }, 200)
        },
        function callback() {
            setTimeout(function() {
                console.log("First callback");
                callback(null, 2);
            }, 400)
        },
        function callback() {
            setTimeout(function() {
                console.log("First callback");
                callback(null, 3);
            }, 600)
        }
    ],
    function(err, result) {
        console.log(result);
    })