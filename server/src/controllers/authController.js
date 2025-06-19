const authServices = require('../services/authService');

const registerUser = async (req, res) => {
  try {
    const data = await authServices.register(req.body);
    res.status(201).json(data); 
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const data = await authServices.login(req.body);
    res.status(200).json(data); 
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

module.exports = { registerUser, loginUser };
