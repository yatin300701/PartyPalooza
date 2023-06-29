import { db } from "../helpers/connection";

export class DataBase {
  static get loginOtpCollection() {
    return db?.collection("loginOtps");
  }
  static get cakeCollection() {
    return db?.collection("cakes");
  }
  static get decorationCollection() {
    return db?.collection("decoration");
  }
  static get othersCollection() {
    return db?.collection("others");
  }
  static get commentsCollection() {
    return db?.collection("comments");
  }
  static get replyCollection() {
    return db?.collection("reply");
  }
}
