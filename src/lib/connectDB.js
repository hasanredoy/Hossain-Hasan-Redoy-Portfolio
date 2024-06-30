const { MongoClient, ServerApiVersion } = require("mongodb");

let db 
// function for connect db 
const connectDB = async()=>{
  if(db)return db
  try {
    // get uri from env file 
    const uri = process.env.MONGODB_URI
    // console.log(uri);
    // connect client 
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    db = client.db("PortfolioDB")
    return db
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default connectDB;