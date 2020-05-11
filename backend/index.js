const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const { connect } = require('mongoose');
const { success, error } = require('consola');

//Constants
const { DB, PORT } = require('./config/index');

//Initialize the application
const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

require('./middleware/passport')(passport);

//Use router Middleware
app.use('/api/users', require('./routes/users'));
const articleTypeRouter = require('./routes/articleType');
const storeRouter = require('./routes/store');
const articleRouter = require('./routes/article');
const orderRouter = require('./routes/order');
const statusRouter = require('./routes/status');
const driverRouter = require('./routes/driver');

app.use('/api/articletype', articleTypeRouter);
app.use('/api/store', storeRouter);
app.use('/api/article', articleRouter);
app.use('/api/order', orderRouter);
app.use('/api/status', statusRouter);
app.use('/api/driver', driverRouter);

const startApp = async () => {
  try {
    //Connection to the database
    await connect(DB, {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });
    success({ message: `DB started on port \n${PORT}`, badge: true });
    //Listening for server
    app.listen(PORT, () =>
      success({ message: `Server started on port ${PORT}`, badge: true })
    );
  } catch (err) {
    error({
      message: `Unable to connect with database \n${err}`,
      badge: true
    });
    startApp();
  }
};

startApp();
