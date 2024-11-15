import express from "express";
import { artistsModel } from "../models/artistsModel.js";

export const artistsController = express.Router();

artistsController.get("/artists", async (req, res) => {
  let data = await artistsModel.getAllRecords();
  res.status(200).send(data);
});
