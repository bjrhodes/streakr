var mml = mml || {};
mml.utilities = mml.utilities || {};

/* The vaguest name... */
mml.utilities.tools = {
    clone: function(thing) {
        // @todo add try / catch
        return JSON.parse(JSON.stringify(thing));
    },
generateUUID: function() {
        return 'xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx'.replace(/x/g, function() {
            return Math.floor(Math.random()*16).toString(16);
        });
    }
};
