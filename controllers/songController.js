import express from "express";
import { songModel } from "../models/songModel.js";

export const songController = express.Router();

songController.get("/songs", async (req, res) => {
  let data = await songModel.getAllRecords();
  res.status(200).send(data);
});
