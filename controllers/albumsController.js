import express from "express";
import { albumsModel } from "../models/albumsModel.js";

export const albumsController = express.Router();

albumsController.get("/albums", async (req, res) => {
  let data = await albumsModel.getAllRecords();
  res.status(200).send(data);
});
