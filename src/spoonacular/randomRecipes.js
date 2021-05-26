const request = require('request')

const randomRecipes = function (callback,number=5) {
   const api_key = process.env.SPOONACULAR_API_KEY   
   const url = 'https://api.spoonacular.com/recipes/random?apiKey='+api_key+`&number=${number}`

   request({url,json:true},(error,{body}={})=>{
      if (error) callback({success:false, message:'Unable to establish connection'})
      else {
         const essentials = body.recipes.reduce((accum,value)=>{
            const {id,title,image}=value
            accum.push({
               id:id,
               title:title,
               image:image,               
            })
            return accum
         },[])
         callback({success:true,results:essentials})
      }
   })
}

module.exports = randomRecipes