const healthService = require('../services/health.service')

const  getHealth = function (req, res){
    res.send(healthService.get())
    
}

module.exports = {getHealth}