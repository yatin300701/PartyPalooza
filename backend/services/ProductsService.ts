import { ObjectId } from "mongodb";
import { DataBase } from "./DbServices";

export class ProductService {
  static async putCakes(cake) {
    let result = await DataBase.cakeCollection.insertOne(cake);
    if (!result) throw Error("Mongodb not working properly");
    return "Added Cake";
  }

  static async getDetail(id: ObjectId, item: string) {
    let collection;
    if (item == "cake") {
      collection = DataBase.cakeCollection;
    } else if (item == "decoration") {
      collection = DataBase.decorationCollection;
    } else {
      collection = DataBase.othersCollection;
    }
    let result = await collection.find({ _id: new ObjectId(id) }).toArray();
    return { result };
  }

  static async getCakes() {
    let result = await DataBase.cakeCollection.find({}).toArray();
    return result;
  }

  static async putOthers(payload: any) {
    await DataBase.othersCollection.insertOne(payload);
    return "Added Others";
  }

  static async getOthers() {
    let result = await DataBase.othersCollection.find({}).toArray();
    // console.log(result)
    return result;
  }
  static async putDecoration(cake) {
    let result = await DataBase.decorationCollection.insertOne(cake);
    if (!result) throw Error("Mongodb not working properly");
    return "Added Decoration";
  }
  static async getDecoration() {
    let result = await DataBase.decorationCollection.find({}).toArray();
    return result;
  }
}
