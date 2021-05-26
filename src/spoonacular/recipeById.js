const request = require('request')

const recipeById = function (id,callback) {
   const api_key = process.env.SPOONACULAR_API_KEY
   const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=`+api_key

   request({url,json:true},(error,{body}={})=>{
      if(error) callback({success:false, message:'Unable to establish connection'})
      else if (body.status===404) callback({success:false, message:'Unable to find the recipe'})
      else {
         const {
            id,
            title,
            readyInMinutes,
            servings,
            sourceUrl,
            image,
            cuisines,
            dishTypes,
            diets,
            occasions,
            summary,
            instructions,
            analyzedInstructions
         } = body
         callback({
            success:true,
            result:{
               id:id,
               title:title,
               readyInMinutes:readyInMinutes,
               servings:servings,
               sourceUrl:sourceUrl,
               image:image,
               cuisines:cuisines,
               dishTypes:dishTypes,
               diets:diets,
               occasions:occasions,
               summary:summary,
               instructions:instructions,
               analyzedInstructions:analyzedInstructions
            }
         })
      }
   })
}

module.exports = recipeById