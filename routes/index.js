var express = require('express');
const RecordController = require("../controllers/recordController")
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/data',function(req,res,next) {
  const apiData = RecordController.getRecords(req,res);
  res.send(apiData)
});
module.exports = router;
