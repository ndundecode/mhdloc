var express = require('express');
var router = express.Router();
// const ctrlMain = require('../controllers/main');
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/************************************************** */
/** DEFAULT DECLARATION */
/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', {
//     title: 'Express wow'
//   });
// });

// const homepageController = (req, res) => {

//   res.render('index', {
//     title: 'Express by ndundecode@gmail.com'
//   });
// }

/* GET home page. */
// router.get('/', ctrlMain.index);
// module.exports = router;
/************************************************** */

/** LOCATIONS PAGES */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/** OTHER PAGES */
router.get('/about', ctrlOthers.about);
module.exports = router;