const moongose = require("mongoose")
const Schema = moongose.Schema

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Blog = moongose.model("Blog", blogSchema)

module.exports = Blog;