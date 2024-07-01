const express = require("express");
const dbConnect = require("./config/dbConnect");
const methodOverride = require("method-override");
//app이라는 서버 만듬
const app = express();

app.set("view engine", "ejs");
app.set("views","./views");

app.use(methodOverride("_method"));

app.use(express.static("./public"));

dbConnect();

app.get("/", (req, res)=>{
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/contacts", require("./routes/contactRoutes"));   

app.listen(3000, () => {
    console.log("서버 실행 중");
});

