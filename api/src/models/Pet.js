const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9\s]+$/, "invalid name"],
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 30,
  },
  description: {
    type: String,
    required: true,
    min: 15,
  },
  image: String,
  gender: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  location: {
    type: Object,
    required: true,
  },

  health: String,
  condition: String,
  sociability: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  hidden: { type: Boolean, default: false },
  // expireAt: { type: Date, expires: 5184000 },
});

petSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Pet", petSchema);
