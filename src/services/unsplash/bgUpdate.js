/*
Updates the background images of the home page
*/
const fetch=require('node-fetch')

const bgUpdate = function () {
   const client_id=process.env.UNSPLASH_ACCESS_KEY
   const keyword='cooking'
   const url='https://api.unsplash.com/search/photos?orientation=landscape&per_page=50&query='+keyword+'&client_id='+client_id
   fetch(url)
   .then(response=>response.json())
   .then(response=>response.results)
   .then(results=>{
      const essentials = results.reduce((accum,value)=>{
         const {urls} = value
         accum.push(urls["regular"])
         return accum
      },[])
      return essentials
   })
   .then(data=>console.log(data))
}

module.exports = bgUpdate