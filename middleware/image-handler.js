const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads");
    },

    filename: (req, file, cb) => {
        const uniqueName = Date.now() + path.extname(file.originalname);
        cb(null, uniqueName);
    }
});

const fileFilter = (req, file, cb) => {
    const allowed = /jpeg|jpg|png|webp/;
    if (!allowed.test(file.mimetype)) {
        return cb(new Error("Only image files are allowed"), false);
    }
    cb(null, true);
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 2 * 1024 * 1024
    }
});

const deleteGameImage = (imageUrl) => {
    if (!imageUrl) return;
    if (imageUrl.startsWith("http")) return;

    if (imageUrl.startsWith("/uploads/")) {
        const filePath = path.join(__dirname, "..", "public", imageUrl);
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }
};

module.exports = { upload, deleteGameImage };