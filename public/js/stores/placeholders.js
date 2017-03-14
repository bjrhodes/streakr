var mml = mml || {};
mml.stores = mml.stores || {};

mml.stores.placeholders = function(factory) {

    var tools = factory.tools(),
        arr = [
            'Ride at least a mile',
            'Practice writing an unfamiliar javascript function',
            'Read a chapter of a book',
            'Cook a new recipe',
        ];

    return {
        set: function(str) {
            return new Promise(function(resolve, reject) {
                if (typeof(str) !== 'String') {
                    reject('Placeholder store only accepts strings.');
                }

                arr.push(str);
                resolve();
            });
        },
        get: function(id) {
            return new Promise(function(resolve, reject) {
                id = Number(id);
                if (isNaN(id)) {
                    reject('Cannot return placeholder. ID must be numeric.');
                }
                if (id < 0 || id >= arr.length) {
                    reject('Cannot return placeholder. ID out of range.');
                }

                resolve(arr[id]);
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
