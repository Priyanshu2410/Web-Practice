const dbConnect = require('./mongodb');

const insert = async ()=>{
const db = await dbConnect();
const result = await db.insert(
    [
    {name:'note 10',brand:'redmi',price:'200'},
    {name:'note 11',brand:'redmi',price:'250'},
    {name:'note 12',brand:'redmi',price:'300'}
    ]
);

if(result.acknowledged)
{
    console.log('data insert');
}
}
insert();