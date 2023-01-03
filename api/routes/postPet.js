const { Router } = require("express");
const postPet = Router();
const Pet = require("../models/Pet.js");

postPet.post("/", async (req, res) => {
  try {
    let { name, size, age, description, image, type, gender, location } =
      req.body;
    await Pet.create({
      name,
      size,
      age,
      description,
      image,
      type,
      location,
      gender,
    });
    res.status(200).send("Mascota creada correctamente.");
  } catch (error) {
    res.status(400).send("Error al crear la mascota.");
  }
});

module.exports = postPet;
