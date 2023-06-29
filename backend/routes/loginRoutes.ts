import express from "express";
import Joi from "joi";
import jwt from "jsonwebtoken";
import { DataBase } from "../services/DbServices";
import { generateRandomOtp, mail } from "../helpers/utility";
const router = express.Router();

router.get("/signup", async (req, res) => {
  res.json({ working: "yes!!" });
});
router.post("/signup", async (req, res) => {
  try {
    const joiSchema = Joi.object({
      username: Joi.string().required(),
      email: Joi.string().required(),
      phoneNo: Joi.string().required(),
    });

    let { value, error } = joiSchema.validate(req.body, {
      stripUnknown: true,
    });
    if (error)
      return res.status(400).json({ msg: "Please provide all values" });
    const otp = generateRandomOtp();

    let check: any = await DataBase.loginOtpCollection.findOne({
      email: value?.email,
    });

    if (check != undefined) {
      if (check?.status == true) {
        throw new Error("Email already registered");
      } else {
        await DataBase.loginOtpCollection.deleteOne({ email: value.email });
        return;
      }
    }

    await DataBase.loginOtpCollection.insertOne({
      username: value.username,
      email: value.email,
      phoneNo: value.phoneNo,
      otp: otp,
      status: false,
    });
    mail(
      value.email,
      `PartyPlazoo Login Otp Mail`,
      `Your otp for PartyPlazoo is ${otp}`
    );

    console.log("Mail sent with otp ", otp);

    return res.status(200).json({ data: `Mail Send with otp` });
  } catch (e) {
    return res.status(400).json({ msg: e || "somthing unexpected occured" });
  }
});
router.post("/signupotp", async (req, res) => {
  const joiSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required(),
    phoneNo: Joi.string().required(),
    otp: Joi.string().required(),
  });
  try {
    let { value, error } = joiSchema.validate(req.body, { stripUnknown: true });
    if (error)
      return res
        .status(400)
        .json({ msg: "Please provide all values correctly" });
    let check = await DataBase.loginOtpCollection.findOne({
      phoneNo: value.phoneNo,
    });
    if (!check) throw Error("Email not signed up");
    if (check?.otp != value.otp) {
      console.log(`Wrong otp : in db ${check.otp} and  given ${value.otp}`);
      throw Error(`Wrong Otp `);
    }
    await DataBase.loginOtpCollection.updateOne(
      { phoneNo: value.phoneNo },
      { $set: { otp: "", status: true } }
    );
    return res.status(200).json({ data: "Sign In Successfull" });
  } catch (e) {
    res.status(400).json({ msg: e || "somthing unexpected occured" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const joiSchema = Joi.object({
      email: Joi.string(),
    });
    let { value, error } = joiSchema.validate(req.body, { stripUnknown: true });
    if (error) res.status(400).json({ msg: "Body not correct" });
    let check = await DataBase.loginOtpCollection.find({
      phoneNo: value.phoneNo,
    });
    if (!check) res.status(400).json({ msg: "Not signed in" });
    const otp = generateRandomOtp();
    mail(
      value.email,
      `PartyPlazoo Login Otp Mail`,
      `Your otp for PartyPlazoo is ${otp}`
    );
    await DataBase.loginOtpCollection.updateOne(
      { email: value.email },
      { $set: { otp: otp, status: true } }
    );

    return res.status(200).json({ data: `Mail Send with otp ${otp}` });
  } catch (e) {
    res.status(400).json({ msg: e });
  }
});

router.post("/loginotp", async (req, res) => {
  try {
    const joiSchema = Joi.object({
      email: Joi.string(),
      otp: Joi.string(),
    });
    let { value, error } = joiSchema.validate(req.body, { stripUnknown: true });
    if (error)
      return res
        .status(400)
        .json({ msg: "Please provide all values correctly" });

    let check = await DataBase.loginOtpCollection.findOne({
      email: value.email,
    });
    if (!check) throw Error("Email not signed up");
    if (check?.otp != value.otp) {
      throw Error("Wrong Otp");
    }
    await DataBase.loginOtpCollection.updateOne(
      { email: value.email },
      { $set: { otp: "", status: true } }
    );
    const token = jwt.sign(check, process.env.Token);
    return res.status(200).send([token, check]);
  } catch (e) {
    res.status(400).json({ msg: e });
  }
});

export default router;
