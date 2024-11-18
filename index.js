import express, { urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.port;
const app = express();

app.use(express.urlencoded({ extended: true }));

import { songController } from "./controllers/songController.js";
app.use(songController);

import { artistsController } from "./controllers/artistsController.js";
app.use(artistsController);

import { albumsController } from "./controllers/albumsController.js";
app.use(albumsController);

app.listen(port, () => {
  console.log(`Server kører på port ${port}
    http://localhost:${port}/songs
    http://localhost:${port}/artists
    http://localhost:${port}/albums
    `);
});
