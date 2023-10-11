const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const blogRouter = require("./routes/blogRoutes")

/**
 * App
*/
const app = express()
/**
 * Connection string
 */
const URI = "mongodb+srv://root:root@cluster0.qworsdx.mongodb.net/node?retryWrites=true&w=majority"
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => {
    console.log("connected")
    //Listen
    app.listen(3000)
}).catch((err) => { console.error(err) })

/**
 * EJS
 */
app.set("view engine", "ejs")

//static files
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.use(morgan("dev"))
app.use("/blogs", blogRouter)
//requests

app.get("/user", (req, res) => {
    res.render("./user", { document: "users", title: "yay", content: "sfksdopfmpaodsmfas" })
})

app.get("/create", (req, res) => {
    res.render("./create", { document: "create", title: "yay", content: "sfksdopfmpaodsmfas" })
})

//redirect
app.get("/old-user", (req, res) => {
    res.redirect("./user")
})

//404
app.use((req, res) => {
    res.status(404).render("./404", { document: "404", title: "yay", content: "sfksdopfmpaodsmfas" })
})