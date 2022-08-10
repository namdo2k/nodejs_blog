const courses = require('../model/course');

class SiteController {
    index (req, res, next) {
        courses.find({}).then(courses => {
            courses = courses.map(course => course.toObject());
            res.render('home', { courses })
        })
        .catch(error => next(error));
    }
    show (req, res, next) {
        let slug = req.params.slug;
        courses.findOne({ slug: req.params.slug }).then((course) => {
            res.json(course);
        }).catch(next); 
    }
}

module.exports =  new SiteController;