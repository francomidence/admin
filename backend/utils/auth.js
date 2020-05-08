const User = require('../model/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/index');
const passport = require('passport');

/**
 * @DESCRIPTION to register user(driver, user, admin)
 */

const userRegister = async (userDetails, role, res) => {
  try {
    //Validate the user
    let usernameNotTaken = await validateUsername(userDetails.username);
    if (usernameNotTaken) {
      return res.status(400).json({
        message: 'El usuario ya existe',
        success: false
      });
    }
    //Get the hashed password
    const hashedPassword = await bcrypt.hash(userDetails.password, 12);
    //Create a new user
    const newUser = new User({
      ...userDetails,
      password: hashedPassword,
      role
    });
    await newUser.save();
    return res.status(201).json({
      message: 'El usuario fue creado',
      success: true
    });
  } catch (err) {
    //Implement logger function (winston)
    return res.status(500).json({
      message: 'No se pudo crear el usuario',
      success: false
    });
  }
};

/**
 * @DESCRIPTION to login user(driver, user, admin)
 */

const userLogin = async (userCredentials, role, res) => {
  let { username, password } = userCredentials;
  //First check if the username is in the database
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({
      message: 'El usuario no existe',
      success: false
    });
  }
  //Check the role
  if (user.role !== role) {
    return res.status(403).json({
      message: 'Intento de inicio de sesion fallido. Rol equivocado.',
      success: false
    });
  }
  //User exists and trying to sign in from the right portal
  //Check password
  let isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    //Sign in the token adn issue it to the user
    let token = jwt.sign(
      {
        user_id: user._id,
        role: user.role,
        username: user.username
      },
      SECRET,
      { expiresIn: '7d' }
    );

    let result = {
      username: user.username,
      role: user.role,
      token: `Bearer ${token}`,
      expiresIn: 168
    };
    return res.status(200).json({
      ...result,
      message: 'Inicio de sesion exitoso!',
      success: true
    });
  } else {
    return res.status(403).json({
      message: 'Contrasenia incorrecta',
      success: false
    });
  }
};

/**
 *
 * @DESCRIPTION Check role Middleware
 */

const checkRole = roles => (req, res, next) =>
  !roles.includes(req.user.role)
    ? res.status(401).json('Unauthorized')
    : next();

const validateUsername = async username => {
  let user = await User.findOne({ username });
  return user ? false : true;
};

/**
 * @DESCRIPTION Passport middleware
 */

const userAuth = passport.authenticate('jwt', { session: false });

const serializeUser = user => {
  return {
    _id: user._id,
    username: user.username,
    role: user.role,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  };
};

module.exports = {
  userRegister,
  userLogin,
  checkRole,
  userAuth,
  serializeUser
};
