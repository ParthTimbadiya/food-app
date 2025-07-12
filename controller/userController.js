const getUserController = async (req, res) => {
  res.status(200).send("user data");
};

module.exports = { getUserController };
