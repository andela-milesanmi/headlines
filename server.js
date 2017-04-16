const express = require('express');

// Create our app
const app = express();

app.use(express.static('public'));

app.listen(4000, () => {
  console.log('Express server is up on port 4000');
});
