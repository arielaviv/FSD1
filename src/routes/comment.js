const { Router } = require("express");
const {
  createComment,
  getAllComments,
  getCommentById,
  updateComment,
  deleteComment,
} = require("../controllers/comment");

const router = Router();

router.post("/", createComment);
router.get("/", getAllComments);
router.get("/:id", getCommentById);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

module.exports = router;
