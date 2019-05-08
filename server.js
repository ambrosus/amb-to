const express = require('express');
const path = require('path');
const http = require('http');
const PORT = process.env.PORT || 5000;
const compression = require('compression')

const app = express();
app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.set('port', PORT);

const server = http.createServer(app);
server.listen(PORT, () => { console.log(`Server running: ${PORT}`) });
