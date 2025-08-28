import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

function randomIndex(len){
  if(len > 0){
    let randomNumber = Math.floor(Math.random() * len);
    return randomNumber;
  }

}

async function infoAPI(type , participants){ //{ type: 'education', participants: '1' } 


  try {
    
     let patternUrl = "?type=" + type + "&participants=" + participants;
    let url = "https://bored-api.appbrewery.com/filter" + patternUrl;

    const response = await axios.get(url);
    let result = response.data;
    let lenObject = result.length;
    let randomIndexObject = randomIndex(lenObject);
    return result[randomIndexObject];
    
  } catch (error) {
    console.log(error);
    return null;
  }
  
  
}

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.
app.get("/", async (req, res) => {
  try {
    
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { data: result, error: null });

   

  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    }); 
  }
});

app.post("/", async (req, res) => {
  console.log(req.body); //{ type: 'education', participants: '1' }
  let result = await infoAPI(req.body.type, req.body.participants);

  if(result){
    res.render("index.ejs", { data: result, error: null });
  }
  else{
    res.render("index.ejs", { data: null, error: "No activities that match your criteria"  });

  }


  // Step 2: Play around with the drop downs and see what gets logged.
  // Use axios to make an API request to the /filter endpoint. Making
  // sure you're passing both the type and participants queries.
  // Render the index.ejs file with a single *random* activity that comes back
  // from the API request.
  // Step 3: If you get a 404 error (resource not found) from the API request.
  // Pass an error to the index.ejs to tell the user:
  // "No activities that match your criteria."
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
