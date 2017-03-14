/* global mml*/
(function() {
    'use strict';
    var config = {
            routes : new mml.utilities.enumerable([
                {hash: '', view: 'streakSetup', id: 'streak-setup', element: 'streak-setup', description: 'Setup a new streak'},
            ]),
        },
        factory = new mml.Factory(config, window.document);

    factory.controller().run();
})();
