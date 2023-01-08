const {MongoClient} = require('mongodb')
const url= 'mongodb://127.0.0.1:27017';
const databaseName='e-com'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    db= result.db(databaseName);
    return  db.collection('Products');
    // let data = await collection.find({name:'redmi note 8 '}).toArray();
    // console.log(data)
}

module.exports=getData;