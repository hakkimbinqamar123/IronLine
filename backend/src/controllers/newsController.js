const News = require("../models/News");

exports.createNews = async (req, res) => {
  try {
    const { title, category, description } = req.body;

    const images = req.files
      ? req.files.map(file => file.filename)
      : [];

    const news = await News.create({
      title,
      category,
      description,
      images,
      createdBy: req.user.id
    });

    res.status(201).json({
      message: "News created successfully",
      news
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getAllNews = async (req, res) => {
  const news = await News.find().sort({ createdAt: -1 });
  res.json(news);
};

/**
 * GET SINGLE NEWS + INCREMENT VIEWS
 */
exports.getNewsDetail = async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    );

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * LIKE / UNLIKE NEWS
 */
exports.toggleLike = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    news.likes += 1;
    await news.save();

    res.json({ likes: news.likes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateNews = async (req, res) => {
  try {
    const { title, category, description } = req.body;

    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    // Optional: Only creator/admin can edit
    // if (news.createdBy.toString() !== req.user.id) {
    //   return res.status(403).json({ message: "Not authorized" });
    // }

    news.title = title || news.title;
    news.category = category || news.category;
    news.description = description || news.description;

    await news.save();

    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE NEWS
exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    // Optional: restrict to admin / creator
    // if (news.createdBy.toString() !== req.user.id) {
    //   return res.status(403).json({ message: "Not authorized" });
    // }

    await news.deleteOne();

    res.json({ message: "News deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
