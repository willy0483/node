import express from "express";
import { songModel } from "../models/songModel.js";

export const songController = express.Router();

// get all songs
songController.get("/songs", async (req, res) => {
  let data = await songModel.getAllRecords();
  console.log(data);
  res.status(200).send(data);
});

// get a single song
songController.get("/songs/:id([0-9]*)", async (req, res) => {
  const data = await songModel.getRecordsById(req.params.id);
  console.log(data);
  res.status(200).send(data.title);
});

// create a new song
songController.post("/songs", async (req, res) => {
  const data = await songModel.createRecord(req.body);
  res.status(201).send(data);
});

// update a song
songController.put("/songs", async (req, res) => {
  const data = await songModel.updateRecord(req.body);
  console.log(req.body);
  res.status(200).send(data);
});

// delete a song
songController.delete("/songs", async (req, res) => {
  const data = await songModel.deleteRecord(req.body);
  console.log(req.body);
  res.send(data);
});
