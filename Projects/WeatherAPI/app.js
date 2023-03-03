const https = require("https")
const express = require("express")
const app = express();


app.get("/",function(req,res){
    let url = "https://api.openweathermap.org/data/2.5/weather?q=pune&appid=3280da102fd6405fcbd53e34295b57a6"
    https.get(url,function(response){
        console.log(response)
        response.on("data",function(data){
            const weatherData = JSON.parse(data)
            const temperature  = weatherData.main.temp
            const tempindegree = (temperature - 32) * (5/9)
            // console.log(temperature)
            res.send("<h1>hello, Today's temperature is "+temperature+" degree Firenhite</h1>")
        })
    }) 
    
})

app.listen(2000,function(){
    console.log("server is runing on port 2000")
})