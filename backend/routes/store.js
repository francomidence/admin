const router = require('express').Router();
let Store = require('../model/store.model');

router.route('').get((req, res) => {
  Store.find()
    .then(stores =>
      res.json(
        stores.map(store => {
          return { id: store._id, name: store.name };
        })
      )
    )
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('').post((req, res) => {
  const name = req.body.name;
  const newStore = new Store({ name });

  newStore
    .save()
    .then(store => res.json({ id: store._id, name: store.name }))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  Store.findById(req.params.id)
    .then(store => res.json({ id: store._id, name: store.name }))
    .catch(err => res.status(400).json(`oli Error ${err}`));
});

router.route('/:id').delete((req, res) => {
  console.log('Hola del BACKEND delete MANY dice aaron V:');
  console.log(req.params.id);
  let ids = req.params.id.split(',');

  Store.deleteMany({ _id: ids })
    .then(() => res.json('deleted many'))
    .catch(err => res.status(400).json(`Error ${err}`));
});

router.route('/:id').delete((req, res) => {
  Store.findByIdAndDelete(req.params.id)
    .then(() => res.json('deleted'))
    .catch(err => res.status(400).json(`Error ${err}`));
});

router.route('/:id').put((req, res) => {
  Store.findById(req.params.id)
    .then(store => {
      store.name = req.body.name;

      store
        .save()
        .then(() => res.json('Store updated'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error ${err}`));
});

module.exports = router;
