var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LoginSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Loginname is required.",
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required.",
    validate: [
      function (input) {
        return input.length >= 6;
      },
      "Password should be at least 6 characters long.",
    ],
  },
  loginCreated: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    index: {
      unique: true,
      partialFilterExpression: { email: { $type: "string" } },
    },
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  trip: [
    {
      type: Schema.Types.ObjectId,
      ref: "Trip",
    },
  ],
});

var User = mongoose.model("User", LoginSchema);
module.exports = User;
