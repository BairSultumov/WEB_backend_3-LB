const express = require("express"); // подключение express 
const app = express();// для использования Express создаем объект приложения 
// обработчик для маршрута "/" 
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
app.get("/", function (request, response) {
    response.redirect("/home")
});
app.get("/home", function (request, response) {
    response.send("<h1>Главная страница</h1>");
});
app.get("/contact", function (request, response) {
    response.send(`<h1 style="color:${color()}">Контакты</h1>`);
});
app.use(function(request, response, next){ 
    let size=Math.round(Math.random()*15)+5
    response.send(`<h1 style="font-size:${size}">Not found</h1>`)
}); 
app.listen(3000); // начинаем прослушивать подключения на 3000 порту 