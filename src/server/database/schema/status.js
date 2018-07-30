const mongoose = require('mongoose');

const { Schema } = mongoose;

const statusSchema = new Schema({
  value: {
    unique: true,
    type: String,
  },
});

mongoose.model('Status', statusSchema);
