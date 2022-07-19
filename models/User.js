const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        thoughts: [
            {
              type: Schema.Types.ObjectId,
              ref: "thoughts",
            },
          ],
          friends: [
            {
              type: Schema.Types.ObjectId,
              ref: "user",
            },
          ]
        },
        {
          toJSON: {
            virtuals: true
          },
          id: false,
        }
      );
      
      userSchema.virtual("friendCount").get(function() {
        return this.friends.length;
      });

// Initialize User model
const User = model('user', userSchema);

module.exports = User;