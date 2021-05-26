const express = require('express')
require('dotenv').config()
const searchRecipes = require('./spoonacular/searchRecipes')
const randomRecipes = require('./spoonacular/randomRecipes')
const recipeById = require('./spoonacular/recipeById')

const app = express()

const params = {
   query:'Beef',
   cuisine:'Italian',
   number:'20'   
}
//

const port = process.env.PORT || 3000

app.get('/', (req,res)=>{
   res.send({success:true, message:'first express route'})
})

app.get('/second', (req,res)=>{
   res.send({success:true, message:'second express route'})
})

app.get('/search',(req,res)=>{
   searchRecipes(params,(recipes)=>{
      res.send(recipes)
   })
})

app.get('/random',(req,res)=>{
   randomRecipes((recipes)=>{
      res.send(recipes)
   })
})

const recipeId=654959

app.get('/recipe',(req,res)=>{
   recipeById(recipeId,(recipe)=>{
      res.send(recipe)
   })
})

app.listen(port, () => {
   console.log('Server is listening on port '+port)
})

