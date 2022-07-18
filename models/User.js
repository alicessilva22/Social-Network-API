const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        friends: [
        ],
        thoughts: [

        ],
        reactions:
  },
);

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;