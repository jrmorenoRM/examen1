var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var f = new Date();
  let aa = f.getFullYear()
  let anio = `© ${aa}`
  res.render('index', {
    copyr: anio,
    title: "DoctorH"
  });
});

module.exports = router;