const rp = require('request-promise')

const recipeById = function (id) {
   const api_key = process.env.SPOONACULAR_API_KEY
   const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=`+api_key

   return rp({url, json:true})
   .then(body=>{
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
      return {
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
      }      
   })   
}

module.exports = recipeById