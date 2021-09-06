const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("."));

// Create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "med",
  });
  
  // Connect
  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("MySql Connected...");
  });

  app.post("/login",(req,res)=>{
    let sql=`select * from courts where court_id=${req.body.court_id}`;
    console.log(req.body.court_id);
    db.query(sql,(err,result)=>{
      if(err){
        throw err;
      }
      console.log(result);
      res.json(result);
    })
  })

  
  const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
  