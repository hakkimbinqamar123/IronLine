const express = require("express");
const {
  createNews,
  getAllNews,
  getNewsDetail,
  toggleLike,
  updateNews,
  deleteNews
} = require("../controllers/newsController");

const router = express.Router();
const upload = require("../config/multer");
const protect = require("../middleware/authMiddleware");

router.post("/", protect, upload.array("images", 5), createNews);
router.get("/", getAllNews);
router.get("/:id", getNewsDetail);
router.post("/:id/like", protect, toggleLike);
router.put("/:id", protect, updateNews);
router.delete("/:id", protect, deleteNews);

module.exports = router;
