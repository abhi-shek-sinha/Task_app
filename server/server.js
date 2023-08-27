const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const routes =require("./routes/taskRoute")

require("dotenv").config();

const app = express();
const PORT =  5000 ;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/task_app") 
.then(()=> console.log(`connected to mongodb database`) )
.catch((err)=> console.log(err));


app.use(routes);





app.listen(PORT , ()=>{ console.log(`listening on port number ${PORT}`)  } )