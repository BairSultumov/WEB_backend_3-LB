const express = require("express");
const res = require("express/lib/response");
const app = express();

function color() {
    let r = Math.round(Math.random() * 255)
    let g = Math.round(Math.random() * 255)
    let b = Math.round(Math.random() * 255)
    return `rgb(${r},${g},${b})`
}

app.get(function (request, response, next) {
    let d = new Date().toLocaleTimeString
    console.log(`${d} : ${request.url}`)
    next();
});

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html")
});
app.get("/data/:kol", function (request, response) {
    let str = "<style>div{display:inline-block; width:100px; height:100px; margin:5px;</style>"
    let k = request.params["kol"]
    console.log(k);
    for (let i = 0; i < k; i++)
        str += `<div style="background-color:${color()};"></div>`
    response.send(str)
});
app.get("*", function (request, response, next) {
    let size = Math.round(Math.random() * 15) + 5
    response.send(`<h1 style="font-size:${size}">Страница не найдена</h1>`)
});
app.listen(3000);