const { text } = require('express');
const { Schema, model } = require('mongoose');

// Schema to create Thoughts model
const thoughtsSchema = new Schema(
    {
        body: { type: Text, required: true },
        created: { type: Date, default: Date.now },
    },
);

// Initialize our Thoughts model
const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;