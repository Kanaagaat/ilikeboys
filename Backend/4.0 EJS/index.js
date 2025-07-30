import express from "express";


const app = express();
const port = 3000;

var d = new Date();
var day = d.getDay();


app.get("/", (req, res) => {

    if(day >= 1 && day <= 5){
        var weekDay = "It is Working day";
        var adv = "Good luck brother";
    }
    else{
        var weekDay = "It is weekend";
        var adv = "It is time to have a fun";
    }

    res.render("index.ejs" , {
        dayType : weekDay, 
        advice: adv,
    });

    console.log(`Day of the week: ${day}`);
    console.log(`Day advice: ${adv}`);
   
    
});

app.listen(port , () => {
    console.log(`Server is working on port ${port}`);
});