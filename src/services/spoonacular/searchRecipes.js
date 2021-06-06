const request = require('request')
const concatParams = require('./utils/concatParams')

const searchRecipes = function (params,callback) {
   const api_key = process.env.SPOONACULAR_API_KEY
   const queryString = concatParams(params)

   const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey='+api_key+queryString

   request({url, json:true},(error,{body}={})=>{
      if(error) callback({success:false, message:'Unable to establish connection'})
      else if (body.results.length===0) callback({success:false, message:'Unable to find a recipe'})
      else callback({success:true, results:body.results})
   })
}

module.exports = searchRecipes