import express from "express";
import { artistsModel } from "../models/artistsModel.js";

export const artistsController = express.Router();

artistsController.get("/artists", async (req, res) => {
  let data = await artistsModel.getAllRecords();
  res.status(200).send(data);
});

artistsController.get("/artists/:id([0-9]*)", async (req, res) => {
  const data = await artistsModel.getRecordsById(req.params.id);
  console.log(data.name);
});
