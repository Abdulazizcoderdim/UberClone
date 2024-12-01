const userModel = require('../models/user.model');

module.exports.createUser = ({ firstname, lastname, email, password }) => {
  if (!firstname || !email || !password) throw new Error('Invalid data');

  return userModel.create({
    fullname: { firstname, lastname },
    email,
    password,
  });
};
