const { Schema, model } = require('mongoose');
const reactionsSchema = require('./Reactions');

// Schema to create Thoughts model
const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
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
        reactions: [reactionsSchema]
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

thoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})

// Initialize our Thoughts model
const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;