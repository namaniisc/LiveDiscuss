const mongoose = require('mongoose');

function dbConnect() {
    mongoose.connect('mongodb+srv://namaniisc:Naman%24%25234%40@cluster0.4znfgva.mongodb.net/comments?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Database connected...'))
    .catch(err => console.error('Connection failed...', err));
}

module.exports = dbConnect;
