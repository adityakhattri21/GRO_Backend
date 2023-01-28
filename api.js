const express = require('express');
const cors = require('cors');
const api = express();
const Model = require('./models/startups');
const mongoose = require('mongoose');
const input = require("./input")

api.use(express.urlencoded({extended: true}))
api.use(express.json());
api.use(cors({
    origin: '*'
}));

api.get("/",(req,res)=>{
    Model.find()
    .exec()
    .then(results =>{
        res.status(200).json(results)
    })
    .catch(err=>{
        res.status(500).json({message: "Internal Server Error"})
    })
})

api.get("/name/:name" , (req,res)=>{
    const name = req.params.name;
    Model.findOne({Name: name})
    .exec()
    .then(result=>{
        if(result)
        res.status(200).json(result)
        else
        res.status(400).json({message: "No data found"})
    }
    )
    .catch((err) => console.log(err) )
})

api.get("/input",(req,res)=>{
   const response = input();
   res.status(200).json({message:response})
})

api.get("/search/:search",async (req,res)=>{
    try{
        const {search} = req.params
        // console.log(req.query)
        const data = await Model.find({Domain:search})
        return res.status(200).json(data)
    } 
    catch{
        res.status(500).json({msg:"Not Found"})
    }
})



module.exports = api;
