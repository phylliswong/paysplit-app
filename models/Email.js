const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmailSchema = new Schema({
  email : String
});

const Email = mongoose.model('Email', EmailSchema);

module.exports = Email;
