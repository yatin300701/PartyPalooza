import Joi from "joi";
import express from "express";
import { CommentServices } from "../services/CommentsServices";
import { Collection } from "mongodb";
import { authMiddleware } from "../loginMiddleware";
const router = express.Router();

router.put("/comments", authMiddleware, async (req, res) => {
  const joiSchema = Joi.object({
    comment: Joi.string().required(),
    userId: Joi.string().required(),
    stars: Joi.string().required(),
    productsId: Joi.string().required(),
  });
  try {
    const { value, error } = joiSchema.validate(req.body, {
      stripUnknown: true,
    });
    if (error) return res.status(400).json({ msg: error });

    console.log("commenting ....");

    const result = await CommentServices.addComments(value);
    res.status(200).json({ data: result });
  } catch (e: any) {
    res.status(400).json({ msg: e.message });
  }
});
router.get("/comments/:item", authMiddleware, async (req, res) => {
  const item = req.params.item;
  try {
    if (!item) {
      return res.status(400).json({ msg: "id or item not given" });
    }
    const result = await CommentServices.allComments({ productsId: item });
    res.status(200).json({ data: result });
  } catch (e) {
    res.status(400).json({ msg: e });
  }
});
router.get("/reply/:id", async (req, res) => {
  const id = req.params.id
  try {
    const result = await CommentServices.allReples(id)
    res.status(200).json({ data: result })
  } catch (e: any) {
    res.status(400).json({ msg: e.message })
  }
})
router.post("/reply/:id", async (req, res) => {
  const id = req.params.id;
  const joiSchema = Joi.object({
    comment: Joi.string(),
    to: Joi.string(),
    by: Joi.string()
  })
  try {
    const { value, error } = joiSchema.validate(req.body, { stripUnknown: true })
    if (error) res.status(400).json({ msg: "req body is not proper" })
    const result = await CommentServices.addReply(value, id)

    res.status(200).json({ data: result })

  }
  catch (e: any) {
    res.status(400).json({ msg: e.message })
  }
})

export default router;
