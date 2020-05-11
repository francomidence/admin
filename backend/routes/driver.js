const router = require('express').Router();
let Driver = require('../model/driver.model');

router.route('').get((req, res) => {
  Driver.find()
    .then(drivers =>
      res.json(
        drivers.map(driver => {
          return { id: driver._id, name: driver.name, phone: driver.phone };
        })
      )
    )
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('').post((req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const newDriver = new Driver({ name, phone });

  newDriver
    .save()
    .then(driver =>
      res.json({ id: driver._id, name: driver.name, phone: driver.phone })
    )
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  Driver.findById(req.params.id)
    .then(driver =>
      res.json({ id: driver._id, name: driver.name, phone: driver.phone })
    )
    .catch(err => res.status(400).json(`oli Error ${err}`));
});

router.route('/:id').delete((req, res) => {
  console.log(req.params.id);
  let ids = req.params.id.split(',');

  Driver.deleteMany({ _id: ids })
    .then(() => res.json('deleted many'))
    .catch(err => res.status(400).json(`Error ${err}`));
});

router.route('/:id').delete((req, res) => {
  Driver.findByIdAndDelete(req.params.id)
    .then(() => res.json('deleted'))
    .catch(err => res.status(400).json(`Error ${err}`));
});

router.route('/:id').put((req, res) => {
  Driver.findById(req.params.id)
    .then(driver => {
      driver.name = req.body.name;
      driver.phone = req.body.phone;

      driver
        .save()
        .then(() => res.json('Driver updated'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error ${err}`));
});

module.exports = router;
