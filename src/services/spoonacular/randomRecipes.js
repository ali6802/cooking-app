const rp = require('request-promise')
 
const randomRecipes = function (number=10) {
   const api_key = process.env.SPOONACULAR_API_KEY   
   const url = 'https://api.spoonacular.com/recipes/random?apiKey='+api_key+`&number=${number}`
 
   return rp({url, json:true})
   .then(body=>body.recipes)
   .then(recipes=>{
      const essentials = recipes.reduce((accum,value)=>{
         const {id,title,image}=value
         accum.push({
            id:id,
            title:title,
            image:image,               
         })
         return accum
      },[])
      return {success:true,results:essentials}
   })    
}
 
module.exports = randomRecipes


/*
const rp = require('request-promise')
 
const randomRecipes = function (number=10) {
   const api_key = process.env.SPOONACULAR_API_KEY   
   const url = 'https://api.spoonacular.com/recipes/random?apiKey='+api_key+`&number=${number}`
 
   return rp({url, json:true})
   .then(body=>body.recipes)
   .then(recipes=>{
      const essentials = recipes.reduce((accum,value)=>{
         const {id,title,image}=value
         accum.push({
            id:id,
            title:title,
            image:image,               
         })
         return accum
      },[])
      return {success:true,results:essentials}
   })    
}
 
module.exports = randomRecipes
*/