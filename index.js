import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.port;
const app = express();

import { songModel } from "./models/songModel.js";
app.get("/songs", async (req, res) => {
  let songs = await songModel.getAllRecords();
  console.log(songs);
});

import { artistsModel } from "./models/artistsModel.js";
app.get("/artists", async (req, res) => {
  let artists = await artistsModel.getAllRecords();
  console.log(artists);
});

import { albumsModel } from "./models/albumsModel.js";
app.get("/albums", async (req, res) => {
  let albums = await albumsModel.getAllRecords();
  console.log(albums);
});

app.listen(port, () => {
  console.log(`
    express køre på port ${port}   
    http://localhost:${port}/songs
    http://localhost:${port}/artists
    http://localhost:${port}/albums
    `);
});
