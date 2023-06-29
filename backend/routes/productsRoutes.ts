import express from "express";
const router = express.Router();
import Joi from "joi";
import { ProductService } from "../services/ProductsService";
import { authMiddleware } from "../loginMiddleware";

// cake - put get
router.post("/cake", async (req, res) => {
  try {
    let joiSchema = Joi.object({
      img: Joi.string(),
      name: Joi.string(),
      tags: Joi.string(),
      rating: Joi.string(),
      price: Joi.string(),
      bakingTime: Joi.string(),
      location: Joi.string(),
      veg: Joi.boolean(),
    });
    let { value, error } = joiSchema.validate(req.body, { stripUnknown: true });
    if (error)
      return res.status(400).json({ msg: "Please provide all values" });
    let result = await ProductService?.putCakes({
      img: value.img,
      name: value.name,
      tags: value.tags,
      rating: value.rating,
      price: value.price,
      bakingTime: value.bakingTime,
      location: value.location,
      veg: value.veg,
    });
    return res.status(200).json({ msg: result });
  } catch (e) {
    res.status(400).json({ msg: e });
  }
});
router.get("/cake", async (req, res) => {
  try {
    // console.log("result");
    let result = await ProductService.getCakes();
    console.log(result);
    return res.status(200).json({ data: result });
  } catch (e) {
    res.status(400).json({ msg: e });
  }
});
router.get("/details/:item/:id", authMiddleware, async (req, res) => {
  const id = req.params.id;
  const item = req.params.item;
  if (!id || !item) {
    return res.status(400).json({ msg: "Item or Id  is missing" });
  }
  try {
    let result = await ProductService.getDetail(id, item);
    return res.status(200).json({ data: result });
  } catch (e) {
    res.status(400).json({ msg: e });
  }
});

// speaker
router.post("/others", async (req, res) => {
  try {
    let joiSchema = Joi.object({
      img: Joi.string(),
      name: Joi.string(),
      tags: Joi.string(),
      rating: Joi.string(),
      price: Joi.string(),
      location: Joi.string(),
      deliveryTime: Joi.string(),
      decoration: Joi.boolean(),
    });
    let { value, error } = joiSchema.validate(req.body, { stripUnknown: true });
    if (error)
      return res.status(400).json({ msg: "Please provide all values" });
    let result = await ProductService.putOthers(value);
    return res.status(200).json({ msg: result });
  } catch (e) {
    res.status(400).json({ msg: e });
  }
});
router.get("/others", async (req, res) => {
  try {
    let result = await ProductService.getOthers();
    return res.status(200).json({ data: result });
  } catch (e) {
    res.status(400).json({ msg: e });
  }
});
// balloons
router.post("/decoration", async (req, res) => {
  try {
    let joiSchema = Joi.object({
      img: Joi.string(),
      name: Joi.string(),
      tags: Joi.string(),
      rating: Joi.string(),
      price: Joi.string(),
      location: Joi.string(),
      deliveryTime: Joi.string(),
      decoration: Joi.boolean(),
    });
    let { value, error } = joiSchema.validate(req.body, { stripUnknown: true });
    if (error)
      return res.status(400).json({ msg: "Please provide all values" });
    let result = await ProductService?.putDecoration({
      img: value.img,
      name: value.name,
      tags: value.tags,
      rating: value.rating,
      price: value.price,
      location: value.location,
      deliveryTime: value.deliveryTime,
      decoration: value.decoration,
    });
    return res.status(200).json({ msg: result });
  } catch (e) {
    res.status(400).json({ msg: e });
  }
});
router.get("/decoration", async (req, res) => {
  try {
    let result = await ProductService.getDecoration();
    return res.status(200).json({ data: result });
  } catch (e) {
    res.status(400).json({ msg: e });
  }
});

export default router;
