import { ObjectId } from "mongodb";
import { DataBase } from "./DbServices";

export class CommentServices {
  static async addComments(payload: { comment; userId; productsId; stars }) {
    let find = await DataBase.commentsCollection.findOne({ userId: new ObjectId(payload.userId) })
    if (!find) {
      let result = await DataBase.commentsCollection.insertOne({
        userId: new ObjectId(payload.userId),
        productsId: new ObjectId(payload.productsId),
        stars: payload.stars,
        comment: payload.comment,
      })
      if (!result) throw Error("Mongodb not working properly");
    } else {
      let result = await DataBase.commentsCollection.updateOne(
        {

          userId: new ObjectId(payload.userId),

        },
        {
          $set: {
            userId: new ObjectId(payload.userId),
            productsId: new ObjectId(payload.productsId),
            stars: payload.stars,
            comment: payload.comment,
          },
        }
      );
      if (!result) throw Error("Mongodb not working properly");
    }

    return "Added Cake";
  }
  static async allComments(payload: { productsId }) {
    // console.log("all data", payload.productsId);
    let aggregatePipeline = [
      {
        $match: {
          productsId: new ObjectId(payload.productsId),
        },
      },

      {
        $lookup: {
          from: "loginOtps",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
    ];

    let result = await DataBase.commentsCollection
      .aggregate(aggregatePipeline)
      .toArray();
    return result;
  }

  static async allReples(id) {
    let result = await DataBase.replyCollection.find({ commentId: new ObjectId(id) }).toArray()
    return result
  }
  static async addReply(payload, id) {
    let result = await DataBase.replyCollection.insertOne({
      commentId: new ObjectId(id),
      comment: payload.comment,
      to: payload.to,
      by: payload.by
    })
    return "Successfully added"
  }
}
