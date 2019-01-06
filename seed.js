const db = require('./config/keys').mongoURI;
const Theme = require('./models/Theme');
var async = require('async');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');


async.series([
  
  // First function - connect to MongoDB, then drop the database
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
  

  function(callback) {
    
    mongoose.connect(db, { useNewUrlParser: true });
    
    mongoose.connection.on('connected', function(){
      console.log('db connected via mongoose');
      
      callback(null, 'SUCCESS - Connected to mongodb');
    });
  },

  function(callback) {


    

    let themes = []
    let rawThemes = [
        {name: "Location Demo Theme 1", description: "I have seeded random theme items"},
        {name: "Location Demo Theme 2", description: "I have seeded random theme items"},
        {name: "Location Demo Theme 3", description: "I have seeded random theme items"},
        {name: "Location Demo Theme 4", description: "I have seeded random theme items"},
        {name: "Location Demo Theme 5", description: "I have seeded random theme items"},
        {name: "Location Demo Theme 6", description: "I have seeded random theme items"},
        {name: "Location Demo Theme 7", description: "I have seeded random theme items"},
        {name: "Location Demo Theme 8", description: "I have seeded random theme items"},
        {name: "Location Demo Theme 9", description: "I have seeded random theme items"},
        {name: "Location Demo Theme 10", description: "I have seeded random theme items"}
    ];
    let rawThemeItems = [
        {text:'Coffeeshop'},
        {text:'Hardware store'},
        {text:'Best Friends house'},
        {text:'Grocery store'},
        {text:'Department store'},
        {text:'Mall'},
        {text:'Pizza Shop'},
        {text:'Cemetary'},
        {text:'Local Park'},
        {text:'School'},
        {text:'Library'},
        {text:'LAN Party'},
        {text:'Pub'},
        {text:'Beach'},
        {text:'Kitchen'},
        {text:'Bathroom'},
        {text:'Living Room'},
        {text:'Backyard'},
        {text:'Sports game'},
        {text:'Play'},
        {text:'Movies'},
        {text:'Elevator'},
        {text:'Stairs'},
        {text:'Boat'},
        {text:'Escalator'},
        {text:'Bridge'},
        {text:'Church'},
        {text:'Castle'},
        {text:'Hospital'},
        {text:'Museum'},
        {text:'Zoo'},
        {text:'Tree'},
        {text:'Taxi'},
        {text:'Airport'},
        {text:'Bed'},
        {text:'Bus stop'},
        {text:'Parking lot'},
        {text:'Train station'},
        {text:'Laundry Mat'},
        {text:'Gym'},
        {text:'Nail salon'},
        {text:'Thrift Shop'},
        {text:'Animal shelter'},
        {text:'Ferry Boat'},
        {text:'Tent'},
        {text:'Hot tub'},
        {text:'Pool'},
        {text:'Haunted house'},
        {text:'Butcher'},
        {text:'Bakery'}

    ];

    // Fisher-Yates shuffle
    function shuffle (array) {
        var i = 0
          , j = 0
          , temp = null
      
        for (i = array.length - 1; i > 0; i -= 1) {
          j = Math.floor(Math.random() * (i + 1))
          temp = array[i]
          array[i] = array[j]
          array[j] = temp
        }
        return array
      }
    
    
    for (i = 0; i < rawThemes.length; i++) {
        let shuffledItems = shuffle(rawThemeItems)
        rawSubThemeItems = shuffledItems.slice(0, 9)

      let theme = new Theme({
        name: rawThemes[i].name,
        description: rawThemes[i].description,
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
});