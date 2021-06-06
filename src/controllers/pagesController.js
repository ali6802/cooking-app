const searchRecipes = require('../services/spoonacular/searchRecipes')
const randomRecipes = require('../services/spoonacular/randomRecipes')
const recipeById = require('../services/spoonacular/recipeById')
const bgRandom = require('../services/unsplash/bgRandom')
const filter = require('../routes/utils/filter')

class PagesController {
   async home (req,res) {
      const background=bgRandom()
      const options = {
         title:'Cooking Website',
         filter:filter,
         background:background
      }
      try {
         const suggestions = await randomRecipes()
         options["suggestions"] = suggestions      
         res.render('pages/index',options)
      } catch (err){
         options["suggestions"] = {success:false, message:'Unable to establish connection '}      
         res.render('pages/index',options)
      }
   }
   async findById (req,res) {
      try {
         const recipe = await recipeById(req.params.id)
         res.json(recipe)      
      } catch (error) {
         res.json({success:false, message:'Unable to establish connection'})
      }
   }
   async search (req,res) {
      res.json({msg:'Search Page Under Construction'})
   }
}

module.exports = PagesController