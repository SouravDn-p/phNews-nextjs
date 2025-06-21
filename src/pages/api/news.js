import { message } from "antd";

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://newshead:2W01pNSstIe1Vl81@cluster0.pb8np.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const db = client.db("NewsHead");
    const newsCollection = db.collection("newses");

    if (req.method === "GET") {
      const news = await newsCollection.find({}).toArray();
      res.send({
        message: "success",
        status: 200,
        data: news,
      });
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
// run().catch(console.dir);
export default run;
