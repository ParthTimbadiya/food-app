const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');

const registerController = async (req, res) => {
  try {
    const { userName, email, password, phone, address } = req.body;
    if (!userName || !email || !password || !phone || !address) {
      return res.status(400).send({
        success: false,
        message: "please provide all fields!!",
      });
    }

    //    check user
    const existing = await userModel.findOne({ email });
    if (existing) {
      return res.status(409).send({
        success: false,
        message: "E-mail already registerd please login!!",
      });
    }

    // hashing password
    var salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt); 

    const user = await userModel.create({
      userName,
      email,
      password: hashedPassword,
      address,
      phone,
    });
    res.status(201).send({
      success: true,
      message: "successfully registered",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in register API",
      error,
    });
  }
};

// Login

const loginController = async(req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "please provide email and password",
      });
    }

    const user = await userModel.findOne({ email: email, password: password });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found or password mismatch",
      });
    }

    res.status(200).send({
      success: true,
      message: "login successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in login api",
      error,
    });
  }
};

module.exports = { registerController, loginController };
