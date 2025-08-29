import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

//TODO 1: Add your own bearer token from the previous lesson.
const yourBearerToken = "e0d781e7-b8e4-4b53-afe7-ad59c197270a";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  // TODO 2: Use axios to POST the data from req.body to the secrets api servers.
  let body = {
    id: req.body.id,
    secret: req.body.secret,
    score: req.body.score,
  };
  console.log(body);
  try {
    await axios.post(API_URL + '/secrets', body, config )
    res.render("index.ejs", {content: JSON.stringify(body)});
  } catch (error) {
    console.error(error);
  }
});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  const secret = req.body.secret;
  const score = req.body.score;
  let body = {
    secret: secret,
    score: score,
  };

  console.log(req.body);
  // TODO 3: Use axios to PUT the data from req.body to the secrets api servers.

  try {
    await axios.put(API_URL + `/secrets/${searchId}`,body, config);
    const response = await axios.get(API_URL + `/secrets/${searchId}`, config);
    res.render("index.ejs", {content: JSON.stringify(response.data)});
    
  } catch (error) {
    console.log(error);
  }
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
  const body = {};
  if (req.body.secret) body.secret = req.body.secret;
  if (req.body.score) body.score = req.body.score;
  console.log(req.body);
  try {
    await axios.patch(API_URL+`/secrets/${searchId}`, body, config);
    const response = await axios.get(API_URL + `/secrets/${searchId}`, config);
    res.render("index.ejs", {content: JSON.stringify(response.data)});

  } catch (error) {
    console.log(error);
  }
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.
  try {
    await axios.delete(API_URL + `/secrets/${searchId}`, config);
    const response = await axios.get(API_URL + `/secrets/${searchId}`, config);
    res.render("index.ejs",{ content: `Secret with id=${searchId} deleted ✅` });

  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
