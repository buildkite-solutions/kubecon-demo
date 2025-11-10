const express = require('express');
const app = express();
const PORT = 8082;

app.get('/', (req, res) => {
  res.send('Hello from Node.js! ⚡');
});

function startServer() {
  app.listen(PORT, () => {
    console.log(`Node.js service listening on port ${PORT}`);
  });
}

if (require.main === module) {
  startServer();
}

module.exports = { app };
