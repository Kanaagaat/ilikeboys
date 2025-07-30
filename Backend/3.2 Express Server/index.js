import express from "express"
import fs from "fs"


const app = express();
const port = 3000;
var file;
var text ="";
app.get("/", (req, res) => {
    text = req.rawHeaders.toString();
    console.log(req.rawHeaders);
    res.send("<h1>Welcome to the Express Server</h1>");
})

app.get("/about", (req, res) =>{
    res.send("<h1>About Page</h1>");
})
app.get("/contact", (req, res) =>{
    res.send("<h1>Contact Page</h1>");
})

app.listen(port, () =>{
console.log(`Server is runing on port ${port}`);
})

console.log(text);
file = fs.writeFile("test.txt", text, (err) => {
if(err) throw err;
console.log("File has been saved!");
})    
