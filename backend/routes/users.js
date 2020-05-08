const router = require('express').Router();
const {
  userRegister,
  userLogin,
  userAuth,
  serializeUser,
  checkRole
} = require('../utils/auth');

//Driver Registration Route
router.post('/register/driver', async (req, res) => {
  await userRegister(req.body, 'motorista', res);
});
//Users Registration Route
router.post('/register/user', async (req, res) => {
  await userRegister(req.body, 'usuario', res);
});
//Admin Registration Route
router.post('/register/admin', async (req, res) => {
  await userRegister(req.body, 'administrador', res);
});
//Driver Login Route
router.post('/login/driver', async (req, res) => {
  await userLogin(req.body, 'motorista', res);
});
//Users Login Route
router.post('/login/user', async (req, res) => {
  await userLogin(req.body, 'usuario', res);
});
//Admin Login Route
router.post('/login/admin', async (req, res) => {
  await userLogin(req.body, 'administrador', res);
});
//Common profile route
router.get('/profile', userAuth, async (req, res) => {
  console.log(serializeUser(req.user));
  return res.json(serializeUser(req.user));
});
//Driver Protected Route
router.get(
  '/profile/driver',
  userAuth,
  checkRole(['motorista', 'usuario', 'administrador']),
  async (req, res) => {
    return res.json('Hello Driver');
  }
);
//Users Protected Route
router.get(
  '/profile/user',
  userAuth,
  checkRole(['usuario', 'administrador']),
  async (req, res) => {
    return res.json('Hello User');
  }
);
//Admin Protected Route
router.get(
  '/profile/admin',
  userAuth,
  checkRole(['administrador']),
  async (req, res) => {
    return res.json('Hello Admin');
  }
);
module.exports = router;
