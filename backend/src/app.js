const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors({
   origin: process.env.CLIENT_URL,
   methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
   allowedHeaders: ["Content-Type", "Authorization"],
   credentials: true
}));
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Backend is running")
})

const newsRoutes = require("./routes/newsRoutes");
const authRoutes = require("./routes/authRoutes");
const path = require("path");

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use("/api/auth", authRoutes);
app.use("/api/news", newsRoutes);
app.use("/uploads", express.static("uploads"));


module.exports = app;