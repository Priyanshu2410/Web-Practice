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

// const express = require('express');
// const app = express();

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

// const path = require('path');
// const publicPath = path.join(__dirname,'public');

// app.use(express.static(publicPath));
// app.get('/about',(_,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`);
// })
// app.get('*',(_,resp)=>{
//     resp.sendFile(`${publicPath}/404.html`);
// })

// app.set('view engine','ejs');
// app.get('/profile',(_,resp)=>{
//     resp.render('profile');
// });

// app.listen(5000);





// const express = require('express');
// const app = express();

// const reqFilter = (req,resp,next)=>{
//     if(!req.query.age)
//     {
//         resp.send('age is required');
//     }
//     else if(req.query.age<18)
//     {
//         resp.send('age must be greater than 18');
//     }
//     else
//     {
//         next();
//     }


   
// }

// // app.use(reqFilter);
// app.get('/',reqFilter,(req,resp)=>{
//     resp.send('welcome to home page');
// } )
// app.get('/user',(req,resp)=>{
//     resp.send('welcome to user page');
// } )
// app.get('/about',(req,resp)=>{
//     resp.send('welcome to about page');
// } )

// app.listen(5000);

// const mongoose = require("mongoose");

// const mongo = mongoose
//   .connect(
//     "mongodb://127.0.0.1:27017"
//   )
//   .then(() => {
//     console.log("connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });




// const getData = require('./mongodb')

// const main = async ()=>{
//     let data = await getData();
//     data=await data.find().toArray();
//     console.log(data);
// }
// main();

// // getData().then((resp)=>{
// //     resp.find({brand: 'redmi'}).toArray().then((data)=>{
// //         console.log(data)
// //     })
// // })


// const { default: mongoose } = require('mongoose');
// const mangoose = require('mongoose');
// mongoose.connect("mongodb://127.0.0.1:27017/e-com")
// const  Productsh = new mongoose.Schema({
//     name:String,
//     price:Number,
//     brand:String
// }); 

// const Saveindb = async ()=>{
//     const productModel = await mongoose.model('Products',Productsh);
//     let data = new productModel({name:"note 8",price:500,brand:"redmi "});
//     let result = await data.save();
//     console.log(result);
// }


// const updateIndb=async()=>{
//     const Product = mongoose.model('Products',Productsh);
//     let data = await Product.updateOne(
//         {name:"note 8"},
//         {
//             $set:{price:700}
//         }
        
//     )
//     console.log(data);
// }
// updateIndb()



// const express = require('express');
// require('./config');
// const Products =require('./product');

// const app = express();
// app.use(express.json());
// // app.post("/create",async (req,resp)=>{
// //     let data= new Products(req.body);
// //     let result = await data.save();
// //     console.log(result);
// //     resp.send(result);
// // });

// app.get("./item",async (req,resp)=>{
//     let data =await Products.find();
//     resp.send(data);    
//     // console.log("done");
// });

// app.listen(4500);


// serch API

// const express = require('express');
// require('./config');
// const Products =require('./product');
// const app=express();

// app.use(express.json());

// app.get('/serch/:key',async(req,resp)=>{
//     console.log(req.params.key);
//     let data = await Products.find
//     (
//         {
//             "$or":[
//                 // {"brand":{$regex:req.params.key}} ,
//                 {"name":{$regex:req.params.key}},
//                 {"price":{$regex:req.params.key}}

//             ]
//         }
//     )
//     resp.send(data)
// }) 


// app.listen(4500);


// upload file

// const express = require('express');
// const multer = require('multer');
// const app=express();

// const upload = multer({
//     storage:multer.diskStorage({
//         destination:function(req,file,cb)
//         {
//             cb(null,"upload")
//         },
//         filename:function(req,file,cb)
//         {
//             cb(null,file.fieldname+"-"+Date.now()+".jpg")
//         }
//     })
// }).single("user_file");
// app.post("/upload",upload,(req,resp)=>{
//     resp.send("file uploaded");
// });

// app.listen(5000);

const os = require('os');
// console.log(os.arch());
// console.log(os.freemem()/(1024*1024*1024));
// console.log(os.totalmem()/(1024*1024*1024));
// console.log(os.hostname());
console.log(os.userInfo());