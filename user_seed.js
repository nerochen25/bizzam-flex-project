// const db = require('./config/keys').mongoURI;
// var async = require('async');
// const MongoClient = require('mongodb').MongoClient;
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const User = require('./models/User');
// const demoUsers = require('./seed/user');


// // async function bcrypt.genSalt(10, (err, salt) => {



//  async function seedOneUserSet(userDetails){
//     async.series([
    
//     // //   First function - connect to MongoDB, then drop the database
//     //   function(callback) {
        
//     //     MongoClient.connect(db, function(err, db) {
        
//     //       if(err) throw err;
        
//     //       // Drop database which is an asynchronous call
//     //       db.dropDatabase(function(err, result) {

//     //         // After successfully dropping database, force close database which is another asynchronous call 
//     //         db.close(true, function(err, result) {

//     //           // Close successful so execute callback so second function in async.serial gets called
//     //           callback(null, 'SUCCESS - dropped database');
//     //         });
//     //       });
//     //     });
//     //   },
//         // #1
//         function(callback) {
            
//             mongoose.connect(db, { useNewUrlParser: true });  
//             mongoose.connection.on('connected', function(){
//             console.log('db connected via mongoose');
//             callback(null, 'SUCCESS - Connected to mongodb');
//             });
//         },

//         //#2
//         function(callback) {

//             let users = []
//             let user = userDetails.users
//                 // Encrypt password before saving to database

//                 user.pre('save', function(next, err) {
//                     bcrypt.genSalt(10, function(err, salt) {

//                         if (err) return next(err);
                    
//                         bcrypt.hash(user.password, salt, null, function(err, hash) {
//                         if (err) 
//                             return next(err);
//                         user.password = hash;
//                         next();
//                         });
//                     });
            


//                 bcrypt.genSalt(10, (err, salt) => {

//                     async.eachSeries(demoUsers,
//                         (user) => {
//                         bcrypt.hash(userDetails.user.password, salt, (err, hash) => {
//                             if (err) throw err;
//                             console.log(userDetails)
//                             // userDetails.user.password = hash;
                            

//                             user = new User({
//                                 // username: userDetails.user.username,
//                                 // password: userDetails.user.password,
//                                 date: Date.now,
//                                 games: []
//                             });


                        
//                       })
//                     }
//                     )
//                     }
//                   );
 
//             // let user = new User({
//             //     username: userDetails.users[i].username,
//             //     password: userDetails.users[i].password,
//             //     date: Date.now,
//             //     games: []
//             // });

            



//             users.push(user);
//             }
            

//             // async.eachSeries(
//             //     users, 
//             //     function(user, userSavedCallBack){
//             //         user.save(function(err) {
//             //         if(err) {
//             //         console.log(err);
//             //         }
//             //     userSavedCallBack();
//             //     });
//             // },
            

//             // function(err){

//             //     if (err) console.log(err);
//             //     console.log("Finished aysnc.each in seeding db")
//             //     callback(null, 'SUCCESS - Seed database');
//             // }
//             // );

//         ],


//     function(err, results){

//     console.log("\n\n--- Database seed program completed ---");
    
//     if(err) {
//         console.log("Errors = ");
//         console.log(errors)
//     } else {
//         console.log("Results = ");
//         console.log(results);
//     }

//     console.log("\n\n--- Exiting database seed progam ---");
//     // Exit the process to get back to terrminal console 
//     process.exit(0);
//     })
    
// }

// // // functional multiseeding
// // const multiItemSet = [travel, teamBuilding, food]

// //  async.eachSeries(multiItemSet,
// //     (item) => seedOneuser(item),
    
// // );

   
// // demo seed on item
// const oneItemSet = [demoUsers]
// async.eachSeries(oneItemSet,
//     (item) => seedOneUserSet(item)
// );
