const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");
const router = require("./routes/root");


console.log("wtf");
app.use(function (req, res, next) {
  console.log("Requested path: %s", req.path);
  next();
});
app.use('/', express.static(path.join(__dirname, "..", "/frontend_test", "static")))

app.use("/", router);



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
