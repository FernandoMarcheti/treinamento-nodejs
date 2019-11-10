const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect('mongodb://dev:dev123456@ds241278.mlab.com:41278/treinamento-node-vanilla', options);

var db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected!');
});

db.on('disconnected', () => {
    console.log('MongoDB disonnected!');
});

db.on('error', console.error.bind(console, 'connection error:'));

db.on('open', function() {
  console.log('MongoDB Opened');
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('MongoDB desconnected through app termination');
        process.exit(0);
    });
});

module.exports = db;
