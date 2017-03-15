var mml = mml || {};
mml.views = mml.views || {};

mml.views.notFound = function (el, factory) {
    'use strict';

    return {
        setup: function() {
            el.style.display = 'block';
        },
        teardown: function() {
            el.style.display = '';
        }
    }
}
