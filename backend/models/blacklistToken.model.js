const mongoose = require('mongoose');

const blacklistedTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    expireAfterSeconds: 86400, // 24 hours
  }
);

module.exports = mongoose.model('BlacklistedToken', blacklistedTokenSchema);
