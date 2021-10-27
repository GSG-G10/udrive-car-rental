const authUser = (req, res) => {
  res.json(req.user);
};

module.exports = { authUser };
