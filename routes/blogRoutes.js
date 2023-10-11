const express = require("express")
const router = express.Router()
const blogController = require("../controllers/blogController")

router.post("/", blogController.blog_index)

router.delete("/:id", blogController.blog_delete)

router.get("/", blogController.blog_find)

module.exports = router