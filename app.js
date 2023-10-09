const express = require("express")
const path = require("path")

/**
 * App
 */
const app = express()

/**
 * EJS
 */
app.set("view engine", "ejs")

//Listen
app.listen(3000)

//requests
app.get("/", (req, res) => {
    const blogs = [
        {title:"1",content:"2"},
        {title:"3",content:"4"},
        {title:"5",content:"6"}
    ]
    res.render("./index", { document:"domnyus", title: "yay", content: "sfksdopfmpaodsmfas", blogs})
})

app.get("/user", (req, res) => {
    res.render("./user", { document:"users", title: "yay", content: "sfksdopfmpaodsmfas"})
})

app.get("/create", (req, res) => {
    res.render("./create", { document:"create", title: "yay", content: "sfksdopfmpaodsmfas"})
})

//redirect
app.get("/old-user", (req, res) => {
    res.redirect("./user")
})

//404
app.use((req, res) => {
    res.status(404).render("./404", { document:"404", title: "yay", content: "sfksdopfmpaodsmfas"})    
})