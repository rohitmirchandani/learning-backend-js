var express = require("express");
var app = express();
var handlebars = require("express3-handlebars").create({defaultLayout:'main'});
// unless specified use defaultLayout
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/about',(req,res)=>{
    res.render('about');
})

app.use((req,res,next)=>{
    res.status(404);
    res.render('404');
})

app.use((err, req, res, next)=>{
    res.status(500);
    res.render('500');
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})