const news = require('../src/app/controller/SiteController');
const auth = require('../src/app/controller/AuthController');

function route(app) {
    app.get('/news', news.index);
    app.get('/khoa-hoc/:slug', news.show);
    //auth
    app.get('/get-login', auth.getLogin);
    app.post('/post-login', auth.postLogin);
}

module.exports = route;