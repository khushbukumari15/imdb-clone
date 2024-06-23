const responseConst = require('../constants/response.constant')

const movieValidation = function(movieInfo) {
    if(movieInfo.yearOfRelease > Date.now()){
        responseConst.releaseDateValidation
    }

    if (movieInfo.producer.length > 1){
        
    }
    
}