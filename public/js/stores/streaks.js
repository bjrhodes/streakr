var mml = mml || {};
mml.stores = mml.stores || {};

mml.stores.streaks = function(factory) {

    var tools = factory.tools(),
        arr = [];

    return {
        set: function(desc) {
            return new Promise(function(resolve, reject) {
                if (typeof(desc) !== 'string') {
                    reject('Streak descriptions must be strings.');
                }

                arr.push(desc);
                console.log("you've saved " + desc, arr);
                resolve();
            });
        },
        get: function(id) {
            return new Promise(function(resolve, reject) {

            });
        },
        getAll: function() {
            return new Promise(function(resolve) {
                resolve(tools.clone(arr));
            });
        },
        length: function() {
            return new Promise(function(resolve) {
                resolve(arr.length);
            });
        }
    };
}
