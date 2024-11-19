import express from "express";
import { artistsModel } from "../models/artistsModel.js";

export const artistsController = express.Router();

// get all artists
artistsController.get("/artists", async (req, res) => {
  let data = await artistsModel.getAllRecords();
  console.log(data);
  res.status(200).send(data);
});

// get a single artist
artistsController.get("/artists/:id([0-9]*)", async (req, res) => {
  const data = await artistsModel.getRecordsById(req.params.id);
  console.log(data.name);
  res.status(200).send(data.name);
});

// create a new artists
artistsController.post("/artists", async (req, res) => {
  const data = await artistsModel.createRecord(req.body);
  res.status(201).send(data);
});

// update a artist
artistsController.put("/artists", async (req, res) => {
  const data = await artistsModel.updateRecord(req.body);
  console.log(data);
  res.status(200).send(data);
});
