/** GET HOME PAGE */

const homelist = (req, res) => {
    res.render('locations-list', {
        title: 'Home'
    });
}

/**  GET LOCATION INFO PAGE*/
const locationInfo = (req, res) => {
    res.render('location-info', {
        title: 'Location Info'
    })
}

/** GET ADD REVIEW PAGE */
const addReview = (req, res) => {
    res.render('location-review-form', {
        title: 'Add review'
    })
}

/** EXPORTING ALL MODULES */
module.exports = {
    homelist,
    locationInfo,
    addReview
}