const User = require('../model/user.model');
const { SECRET } = require('../config/index');
const { Strategy, ExtractJwt } = require('passport-jwt');
const winston = require('winston');
const logger = winston.createLogger({
  transports: [new winston.transports.Console()]
});

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET
};

module.exports = passport => {
  passport.use(
    new Strategy(options, async (payload, done) => {
      await User.findById(payload.user_id)
        .then(async user => {
          if (user) {
            //logger.log('User login');
            return done(null, user);
          }
          //logger.warn('User Login Failed');
          return done(null, false);
        })
        .catch(err => {
          //logger.error('User Login Failed!');
          return done(null, false);
        });
    })
  );
};
