const http = require("http")
const fs = require("fs")
const _ = require("lodash")

const hostname = "localhost"
const port = 3000

const server = http.createServer((request, response) => {
    //lodash
    const num = _.random(0, 1000)
    console.log(num)
    const greet = _.once(() => {
        console.log("hello")
    })

    //header content type
    response.setHeader("Content-Type", "text/html")

    let path = './view/'

    switch (request.url) {
        case "/":
            path += "index.html"
            response.statusCode = 200;
            break
        case "/user":
            path += "user.html"
            response.statusCode = 200;
            break
        case "/user-profile":
            response.setHeader("Location", "/user");
            response.statusCode = 301;
            response.end()
            break
        default:
            path += "404.html"
            response.statusCode = 404;
            break
    }

    fs.readFile(`${path}`, (err, data) => {
        if (err)
            console.log(err)
        else {
            response.write(data)
        }
        response.end()
    })
})

server.listen(port, hostname, () => {
    console.log("listening 3000")
})