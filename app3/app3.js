const express = require("express");
const app = express();
function color(){
    let r=Math.round(Math.random()*255)
    let g=Math.round(Math.random()*255)
    let b=Math.round(Math.random()*255)
    return `rgb(${r},${g},${b})`
}
app.get(function (request, response,next) {
    let d = new Date().toLocaleTimeString
    console.log(`${d} : ${request.url}`)
    next();
});

app.get(/\/(index.html|index|home|main|index.php)/gi, function (request, response) {
    response.redirect("/")
});
app.get(/\/(contact(.html)?\/?|contact(\/)?)/gi, function (request, response) {
    response.redirect("/contact")
});
app.get(/\/(about(.html)?\/?|about(\/)?)/gi, function (request, response) {
    response.redirect("/about")
});

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html")
});
app.get("/contact", function (request, response) {
    response.sendFile(__dirname + "/contact.html")
});
app.get("/about", function (request, response) {
    response.sendFile(__dirname + "/about.html")
});
app.get("*",function(request, response, next){ 
    let size=Math.round(Math.random()*15)+5
    response.send(`<h1 style="font-size:${size}">Not found</h1>`)
}); 
app.listen(3000)