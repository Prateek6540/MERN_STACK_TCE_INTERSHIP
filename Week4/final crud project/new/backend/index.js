const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors'); // Moved the cors import here
const router = require("./Routes/bikeroute.js");
const app = express();

app.use(cors()); // Placed cors middleware here

app.use(express.json());
app.use("/bikes", router);

// DB Connection
mongoose
  .connect("mongodb+srv://prat_k9:prateek2003@cluster0.e8ktyvf.mongodb.net/")
  .then(() => {
    console.log("Database is connected successfully😎");
  })
  .catch((err) => {
    console.log(err, "something went wrong");
  });




app.get("/test",(req,res)=>{
    res.send("Hello , This is Test Api")
});

app.listen(5000,()=>{
    console.log("Server is Running On port 5000")
});