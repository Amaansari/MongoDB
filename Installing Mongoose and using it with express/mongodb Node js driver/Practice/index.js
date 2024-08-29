const {MongoClient} = require('mongodb')

const url = "mongodb://localhost:27017"
const client = new MongoClient(url)

const main = async ()=>{
    // await client.connect();
    // console.log("connected successfully to the server!");
    const dbname = "student"
    const db = client.db(dbname)
    const collection = db.collection("courses")
    // const insertedRes = await collection.insertMany([
    //     {
    //         name:"amaan",
    //         course:"Btech"
    //     },
    //     {
    //         name:"Shadda",
    //         course:"MA"
    //     },
    //     {
    //         name:"Hannan",
    //         course:"Computer Course"
    //     }
    // ])
    const insertedRes = await collection.insertMany([
        {name:"shan",
            course:"MA"
        },
        {
            name:"Chandni",
            course:"Btech"
        }
    ])
    console.log('inserted successfully', insertedRes)
    // const deleteRes = await collection.deleteMany({a:10,b:30});
    // console.log(deleteRes)
    const totalres = await collection.find({course:"MA"}).toArray();
    console.log("total docs =>",totalres)
    return 'done';
}
main()
.then(console.log)
.catch(console.error)

