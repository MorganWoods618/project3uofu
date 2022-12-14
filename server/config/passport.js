// Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. 
// A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.
const passport = require("passport");
const LocalStrategy = require("passport-local");
const db = require("../models");
const bCrypt = require("bcrypt-nodejs");


module.exports = () => {

   passport.serializeUser((user, cb) => {
      cb(null, user.id);
   });

   passport.deserializeUser((id, cb) => {
     
      db.User.findById(id, (err, user) => {
         if (err) { return cb(err); }
         cb(null, user);
      });

   });


   // Sign up configuration
   // ========================================

   passport.use("local-signup", new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true
   },
      (req, username, password, done) => {

         db.User.findOne({ username: username }, (err, user) => {
            if (err) {
               console.log("Error: ", err);
               return done(err);
            }

            if (user !== null) {
               console.log("Username is already taken.", user);
               return done(null, false, { message: "Username is already taken." });
            }

            const hashedPassword = generateHash(req.body.password);
            const newUser = {
               username: req.body.username,
               password: hashedPassword
            }
            db.User.create(newUser)
               .then(function (dbUser) {
                  if (!dbUser) {
                     return done(null, false);
                  } else {
                     return done(null, dbUser);
                  }
               })

         });
      }
   ));


   // Log in configuration
   // ========================================

   passport.use("local-login", new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true
   },
      (req, username, password, done) => {
            
         db.User.findOne({ username: username }, (err, user) => {   
            if (err) {
               console.log("Error: ", err);
               return done(err);
            }
            
            if (!user) {
               console.log("No user found.", user);
               return done(null, false, {
                  message: "No user found."
               });
            }

            if (!bCrypt.compareSync(password, user.password)) {
               console.log("Invalid password.");
               return done(null, false, {
                  message: "Invalid password."
               });
            }

            console.log("Success!", user);
            return done(null, user);
         });
      }
   ));
}

// Generate hash for password
function generateHash(password) {
   return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};