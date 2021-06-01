const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");

const app = express();

// var d1 = new Date (),
//     d2 = new Date ( d1 );
// d2.setMinutes ( d1.getMinutes() + 1 );
// console.log ( d1 );
// console.log ( d2 );

// d1 = "2021-06-01T19:51:04.823Z"
// //d2 = "2021-06-01T19:52:04.823Z"


// if(Date.parse(d1) < Date.parse(d2)){
//     console.log("in if");
//  }else{
//     console.log("in else");
//  }

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.use("/login", (req, res) => {
  let token = false;
  if (req.body.username === "admin" && req.body.password === "pwd") {
    token = new Date ();
  }

  res.send({
    token: token,
  });
});

app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);
