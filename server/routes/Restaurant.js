import express from "express";
import Restaurant from "../models/Restaurant.js";

const router = express.Router();

// Saving the post
router.post("/save", async (req, res) => {
  try {
    const newPost = new Restaurant(req.body);
    await newPost.save();
    res.status(200).json({ success: "Post saved successfully" });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Restaurant.find({});
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Get a specific post
router.get("/:id", async (req, res) => {
  try {
    const post = await Restaurant.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Update a post
router.put("/:id", async (req, res) => {
  try {
    await Restaurant.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ success: "Post updated successfully" });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Delete a post
router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Restaurant.findByIdAndRemove(req.params.id);
    res.status(200).json({ success: "Post deleted successfully", deletedPost });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

export default router;
