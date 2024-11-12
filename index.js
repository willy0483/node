import express, { request } from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();
// console.log(process.env);

import { supabase } from "./config/configSupabase.js";

const port = process.env.port;

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

app.get("/test", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("songs")
      .select("*,artist_id (name,id),albums_id (title)");
    if (error) {
      throw error;
    }
    console.log(data);
    res.send(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`
    express køre på port ${port}   
    http://localhost:${port}/
    http://localhost:${port}/about
    http://localhost:${port}/contact
    http://localhost:${port}/produkt
    http://localhost:${port}/test
    `);
});
