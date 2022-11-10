var config = require('../configuration/config');
var pg = require('../configuration/ps_connection');

module.exports.content_type = function(req, res, next) {
  if (req.get('content-type') == 'application/json'){
    next();
  }else {
    res.status(403).send('Error de headers mal enviadas');
  }
};

module.exports.key = function(req, res, next) {
  if (req.get('authorization') == config.app.key){
    next();
  }else {
    res.status(403).send('Error de key');
  }
};
