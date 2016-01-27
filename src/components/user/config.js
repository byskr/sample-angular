'use strict';

module.exports = {
    app: {
        url: '',
        abstract: true
    },
    'app.user': {
        url: '/user',
        view: {
            main: {
                templateUrl: './views/user-list.html'
            }
        }
    }
};