const cron = require('node-cron');
const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs');
const shell = require('shelljs');
const cors = require("cors");

const task = cron.schedule('3 * * * *', function () {
	if (shell.exec(`node ${shell.pwd()}/farm.js`).code !== 0) {
		shell.echo('Error: call failed');
		shell.exit(1);
	} else {
    shell.echo(shell.pwd());
  }
}, {
	scheduled: false
})

const app = express();

app.use(cors());

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Teaswap cronjob." });
});

app.get("/start", (req, res) => {
  task.start()
  res.json({ message: "Cron job started" });
});

app.get("/stop", (req, res) => {
  task.stop()
  res.json({ message: "Cron job stopped" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
