const router = require('express').Router();
let Status = require('../model/status.model');

router.route('').get((req, res) => {
  Status.find()
    .then(statuses =>
      res.json(
        statuses.map(status => {
          return { id: status._id, status: status.status };
        })
      )
    )
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('').post((req, res) => {
  const status = req.body.status;
  const newStatus = new Status({ status });

  newStatus
    .save()
    .then(status => res.json({ id: status._id, status: status.status }))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  Status.findById(req.params.id)
    .then(status => res.json({ id: status._id, status: status.status }))
    .catch(err => res.status(400).json(`oli Error ${err}`));
});

router.route('/:id').delete((req, res) => {
  console.log(req.params.id);
  let ids = req.params.id.split(',');

  Status.deleteMany({ _id: ids })
    .then(() => res.json('deleted many'))
    .catch(err => res.status(400).json(`Error ${err}`));
});

router.route('/:id').delete((req, res) => {
  Status.findByIdAndDelete(req.params.id)
    .then(() => res.json('deleted'))
    .catch(err => res.status(400).json(`Error ${err}`));
});

router.route('/:id').put((req, res) => {
  Status.findById(req.params.id)
    .then(status => {
      status.status = req.body.status;

      status
        .save()
        .then(() => res.json('Article Type updated'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error ${err}`));
});

module.exports = router;
