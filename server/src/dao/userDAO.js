const User = require('../models/user');

const userDAO = {
    findByEmail : async(email) => await User.findOne({email}),
    createUser : async(data) => await User.create(data),
    findById : async(id) => await User.findById(id),
}

module.exports = userDAO;
