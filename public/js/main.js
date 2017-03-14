/* global mml*/
(function() {
    'use strict';
    var config = {
            routes : new mml.utilities.enumerable([
                {hash: '^/?$', view: 'streakSetup', id: 'streak-setup', element: 'streak-setup', description: 'Setup a new streak'},
                {hash: '^/?streak/([0-9a-f\-]{36})', view: 'streakRecord', id: 'streak-record', element: 'streak-record', description: 'Record a hit streak'},
                {hash: '.*', view: 'notFound', id: 'not-found', element: 'not-found', description: '404'},
            ]),
        },
        factory = new mml.Factory(config, window.document);

    factory.controller().run();
})();
