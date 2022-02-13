const {MongoClient} = require('mongodb');
const dbConnection = async() =>{
    const uri = "mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true";
    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("connected to db successfully")
        // Make the appropriate DB calls
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
module.exports = dbConnection