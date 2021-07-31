const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://lucaskey:lucaskey@cluster0.p4uf3.mongodb.net/easymath?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log("conectado como mongo");
}).catch((e) => {
  console.log("erro ao conectar");
  console.log(e);
});

mongoose.set('useFindAndModify', false);

module.exports = mongoose;