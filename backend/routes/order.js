// const router = require('express').Router();
// let Order = require('../model/order.model');

// router.route('/').get((req, res) => {
//   Order.find()
//     .then(orders => res.json(orders))
//     .catch(err => res.status(400).json(`Error: ${err}`));
// });

// router.route('/').post((req, res) => {
//   const code = req.body.code;
//   const customer = req.body.customer;
//   const phone = req.body.phone;
//   const address = req.body.address;
//   const soldDate = req.body.soldDate;
//   const deliverDate = req.body.deliverDate;
//   const articles = req.body.articles;
//   const total = req.body.total;
//   const store = req.body.store;
//   const driver = req.body.driver;
//   const status = req.body.status;

//   const newOrder = new Order({
//     code,
//     customer,
//     phone,
//     address,
//     soldDate,
//     deliverDate,
//     articles,
//     total,
//     store,
//     driver,
//     status
//   });

//   newOrder
//     .save()
//     .then(() => res.json('Order  Added!'))
//     .catch(err => res.status(400).json(`Error: ${err}`));
// });

// router.route('/:id').get((req, res) => {
//   Order.findById(req.params.id)
//     .then(orders => res.json(orders))
//     .catch(err => res.status(400).json(`Error ${err}`));
// });

// router.route('/:id').delete((req, res) => {
//   Order.findByIdAndDelete(req.params.id)
//     .then(() => res.json('deleted'))
//     .catch(err => res.status(400).json(`Error ${err}`));
// });

// router.route('/:id').put((req, res) => {
//   Order.findById(req.params.id)
//     .then(Order => {
//       Order.code = req.body.code;
//       Order.customer = req.body.customer;
//       Order.phone = req.body.phone;
//       Order.address = req.body.address;
//       Order.soldDate = req.body.soldDate;
//       Order.deliverDate = req.body.deliverDate;
//       Order.articles = req.body.articles;
//       Order.total = req.body.total;
//       Order.store = req.body.store;
//       Order.driver = req.body.driver;
//       Order.status = req.body.status;

//       Order.save()
//         .then(() => res.json('Order  Updated'))
//         .catch(err => res.status(400).json(`Error: ${err}`));
//     })
//     .catch(err => res.status(400).json(`Error ${err}`));
// });

// module.exports = router;

const router = require('express').Router();
let Order = require('../model/order.model');

router.route('').get((req, res) => {
  Order.find()
    .then(orders =>
      res.json(
        orders.map(order => {
          return {
            id: order._id,
            code: order.code,
            customer: order.customer,
            phone: order.phone,
            address: order.address,
            soldDate: order.soldDate,
            deliverDate: order.deliverDate,
            articles: order.articles,
            total: order.total,
            store: order.store,
            driver: order.driver,
            status: order.status
          };
        })
      )
    )
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('').post((req, res) => {
  const code = req.body.code;
  const customer = req.body.customer;
  const phone = req.body.phone;
  const address = req.body.address;
  const soldDate = req.body.soldDate;
  const deliverDate = req.body.deliverDate;
  const articles = req.body.articles;
  const total = req.body.total;
  const store = req.body.store;
  const driver = req.body.driver;
  const status = req.body.status;

  const newOrder = new Order({
    code,
    customer,
    phone,
    address,
    soldDate,
    deliverDate,
    articles,
    total,
    store,
    driver,
    status
  });

  newOrder
    .save()
    .then(article =>
      res.json({
        id: article._id,
        code: article.code,
        customer: article.customer,
        phone: article.phone,
        address: article.address,
        soldDate: article.soldDate,
        deliverDate: article.deliverDate,
        articles: article.articles,
        total: article.total,
        store: article.store,
        driver: article.driver,
        status: article.status
      })
    )
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  Order.findById(req.params.id)
    .then(article =>
      res.json({
        id: article._id,
        code: article.code,
        customer: article.customer,
        phone: article.phone,
        address: article.address,
        soldDate: article.soldDate,
        deliverDate: article.deliverDate,
        articles: article.articles,
        total: article.total,
        store: article.store,
        driver: article.driver,
        status: article.status
      })
    )
    .catch(err => res.status(400).json(`oli Error ${err}`));
});

router.route('/:id').delete((req, res) => {
  console.log('Hola del BACKEND delete MANY dice aaron V:');
  console.log(req.params.id);
  let ids = req.params.id.split(',');

  Order.deleteMany({ _id: ids })
    .then(() => res.json('deleted many'))
    .catch(err => res.status(400).json(`Error ${err}`));
});

router.route('/:id').delete((req, res) => {
  Order.findByIdAndDelete(req.params.id)
    .then(() => res.json('deleted'))
    .catch(err => res.status(400).json(`Error ${err}`));
});

router.route('/:id').put((req, res) => {
  Order.findById(req.params.id)
    .then(order => {
      order.code = req.body.code;
      order.customer = req.body.customer;
      order.phone = req.body.phone;
      order.address = req.body.address;
      order.soldDate = req.body.soldDate;
      order.articles = req.body.articles;
      order.total = req.body.total;
      order.store = req.body.store;
      order.driver = req.body.driver;
      order.status = req.body.status;

      order
        .save()
        .then(() => res.json('Article updated'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error ${err}`));
});

module.exports = router;
