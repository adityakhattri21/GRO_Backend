const mongoose = require('mongoose');

const DocSchema = new mongoose.Schema({
    Name: String,
   Domain: String,
   Funding: Number,
   Enterprise_Value: Number,
   Market_Cap: Number,
   RD_Spend: Number,
   Administration: Number,
   Marketing_Spend: Number,
   Revenue: Number,
   Tax: Number,
   Profit: Number,
   Sales_Growth: Number,
   Profit_Growth: Number,
   Net_Profit: Number

});

module.exports = mongoose.model('Startups',DocSchema);
