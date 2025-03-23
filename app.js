const express = require('express');
const path = require('path');
const app = express();


app.use(express.static('public'));

const data = require('./data/data.json');

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
