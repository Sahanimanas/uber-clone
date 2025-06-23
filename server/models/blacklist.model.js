const mongoose = require('mongoose');

const blacklistSchema = new mongoose.Schema({
    token:String}
    , { timestamps: true }
);


module.exports = mongoose.model('blacklisttoken', blacklistSchema);