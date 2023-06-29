import { MongoClient, ServerApiVersion } from "mongodb";

export let db;
let uri =
  "mongodb+srv://yatin300701:PULLLCnTOxBWoJ28@db.itvpo3e.mongodb.net/?retryWrites=true&w=majority";
export const createConnection = async () => {
  try {
    const client = new MongoClient(uri);
    await client.connect();

    db = client.db("Db");
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

  } catch (e:any) {
    console.log(e.message);
  }
};
