import express from "express";
import { albumsModel } from "../models/albumsModel.js";

export const albumsController = express.Router();

albumsController.get("/albums", async (req, res) => {
  let data = await albumsModel.getAllRecords();
  res.status(200).send(data);
});

albumsController.get("/albums/:id([0-9]*)", async (req, res) => {
  const data = await albumsModel.getRecordsById(req.params.id);
  console.log(data.title);
});

// create a new albums
albumsController.post("/albums", async (req, res) => {
  const data = await albumsModel.createRecord(req.body);
  res.status(201).send(data);
});
