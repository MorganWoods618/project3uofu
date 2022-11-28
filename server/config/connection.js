const { connect, connection } = require("mongoose");

const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/3-Group-Project";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //Be on look out for errors 8,9 in configs varibles.
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = connection;
