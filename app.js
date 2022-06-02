const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname,"./public");
app.use(express.static(publicPath));

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening.. :)" );
  });

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
});
app.get('/registro',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/registro.html"));
});
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"));
});

app.get('/datos',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/registro.html"));
});



