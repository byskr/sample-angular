'use strict';

module.exports = {
    app: {
        url: '',
        abstract: true
    },
    'app.user': {
        url: '/user',
        views: {
            'main@': {
                templateUrl: './views/user/user-list.html'
            }
        }
    }
};