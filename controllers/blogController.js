//
const Blog = require("../model/blog")

const blog_index = (req, res) =>
{
    const blog = new Blog(req.body)

    blog.save().then(
        res.redirect("/")
    ).catch(
        (err) => { console.log(err)}
    )
}

const blog_delete = (req, res) => {
    Blog.findByIdAndDelete(req.params.id).then(
        (result) => {
            console.log(req.params.id)
            res.json({ red: "/" })
        }
    ).catch((err) => { console.log(err) })
}

const blog_find = (req, res) => {
    Blog.find().sort({createdAt: -1}).then(
        (blogs) => {
            res.render("./index", { document: "domnyus", title: "yay", content: "sfksdopfmpaodsmfas", blogs })
        }
    ).catch(
        (err) => {
            console.log(err)
        }
    )

}

module.exports = {
    blog_index, blog_delete, blog_find
}