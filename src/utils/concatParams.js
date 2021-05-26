const concatParams = (params) => {
   let queryString =''
   for (key in params) {
      queryString+='&'+key+'='+params[key]
   }
   return queryString
}

module.exports = concatParams

