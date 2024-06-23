const  healthModel = require('../models/health.model')

const get = function (){
    return healthModel.output()
}

module.exports = {get}