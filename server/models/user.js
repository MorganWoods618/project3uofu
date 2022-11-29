var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");
// User was used instead of login to make it more uniform.
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

LoginSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});
// custom method to compare and validate password for logging in
LoginSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
var User = mongoose.model("User", LoginSchema);
module.exports = User;
