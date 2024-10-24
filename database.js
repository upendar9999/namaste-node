const { MongoClient } = require('mongodb');

const url =
"mongodb+srv://namastedev:VhcsSxR40o9z90t8@namastenode.c5qlg.mongodb.net/";

const client = new MongoClient(url);

const dbName = 'HelloWorld';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');
  
    // the following code examples can be pasted here...
    const data ={
        firstname:"Ranveer",
        lastname:"Singh",
        city:"Mumbai",
        phonenumber:"124154"
    };

       const insertResult = await collection.insertOne(data);
       console.log('Inserted documents =>', insertResult);

    const findResult = await collection.find({}).toArray();
     console.log('Found documents =>', findResult);

     const countResult = await collection.countDocuments({});
     console.log("Count of documents in User Collection=>",countResult);

    const result = await collection.find({firstname:"Deepika"}).count();
    console.log("Result is =>",result);
  
    return 'done.';
  }

  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
