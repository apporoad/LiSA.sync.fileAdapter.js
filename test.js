var fileA = require('./index')

var D = __dirname + '/test.data.json'

console.log(fileA.getId(D))

// fileA.writer(D,{
//     hello : " good good day",
//     hop : {
//         name : "sexy"
//     }
// })

console.log(fileA.syncReader(D))

fileA.reader(D).then(data=>{
    console.log(data)
})