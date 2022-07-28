// Promise.all([
//     Promise.resolve("First promise is resolve"),
//     Promise.reject("Second promise is reject"),
//     Promise.resolve("Third promise is resolve")
// ]).then(result => {
//     console.log("Promise.all method is successfully exicute" + result);
// }).catch(err => {
//     console.log("Error" + err);
// })

// Promise.allSettled([
//     Promise.resolve("resolve"),
//     Promise.reject("reject"),
//     Promise.resolve("resolve"),
//     Promise.resolve("resolve"),
//     Promise.reject("reject")
// ]).then(console.log);

Promise.allSettled([
    Promise.resolve("allsettled First promise is resolve"),
    Promise.resolve("allsettled second promise is resolve"),
    Promise.reject("allsettled third promise is reject"),
    Promise.reject("allsettled fourth promise is reject"),
    Promise.resolve("allsettled fifth promise is resolve")
]).then(result => {
    console.log(result);
})