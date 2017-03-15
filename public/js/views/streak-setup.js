var mml = mml || {};
mml.views = mml.views || {};

mml.views.streakSetup = function (el, factory) {
    'use strict';

    var placeholders = factory.store('placeholders'),
	streaks =factory.store('streaks'),
	form = el.querySelector('form'),
	input = form.querySelector('input');

    function randomPlaceholder() {
        var placeholder;
        placeholders.length().then(function(length) {
            var index = Math.floor(Math.random() * length);
            return placeholders.get(index);
        }).then(function(placeholder) {
            el.querySelector('input[type="text"]').placeholder = placeholder;
        });
    }
    function formSubmit(e) {
        e.preventDefault();
	streaks.set(input.value);
    }
    function addEventListeners() {
       form.addEventListener('submit', formSubmit);
    }
     function removeEventListeners() {
       form.removeEventListener('submit', formSubmit);
    }
    function teardown() {
        el.style.display = '';
        removeEventListeners();
    }
    function setup() {
        el.style.display = 'block';
        randomPlaceholder();
        addEventListeners();
    }

    return {
        teardown: teardown,
        setup: setup,
    };
};
