var express = require('express');
var router = express.Router();
var eventos = require('../controller/eventos/eventos-controller');
var mdAunt = require('../middleware/middleware-authentication');

router.use(mdAunt.content_type);
router.use(mdAunt.key);


router.post('/eventos', eventos.eventos);

module.exports = router;
