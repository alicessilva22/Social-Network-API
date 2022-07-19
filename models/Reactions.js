const { Schema, Types } = require('mongoose');

// Schema to create reaction model
const reactionsSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true
        },
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

module.exports = reactionsSchema