// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

// Create a new express application named 'app'
const app = express();

// Set port
const port = 4001;

// Use body parser
app.use(bodyParser.json());
app.use(cors());

// Create event handlers
const events = [];

// Create post route
app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  // Send event to posts service
  axios.post('http://localhost:4000/events', event).catch((err) => {
    console.log(err.message);
  });
  // Send event to comments service
  axios.post('http://localhost:4002/events', event).catch((err) => {
    console.log(err.message);
  });
  // Send event to query service
  axios.post('http://localhost:4003/events', event).catch((err) => {
    console.log(err.message);
  });
  // Send event to moderation service
  axios.post('http://localhost:4004/events', event).catch((err) => {
    console.log(err.message);
  });

  res.send({ status: 'OK' });
});

// Create get route
app.get('/events', (req, res) => {
  res.send(events);
});

// Start server on port 4001
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});




