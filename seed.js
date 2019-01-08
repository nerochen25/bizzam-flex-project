const db = require('./config/keys').mongoURI;
const Theme = require('./models/Theme');
var async = require('async');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const travel = require('./seed/travel');
const teamBuilding = require('./seed/team_building');
const food = require('./seed/food');
const scavenger = require('./seed/scavenger_hunt')
const shuffle = require('./seed/shuffle');


 async function seedOneTheme(themeSetItem){
    async.series([
 
        function(callback) {
            
            mongoose.connect(db, { useNewUrlParser: true });  
            mongoose.connection.on('connected', function(){
            console.log('db connected via mongoose');
            callback(null, 'SUCCESS - Connected to mongodb');
            });
        },

        function(callback) {

            let themes = []
            
            for (i = 0; i < themeSetItem.themes.length; i++) {
                let shuffledItems = shuffle(themeSetItem.themeItems)
                rawSubThemeItems = shuffledItems.slice(0, 9)

            let theme = new Theme({
                name: themeSetItem.themes[i].name,
                description: themeSetItem.themes[i].description,
                themeItems: rawSubThemeItems
            });

            themes.push(theme);
            }
            

            async.eachSeries(
                themes, 
                function(theme, themeSavedCallBack){
                    theme.save(function(err) {
                    if(err) {
                    console.log(err);
                    }
                themeSavedCallBack();
                });
            },
            

            function(err){

                if (err) console.log(err);
                console.log("Finished aysnc.each in seeding db")
                callback(null, 'SUCCESS - Seed database');
            }
            );
        }
        ],


    function(err, results){

    console.log("\n\n--- Database seed program completed ---");
    
    if(err) {
        console.log("Errors = ");
        console.log(errors)
    } else {
        console.log("Results = ");
        console.log(results);
    }

    console.log("\n\n--- Exiting database seed progam ---");
    // Exit the process to get back to terrminal console 
    process.exit(0);
    })
    
}

// // functional multiseeding
// const multiItemSet = [travel, teamBuilding, food]

//  async.eachSeries(multiItemSet,
//     (item) => seedOneTheme(item),
    
// );

   
// demo seed one item

// const oneItemSet = [travel]
// async.eachSeries(oneItemSet,
//     (item) => seedOneTheme(item)
// );

// const oneItemSet2 = [teamBuilding]
// async.eachSeries(oneItemSet2,
//     (item) => seedOneTheme(item)
// );

// const oneItemSet3 = [food]
// async.eachSeries(oneItemSet3,
//     (item) => seedOneTheme(item)
// );

// const oneItemSet4 = [scavenger]
// async.eachSeries(oneItemSet4,
//     (item) => seedOneTheme(item)
// );