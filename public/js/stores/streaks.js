var mml = mml || {};
mml.stores = mml.stores || {};

mml.stores.streaks = function(factory) {

    var tools = factory.tools(),
        streaks = factory.enumerable([]);

    return {
        set: function(streak) {
            return new Promise(function(resolve, reject) {
                var id;
                if (typeof(streak) !== 'string' || streak.length === 0) {
                    reject('streak description must be string');
                }
                id = tools.generateUUID();
                streaks.push({id: id, streak: streak});
                resolve(id);
            });
        },

        get: function(id) {
            return new Promise(function(resolve, reject) {
                var found = streaks.searchBy('id', id);
                if (found) {
                    resolve(found);
                } else {
                    reject('Streak not found');
                }
            });
        },

        getAll: function() {
            return new Promise(function(resolve) {
                return factory.enumerable(tools.clone(streaks));
            });
        },

        length: function() {
            return new Promise(function(resolve) {
                resolve(streaks.length);
            });
        }
    };
}
