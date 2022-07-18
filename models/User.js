const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        thoughts: [
            {
              type: Schema.Types.ObjectId,
              ref: "Thought",
            },
          ],
          friends: [
            {
              type: Schema.Types.ObjectId,
              ref: "User",
            },
          ]
        },
        {
          toJSON: {
            virtuals: true,
            getters: true,
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