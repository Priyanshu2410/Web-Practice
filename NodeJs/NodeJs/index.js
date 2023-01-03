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

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'files');

// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","My name is priyanshu")
// }

// const dirPath = path.join(__dirname,'files');
// const filePath = `${dirPath}/hello.txt`;

// fs.writeFileSync(filePath,"My name is priyanshu");

const express = require('express');
const app = express();

// app.get('',(req,resp)=>{
//      console.log("data sent by browser",req.query.name)
//     resp.send(`
//     <h1>heloo world</h1>
//     <a href="/about">go to about page</a>
//     `);
// })

// app.get('/about',(req,resp)=>{
//     resp.send(`
//     <input type="text" placeholder="user name"/>
//     <button>submit</button>
//     <a href="/">go to home page</a>
//     `);
// })

// app.get('/login',(req,resp)=>{
//     resp.send('heloo world login page');
// })

const path = require('path');
const publicPath = path.join(__dirname,'public');

app.use(express.static(publicPath));
app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`);
})
app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/404.html`);
})

app.set('view engine','ejs');
app.get('/profile',(_,resp)=>{
    resp.render('profile');
});

app.listen(5000);