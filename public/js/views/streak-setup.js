var mml = mml || {};
mml.views = mml.views || {};

mml.views.streakSetup = function (el, factory) {
    'use strict';

    var placeholders = factory.store('placeholders');

    function randomPlaceholder() {
        var placeholder;
        placeholders.length().then(function(length) {
            var index = Math.floor(Math.random() * length);
            return placeholders.get(index);
        }).then(function(placeholder) {
            el.querySelector('input[type="text"]').placeholder = placeholder;
        });
    }
    function teardown() {
        el.style.display = '';
    }
    function setup() {
        el.style.display = 'block';
        randomPlaceholder();
    }

    return {
        teardown: teardown,
        setup: setup,
    };
};
