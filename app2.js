const express = require("express");
const app = express();

app.use(express.static(__dirname + "/app2/"));

app.use("*", function (request, response) {
    let size = Math.round(Math.random() * 15) + 5
    response.send(`<h1 style="font-size:${size}">Not found</h1>`)
});
app.listen(3000);