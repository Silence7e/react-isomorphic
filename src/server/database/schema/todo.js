const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const todoSchema = new Schema({
  content: String,
  status: {
    type: ObjectId,
    ref: 'Status',
  },
  meta: {
    createAt: {
      type: Date,
      default: Date.now(),
    },
    updateAt: {
      type: Date,
      default: Date.now(),
    },
  },
});

todoSchema.pre('save', function save(next) {
  this.meta.updateAt = Date.now();
  if (this.isNew) {
    this.meta.createAt = Date.now();
  }
  next();
});

mongoose.model('Todo', todoSchema);
