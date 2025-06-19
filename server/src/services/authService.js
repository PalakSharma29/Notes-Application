const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userDAO = require('../dao/userDAO');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

const authServices = {
  register: async ({ name, email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      throw new Error('Passwords do not match');
    }

    const existingUser = await userDAO.findByEmail(email);
    if (existingUser) throw new Error('User already exists');

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await userDAO.createUser({ name, email, password: hashPassword });

    // ✅ Wrap user inside "user" key
    return {
      token: generateToken(user._id),
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    };
  },

  login: async ({ email, password }) => {
    const user = await userDAO.findByEmail(email);
    if (!user) throw new Error('Invalid Credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid Credentials');

    return {
      token: generateToken(user._id),
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    };
  },
};

module.exports = authServices;
