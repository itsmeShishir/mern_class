const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    console.log(user);
    res.send(user);
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
    createUser,
}