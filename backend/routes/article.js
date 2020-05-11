// const router = require('express').Router();
// let Article = require('../model/article.model');

// router.route('/').get((req, res) => {
//   Article.find()
//     .then(articles => res.json(articles))
//     .catch(err => res.status(400).json(`Error: ${err}`));
// });

// router.route('/').post((req, res) => {
//   const code = req.body.code;
//   const name = req.body.name;
//   const price = req.body.price;
//   const comment = req.body.comment;
//   const articleType = req.body.articleType;

//   const newArticle = new Article({ code, name, price, comment, articleType });

//   newArticle
//     .save()
//     .then(() => res.json('Article  Added!'))
//     .catch(err => res.status(400).json(`Error: ${err}`));
// });

// router.route('/:id').get((req, res) => {
//   Article.findById(req.params.id)
//     .then(articles => res.json(articles))
//     .catch(err => res.status(400).json(`Error ${err}`));
// });

// router.route('/:id').delete((req, res) => {
//   Article.findByIdAndDelete(req.params.id)
//     .then(() => res.json('deleted'))
//     .catch(err => res.status(400).json(`Error ${err}`));
// });

// router.route('/:id').put((req, res) => {
//   Article.findById(req.params.id)
//     .then(article => {
//       article.code = req.body.code;
//       article.name = req.body.name;
//       article.price = req.body.price;
//       article.comment = req.body.comment;
//       article.articleType = req.body.articleType;

//       article
//         .save()
//         .then(() => res.json('Article  Updated'))
//         .catch(err => res.status(400).json(`Error: ${err}`));
//     })
//     .catch(err => res.status(400).json(`Error ${err}`));
// });

// module.exports = router;

const router = require('express').Router();
let Article = require('../model/article.model');

router.route('').get((req, res) => {
  Article.find()
    .then(articles =>
      res.json(
        articles.map(article => {
          return {
            id: article._id,
            code: article.code,
            name: article.name,
            price: article.price,
            comment: article.comment,
            articleType: article.articleType
          };
        })
      )
    )
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('').post((req, res) => {
  const code = req.body.code;
  const name = req.body.name;
  const price = req.body.price;
  const comment = req.body.comment;
  const articleType = req.body.articleType;

  const newArticle = new Article({ code, name, price, comment, articleType });

  newArticle
    .save()
    .then(article =>
      res.json({
        id: article._id,
        code: article.code,
        name: article.name,
        price: article.price,
        comment: article.comment,
        articleType: article.articleType
      })
    )
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  Article.findById(req.params.id)
    .then(article =>
      res.json({
        id: article._id,
        code: article.code,
        name: article.name,
        price: article.price,
        comment: article.comment,
        articleType: article.articleType
      })
    )
    .catch(err => res.status(400).json(`oli Error ${err}`));
});

router.route('/:id').delete((req, res) => {
  console.log('Hola del BACKEND delete MANY dice aaron V:');
  console.log(req.params.id);
  let ids = req.params.id.split(',');

  Article.deleteMany({ _id: ids })
    .then(() => res.json('deleted many'))
    .catch(err => res.status(400).json(`Error ${err}`));
});

router.route('/:id').delete((req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(() => res.json('deleted'))
    .catch(err => res.status(400).json(`Error ${err}`));
});

router.route('/:id').put((req, res) => {
  Article.findById(req.params.id)
    .then(article => {
      article.code = req.body.code;
      article.name = req.body.name;
      article.price = req.body.price;
      article.comment = req.body.comment;
      article.articleType = req.body.articleType;

      article
        .save()
        .then(() => res.json('Article updated'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error ${err}`));
});

module.exports = router;
