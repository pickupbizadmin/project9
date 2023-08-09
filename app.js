const express=require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const doctorsModel = require("./model/doctorsModel")
const navsModel = require("./model/navsModel")

const app= express();
app.use(cors())
app.use(express.json())

mongoose
 .connect("mongodb://127.0.0.1:27017/hmsdb")
 .then(()=>{
    console.log("DB is connected...")
 })

app.get("/",(req,res)=>{
    res.send("Connected to HMS App API...")
})

app.get("/navs", async(req,res)=>{
    const result = await navsModel.find({});
    res.send(result)
})

app.post("/addnav", (req,res)=>{
    const payload = req.body;
    const newNav= new navsModel(payload);
    newNav.save()
    res.send("Added Navigation!!!")
})
app.get("/docs",async (req,res)=>{
    const result = await doctorsModel.find({});
    res.send(result)
})
app.post("/adddoctor",(req,res)=>{
    const payload= req.body;
    const newDoctor = new doctorsModel(payload);
    newDoctor.save();
    res.send("Doctor Added..")
})
app.listen(1010, ()=>{
    console.log("Service is running on 1010..")
})
