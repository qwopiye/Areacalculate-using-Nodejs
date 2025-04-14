const express=require("express");
const app= express();

const bodyParser=require("body-parser");


 app.use(bodyParser.urlencoded({extended : false}))

// // parse application/json
 app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/home.html");
})
app.get("/circle",(req,res)=>{
    res.sendFile(__dirname +"/ciircle.html");
})
app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname +"/triangle.html");
})

app.post("/circle",(req,res)=>{
    const radius=req.body.radius;
    const Area=Math.PI*radius*radius;
    res.send("<h1> Area of Radius </h1>"+Area);
})
app.post("/triangle",(req,res)=>{
    const height =req.body.height;
    const base = req.body.base
    const Area=0.5*height*base;
    res.send("<h1> Area of Triangle </h1>"+Area);
})
app.listen(3000,()=>{
    console.log("the server is running of 3000 port");
})
