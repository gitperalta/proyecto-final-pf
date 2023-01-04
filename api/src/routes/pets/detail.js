const express = require("express");
const detail = express.Router();
const Pet = require("../../../models/Pet.js");

detail.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let detail = await Pet.findById(id);
    res.status(200).send(detail);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = detail;