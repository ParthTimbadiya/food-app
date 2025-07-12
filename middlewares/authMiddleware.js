const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
   const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1]; // use optional chaining to avoid undefined error

    if (!token) {
      return res.status(401).send({
        success: false,
        message: "Access Denied: No token provided",
      });
    }

    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "un-authorize user",
        });
      } else {
        req.user = decode;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "please provide auth token",
      error,
    });
  }
};
