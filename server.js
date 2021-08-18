var express = require("express")
var app = express();
require("dotenv").config({path:".env"})

app.use(express.static(process.cwd() + "/ecommerce-cli/build"))
app.get("/", (req, res)=>{
    res.sendFile(process.cwd() + "/ecommerce-cli/build/index.html")
})
app.listen(process.env.PORT, ()=>{
    console.log("listening")
})