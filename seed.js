const db = require('./config/keys').mongoURI;
const Theme = require('./models/Theme');
var async = require('async');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const travel = require('./seed/travel');
const teamBuilding = require('./seed/team_building');
const food = require('./seed/food');
const shuffle = require('./seed/shuffle');


 async function seedOneTheme(themeSetItem){
    async.series([
    
    // //   First function - connect to MongoDB, then drop the database
    //   function(callback) {
        
    //     MongoClient.connect(db, function(err, db) {
        
    //       if(err) throw err;
        
    //       // Drop database which is an asynchronous call
    //       db.dropDatabase(function(err, result) {

    //         // After successfully dropping database, force close database which is another asynchronous call 
    //         db.close(true, function(err, result) {

    //           // Close successful so execute callback so second function in async.serial gets called
    //           callback(null, 'SUCCESS - dropped database');
    //         });
    //       });
    //     });
    //   },
        // #1
        function(callback) {
            
            mongoose.connect(db, { useNewUrlParser: true });  
            mongoose.connection.on('connected', function(){
            console.log('db connected via mongoose');
            callback(null, 'SUCCESS - Connected to mongodb');
            });
        },

        //#2
        function(callback) {

            let themes = []
            

            // // Fisher-Yates shuffle
            // function shuffle (array) {
            //     var i = 0
            //     , j = 0
            //     , temp = null
            
            //     for (i = array.length - 1; i > 0; i -= 1) {
            //     j = Math.floor(Math.random() * (i + 1))
            //     temp = array[i]
            //     array[i] = array[j]
            //     array[j] = temp
            //     }
            //     return array
            // }
            
            
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
    // process.exit(0);
    })
    
}

// // functional multiseeding
// const multiItemSet = [travel, teamBuilding, food]

//  async.eachSeries(multiItemSet,
//     (item) => seedOneTheme(item),
    
// );

   
// demo seed on item
const oneItemSet = [travel]
async.eachSeries(oneItemSet,
    (item) => seedOneTheme(item)
);

const oneItemSet2 = [teamBuilding]
async.eachSeries(oneItemSet2,
    (item) => seedOneTheme(item)
);

const oneItemSet3 = [food]
async.eachSeries(oneItemSet3,
    (item) => seedOneTheme(item)
);