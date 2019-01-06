const db = require('./config/keys').mongoURI;
const Theme = require('./models/Theme');

// Import async.js - utility library for handlng asynchronous calls
var async = require('async');

// URL to connect to a local MongoDB with database test.
// Change this to fit your running MongoDB instance
const databaseURL = db;

// Import native MongoDB client for Node.js
const MongoClient = require('mongodb').MongoClient;

// Import mongoose.js to define our schema and interact with MongoDB
const mongoose = require('mongoose');

// Define User schema model with 3 fields: user, email, password

// Async series method to make sure asynchronous calls below run sequentially
async.series([
  
  // First function - connect to MongoDB, then drop the database
//   function(callback) {
    
//     MongoClient.connect(databaseURL, function(err, db) {
      
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
  
  // Second function - connect to MongoDB using mongoose, which is an asynchronous call
  function(callback) {
    
    // Open connection to MongoDB
    mongoose.connect(databaseURL);
    
    // Need to listen to 'connected' event then execute callback method
    // to call the next set of code in the async.serial array
    mongoose.connection.on('connected', function(){
      console.log('db connected via mongoose');
      
      // Execute callback now we have a successful connection to the DB
      // and move on to the third function below in async.series 
      callback(null, 'SUCCESS - Connected to mongodb');
    });
  },
  
  // Third function - use Mongoose to create a User model and save it to database
  function(callback) {

    // BEGIN SEED DATABASE
    
    // Use an array to store a list of User model objects to save to the database
    let themes
    let rawThemes = [];
    let rawThemeItems = [];
    
    for (i = 0; i < rawThemes.length; i++) {
        for (i = 0; i < rawThemeItems.length; i++) {
        rawSubThemeItems = rawThemeItems.slice(0,9)

      let theme = new Theme({
        name: rawThemes[i].name,
        description: rawThemes[i].description,
        themeItems: [rawSubThemeItems]
      });

      // Add newly create User model to 'users' array
      themes.push(theme);
    }
    
    console.log("Populating database with %s themes", themes.length);

    async.eachSeries(
      
      // 1st parameter is the 'users' array to iterate over 
      themes, 
        
      // 2nd parameter is a function takes each user in the 'users' array 
      // as an argument and a callback function that needs to be executed 
      // when the asynchronous call complete. 
      
      // Note there is another 'callback' method here called 'userSavedCallBack'.
      // 'userSavedCallBack' needs to be called to inform async.eachSeries to 
      // move on to the next user object in the 'users' array. Do not mistakenly
      // call 'callback' defined in line 130.
      function(theme, themeSavedCallBack){

        // There is no need to make a call to create the 'test' database.
        // Saving a model will automatically create the database
        theme.save(function(err) {

          if(err) {
            // Send JSON response to console for errors
            console.dir(err);
          }
          
          // Print out which user we are saving
        //   console.log("Saving user #%s out of %s", user.name, testUserCount);
          
          // Call 'userSavedCallBack' and NOT 'callback' to ensure that the next
          // 'user' item in the 'users' array gets called to be saved to the database
          themeSavedCallBack();
        });

      },
      
      // 3rd parameter is a function to call when all users in 'users' array have 
      // completed their asynchronous user.save function
      function(err){
        
        if (err) console.dir(err);
        
        console.log("Finished aysnc.each in seeding db")

        // Execute callback function from line 130 to signal to async.series that
        // all asynchronous calls are now done
        callback(null, 'SUCCESS - Seed database');

      }
    );

    // END SEED DATABASE

  }
],

// This function executes when everything above is done
function(err, results){

  console.log("\n\n--- Database seed program completed ---");
  
  if(err) {
    console.log("Errors = ");
    console.dir(errors)
  } else {
    console.log("Results = ");
    console.log(results);
  }

  console.log("\n\n--- Exiting database seed progam ---");
  // Exit the process to get back to terrminal console 
  process.exit(0);
});