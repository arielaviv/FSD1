const { Router } = require("express");
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
} = require("../controllers/post");

const router = Router();

router.post("/", createPost);
router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.put("/:id", updatePost);

module.exports = router;
