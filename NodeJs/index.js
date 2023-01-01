// const app = require('./app')


// console.log("priyanshu");

// const a=10;
// const b=20; 
// if(a===10)
// {
//     console.log("match");
// }

// for(let i=0;i<10;i++)
// {
//     console.log(i);
// }

// const arr=[1,5,9,8,2,4,6,1,4,2];
// // console.log(arr);

// console.log(app.z);

// let result = arr.filter((item)=>{
//     return item>=5
// })
// console.log(result);

// const http = require('http');

// function datacontrol(req,resp)
// {
//     resp.write("<h1>hello world</h1>");
//     resp.end();
// }
// http.createServer(datacontrol).listen(4500);

// const color= require('colors');
// console.log("priyanshu".yellow);

// console.log("djnk");
// const app = require('./app')
// const http = require('http');
// http.createServer((req,resp)=>{
// resp.writeHead(200,{'Content-Type':'application/json'});
// resp.write(JSON.stringify(app));
// resp.end();
//  }).listen(4500);

// console.log(process.argv)





// const fs=require('fs');

// const input = process.argv;
// if(input[2]==='add')
// {
//     fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]==='remove')
// {
//     fs.unlinkSync(input[3]);
// }
// else
// {
//     console.log("invalid command");
// } 

const fs = require('fs');
const path = require('path');
// const dirPath = path.join(__dirname,'files');

// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","My name is priyanshu")
// }

const dirPath = path.join(__dirname,'files');
const filePath = `${dirPath}/hello.txt`;

fs.writeFileSync(filePath,"My name is priyanshu");