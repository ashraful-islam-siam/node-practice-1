const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log(req.baseUrl);
  res.send('Hello Stackblitz');
});

app.listen(1414, () => console.log('SERVER IS RUNNING'));
