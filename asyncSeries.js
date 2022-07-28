const async = require("async");
async.series([
        function callback() {
            setTimeout(function() {
                console.log("First callback");
                callback(null, "one");
            }, 2000)
        },
        function callback() {
            setTimeout(function() {
                console.log("Second callback");
                callback(null, "two");
            }, 1000)
        },
        function callback() {
            setTimeout(function() {
                console.log("Third callback");
                callback(null, "Three");
            }, 3000)
        }
    ],
    function(err, result) {
        console.log(result);
    })