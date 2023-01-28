const express = require('express');
const cors = require('cors');
const api = express();
const Model = require('./models/startups');
const mongoose = require('mongoose');

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

api.get("/name" , (req,res)=>{
    const name = req.body.name;
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



module.exports = api;
