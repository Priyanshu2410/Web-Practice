const dbConnect = require('./mongodb');

const deletedata=async()=>{
    let data = await dbConnect();
    let result = await data.deleteMany({name:'note 10'})
    console.log(result);
    if(result.acknowledged)
    {
        console.log('delete')
    }
}

deletedata();