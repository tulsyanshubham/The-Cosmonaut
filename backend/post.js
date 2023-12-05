const express = require("express");
const { validationResult } = require("express-validator");
const router = express.Router();
const Model = require("./model");

router.post("/post", async (req, res) => {

    //check for error and return error if any
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const {name,email,phone,description} = req.body
    try {
      const data = await Model.create({ name, email, phone, description });
      return res.send(data);
  
    } catch (error) {
      console.error(error.message);
      res.status(400).send("Some Error Occured");
    }
  });

  module.exports = router;