// var greet = require('./class')
// console.log(greet);

// var obj = require('./class');

// console.log(obj)




// let area = require('./class');

// let radius = 2;

// let result = area(radius);

// console.log(result)



// let person = require('./class');

// var chris = new person('Chris', 'Humphrey')

// var alfie = new person('Alfie', 'Santos')

// chris.printMethod();
// alfie.printMethod();




// let http = require('http');
// let dt = new Date();

// let server = http.createServer((request, response)=>{
//     response.writeHead(200, {'Content-Type': 'text/html'})
//     response.write('Hello World ' + dt.toDateString())
//     response.end();
// })

// server.listen(5000);
// console.log('Your web server is now running on port 5000.')


// let fs = require('fs');
// let myContent = "I Heart Node"
// let fileName = 'myFile.txt'

// fs.writeFile(fileName, myContent, (error)=>{
//     if(error){
//         console.log(error.message);
//     }
//     console.log(`file: ${fileName}`)
// });


// let fs = require('fs');

// fs.readFile('lorem.txt', (error, buffer)=>{
//     if(error){
//         console.log(error.message);
//         return;
//     }
//     console.log(buffer.toString());
// })


// var fs = require('fs');
// fs.unlink('./lorem.txt', (err) => {
//     if (err) throw err;
//     console.log('successfully deleted lorem');
//   });




let superHero = require('superheroes');
console.log(superHero.random())