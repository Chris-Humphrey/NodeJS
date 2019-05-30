// var sum = 0
// for(i=2; i<process.argv.length; i++){
//     sum += parseInt(process.argv[i])
// }
// console.log(sum)

var fs = require('fs')

function run(x){
    var file = fs.readFileSync(x);

var str = file.toString()

console.log(str.split(' '));
}
