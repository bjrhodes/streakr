var mml = mml || {};
mml.views = mml.views || {};

mml.views.streakRecord = function (el, factory) {
    'use strict';

    var streaks = factory.store('streaks'),
        button = el.querySelector('button'),
        title = el.querySelector('#goal');

    function buttonPressed(e) {
        e.preventDefault();
        button.disabled = 'disabled';
        console.log('now save that...');
    }

    function addHandlers() {
        button.addEventListener('click', buttonPressed);
    }

    function stripHandlers() {
        button.removeEventListener('click', buttonPressed);
    }

    function teardown() {
        el.style.display = '';
        button.disabled = undefined;
        stripHandlers();
    }
    function setup() {
        el.style.display = 'block';
        addHandlers();
    }

    return {
        teardown: teardown,
        setup: setup,
    };
};
