const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://lucaskey:lucaskey@cluster0.p4uf3.mongodb.net/easymath?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.set('useFindAndModify', false);

module.exports = mongoose;