/* global Mustache */

var mml = mml || {};

mml.Factory = function(config, document) {
    'use strict';

    var self, classy, debounce, format, errorReporter, tools, cached = {
        views : {}
    };

    // allow this to be injected for mocking purposes.
    document = document || window.document;

    classy    = new mml.utilities.Classy(document);
    debounce  = new mml.utilities.Debounce(window);
    errorReporter = new mml.utilities.ErrorReporter(window);
    format    = new mml.utilities.format(window);
    tools     = mml.utilities.tools;

    // just hate this clunky syntax...
    function getEl(id) {
        return document.getElementById(id);
    }

    function router() {
        return new mml.routing.router(window, config.routes);
    }

    function view(route) {
        return new mml.views[route.view](getEl(route.element), errorReporter.reporter, self);
    }

    function store(storeName) {
        return new mml.stores[storeName](self);
    }

    function enumerable(arr) {
        return new mml.utilities.enumerable(arr);
    }

    function controller() {
        return new mml.AppController(self);
    }

    self = {
        view:       view,
        controller: controller,
        router:     router,
        store:      store,
        enumerable: enumerable,
        classy:     function() { return classy; },
        format:     function() { return format; },
        tools:      function() { return tools; },
        mustache:   function() { return Mustache; },
    };

    // need to wrangle this a little so we can inject self into builders.
    return self;
}
