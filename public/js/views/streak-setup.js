var mml = mml || {};
mml.views = mml.views || {};

mml.views.streakSetup = function (el, factory) {
    'use strict';

    var placeholders = factory.store('placeholders'),
        streaks = factory.store('streaks'),
        classy = factory.classy(),
        form = el.querySelector('form'),
        input = form.querySelector('input[type="text"]'),
        cancelError;

    function randomPlaceholder() {
        var placeholder;
        placeholders.length().then(function(length) {
            var index = Math.floor(Math.random() * length);
            return placeholders.get(index);
        }).then(function(placeholder) {
            input.placeholder = placeholder;
        });
    }

    function redirectToStreak(streak) {
        factory.router().route('/streak/' + streak.id.replace(/[^a-f0-9\-]/, ''));
    }

    function showError() {
        var err = form.querySelector('.notification.is-danger');

        classy.remove(err, 'is-hidden');
        clearTimeout(cancelError);
        cancelError = setTimeout(function() {
            classy.add(err, 'is-hidden');
        }, 6000);
    }

    function formSubmit(e) {
        e.preventDefault();
        streaks.set(input.value)
                .then(redirectToStreak)
                .catch(showError);
    }

    function addHandlers() {
        form.addEventListener('submit', formSubmit);
    }

    function stripHandlers() {
        form.removeEventListener('submit', formSubmit);
    }

    function teardown() {
        el.style.display = '';
        stripHandlers();
    }
    function setup() {
        el.style.display = 'block';
        randomPlaceholder();
        addHandlers();
    }

    return {
        teardown: teardown,
        setup: setup,
    };
};
