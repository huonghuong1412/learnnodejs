const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, default: '', maxlength: 255, required: true },
        description: { type: String, default: '', required: true },
        image: { type: String },
        videoId: { type: String, required: true },
        level: { type: String, required: true },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
