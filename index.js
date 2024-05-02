const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
