const { Router } = require("express");
const allUsers = Router();
const User = require("../../models/User");

allUsers.get("/", async (req, res) => {
  try {
    const users = await User.find().populate([
      { path: "pets", model: "Pet" },
      { path: "petsAdopted", model: "Pet" },
    ]);
    res.json(users);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = allUsers;
