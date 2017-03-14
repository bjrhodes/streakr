var mml = mml || {};
mml.stores = mml.stores || {};

mml.stores.streaks = function(factory) {

    var tools = factory.tools(),
        streaks;

    function isBad(streak) {
        return (typeof(streak.desc) !== 'string' || typeof(streak.id) !== 'string');
    }
    function testData(arr) {
        return !arr.some(isBad);
    }
    function load() {
        var str = localStorage.getItem('streaks'),
            arr = JSON.parse(str);

        if (!(arr instanceof Array) || !testData(arr)) {
            arr = [];
        }

        streaks = factory.enumerable(arr);
    }

    function save() {
        localStorage.setItem('streaks', JSON.stringify(streaks));
    }

    load();

    return {
        set: function(desc) {
            return new Promise(function(resolve, reject) {
                var id, streak;
                if (typeof(desc) !== 'string' || desc.length === 0) {
                    reject('streak description must be string');
                }
                id = tools.generateUUID();
                streak = {id: id, desc: desc};
                streaks.push(streak);
                save();
                resolve(streak);
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
