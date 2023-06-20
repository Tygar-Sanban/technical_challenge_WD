const express = require("express");
const router = express.Router();
const Phone = require("../models/Phone.model");

router.get("/", async (req, res, next) => {
  try {
    const allPhones = await Phone.find();
    res.json(allPhones);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const thisPhone = await Phone.findOne({ id: id });
    res.json(thisPhone);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
