const dbConnect = require('./mongodb');

const updateData = async () =>{
    let data = await dbConnect();
    let result= await data.updateOne(
        {
            name:'note 10'},{
                $set: {name:'note 20 pro',price:500}
            }
    );
    console.log('update');
}

updateData();

