import express, { request } from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();
console.log(process.env);

const port = process.env.PORT;
const api_key = process.env.supabase_Key;
const api_Url = process.env.supabase_Url;

console.log(api_key, api_Url);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/contact", (req, res) => {
  res.send("Contact");
});

app.get("/produkt", (req, res) => {
  res.send("produkt");
});

app.listen(port, () => {
  console.log(`
    express køre på port ${port}   
    http://localhost:${port}/
    http://localhost:${port}/about
    http://localhost:${port}/contact
    http://localhost:${port}/produkt
    `);
});
