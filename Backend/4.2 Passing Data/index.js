import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

function wordLengthText(a , b){
    let cnt = a.length + b.length;

    return cnt;
}

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", {
      startText : "Type your name!",
      name : req.body.fName, 
      sname : req.body.lName

    })
});

app.post("/submit", (req, res) => {
    // res.locals = {
    //   startText: `There are ${wordLengthText(req.body.fName, req.body.lName)} letters`
    // }
    res.render("index.ejs", {
      startText : `There are ${wordLengthText(req.body.fName, req.body.lName)} letters`,
    })

    console.log(req.body);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
