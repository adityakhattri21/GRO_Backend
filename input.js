const data = require('./dataset.json');
const mongoose = require('mongoose');
const Model = require('./models/startups');

let data_input= () =>{
  data.forEach((data)=> {
    const post = new Model ({
        Name: data.Name,
        Domain: data.Domain,
        Funding: data.Funding,
        Enterprise_Value: data.Enterprise_Value,
        Market_Cap: data.Market_Cap,
        RD_Spend: data.RD_Spend,
        Administration: data.Administration,
        Marketing_Spend: data.Marketing_Spend,
        Revenue: data.Revenue,
        Tax: data.Tax,
        Profit: data.Profit,
        Sales_Growth: data.Sales_Growth,
        Profit_Growth: data.Profit_Growth,
        Net_Profit: data.Net_Profit 
    })
      post.save();
      
    })
    return "Data Saved Successfully"
}
module.exports = data_input;

  
