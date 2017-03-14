var mml = mml || {};
mml.views = mml.views || {};

mml.views.streakRecord = function (el, factory) {
    'use strict';

    var streaks = factory.store('streaks'),
        router = factory.router(),
        button = el.querySelector('button'),
        title = el.querySelector('#goal'),
        streak;

    function buttonPressed(e) {
        e.preventDefault();
        button.disabled = 'disabled';
        streak.completions.push(new Date());
        streaks.set(streak);
    }

    function addHandlers() {
        button.addEventListener('click', buttonPressed);
    }

    function stripHandlers() {
        button.removeEventListener('click', buttonPressed);
    }

    function loading() {
        // @todo loading state on fetch streak
    }

    function findStreak() {
        var id = router.parameters()[2];
        return streaks.get(id);
    }

    function setupStreak() {
        title.textContent = streak.desc;
    }

    function teardown() {
        el.style.display = '';
        button.disabled = undefined;
        stripHandlers();
    }
    function setup() {
        el.style.display = 'block';
        loading();

        findStreak().then(function(_streak_) {
            streak = _streak_;
            setupStreak();
            addHandlers();
        }).catch(function() {
            router.route('not-found');
        });
    }

    return {
        teardown: teardown,
        setup: setup,
    };
};
