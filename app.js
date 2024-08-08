const express = require('express');

const app = express();

const mongoose = require('mongoose');

const cors = require('cors');
require("dotenv").config();
const mongoDBUri = process.env.DB_URI;

//..
mongoose.connect(mongoDBUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected..');
});

mongoose.connection.on('error', (err) => {
  console.error('connection error:');
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send('Express API is up and  runnning.');
});

const port = process.env.PORT || 5000;
app.use("/api/inventory",require("./routes/inventory.route"))
app.use("/api/bill",require("./routes/bill.route"))

app.listen(port, () => console.log('server started at port', port));
