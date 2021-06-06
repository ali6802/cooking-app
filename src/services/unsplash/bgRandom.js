const bgPictures = require('./bgPictures')

const bgRandom = function() {
   const rand=Math.floor(Math.random()*bgPictures.length)
   return bgPictures[rand]
}

module.exports = bgRandom