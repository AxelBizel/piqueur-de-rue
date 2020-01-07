const express = require("express");
const app = express();
const port = 5000;
const connection = require("./conf");
const bodyParser = require("body-parser");
const api = require('./routes');
// const cors = require("cors");

// bodyParser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use('/api', api);

// //Cors
// app.use(cors());
// app.get("/products/:id", function(req, res, next) {
//   res.json({ msg: "This is CORS-enabled for all origins!" });
// });

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }

  console.log(`Server is listening on ${port}`);
});
