const express = require('express');
const app = express();
require('./db/config');
const router = require('./router/employe')

const port = 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
