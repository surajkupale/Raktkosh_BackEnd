const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config.json');

mongoose.connect(config.test.url, { useNewUrlParser: true }, { useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("yes we are connected!");
});
const port = 8000;

require('./models')(app, mongoose);
// console.log(db)
const accout = require('./routes/account');

//EXPRESS SPECIFIC STUFF
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/accout', accout)

//START THE SERVER
app.listen(port, () => {
    console.log(`The application has started successfully on port ${port}`);
})