const express = require('express');

// Create our app
const app = express();
const PORT = 4000;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Express server is up on port ${PORT}`);
});
