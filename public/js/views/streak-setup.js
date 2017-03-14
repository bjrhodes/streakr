var mml = mml || {};
mml.views = mml.views || {};

mml.views.streakSetup = function (el) {
    'use strict';

    function teardown() {
        el.style.display = '';
    }
    function setup() {
        el.style.display = 'block';
    }

    return {
        teardown: teardown,
        setup: setup,
    };
};
