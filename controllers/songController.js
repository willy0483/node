import express from "express";
import { songModel } from "../models/songModel.js";

export const songController = express.Router();

songController.get("/songs", async (req, res) => {
  let data = await songModel.getAllRecords();
  console.log(data);
});

songController.get("/songs/:id([0-9]*)", async (req, res) => {
  const data = await songModel.getRecordsById(req.params.id);
  console.log(data.title);
});
