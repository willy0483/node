import express, { request } from "express";
const app = express();
const port = 3232;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/contact", (req, res) => {
  res.send("Contact");
});

app.listen(port, () => {
  console.log(`
    express køre på port ${port}   
    http://localhost:${port}/
    http://localhost:${port}/about
    http://localhost:${port}/contact`);
});
