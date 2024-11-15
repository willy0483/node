import express, { request } from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();
// console.log(process.env);

import { Car } from "./classes/classesTest.js";

// const myCar = new Car(`toyota`, `2000`);
// myCar.present();

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

app.get("/songs", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("songs")
      .select("*,artist_id (name,id),albums_id (title)");
    if (error) {
      throw error;
    }
    console.log(data);
    res.send(`Success songs`);
  } catch (error) {
    console.error(error);
  }
});

app.get("/albums", async (req, res) => {
  try {
    const { data, error } = await supabase.from("albums").select("*");
    if (error) {
      throw error;
    }
    console.log(data);
    res.send(`Success album`);
  } catch (error) {
    console.error(error);
  }
});

app.get("/artists", async (req, res) => {
  try {
    const { data, error } = await supabase.from("artists").select("*");
    if (error) {
      throw error;
    }
    console.log(data);
    res.send(`Success artist`);
  } catch (error) {
    console.error(error);
  }
});

import { songModel } from "./models/songModel.js";
app.get("/songs", async (req, res) => {
  let songs = await songModel.getAllRecords();
  console.log(songs);
});

app.listen(port, () => {
  console.log(`
    express køre på port ${port}   
    http://localhost:${port}/
    http://localhost:${port}/about
    http://localhost:${port}/contact
    http://localhost:${port}/produkt
    http://localhost:${port}/songs
    http://localhost:${port}/albums
    http://localhost:${port}/artists
    `);
});
