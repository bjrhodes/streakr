var mml = mml || {};
mml.stores = mml.stores || {};

mml.stores.streaks = function(factory) {

    var tools = factory.tools(),
        arr = [ ];

    function load() {
        var str = localStorage.getItem('streaks'),
               parsed = JSON.parse(str);

        if (parsed instanceof Array) {
            arr = parsed;
        }
    }

    function save() {
            localStorage.setItem('streaks', JSON.stringify(arr));
    }

    load();

    return {
        set: function(desc) {
            return new Promise(function(resolve, reject) {
                var streak = {};
		        if (typeof (desc) !== 'string' ) {
			        reject('Streak descriptions must be strings.');
		}

        streak.id = tools.generateId();
        streak.desc = desc;

		arr.push(streak);
		save();

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
