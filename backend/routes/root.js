const express = require('express')
const router = express.Router()
const path = require("path")

router.use("/", (req, res, next) => {
  console.log("in root");
  next();
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "frontend_test", "index.html"))
})



module.exports = router