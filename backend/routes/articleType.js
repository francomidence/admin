const router = require('express').Router();
let ArticleType = require('../model/articleType.model');

router.route('').get((req, res) => {
  ArticleType.find()
    .then(articles =>
      res.json(
        articles.map(articles => {
          return { id: articles._id, name: articles.name };
        })
      )
    )
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('').post((req, res) => {
  const name = req.body.name;
  const newArticleType = new ArticleType({ name });

  newArticleType
    .save()
    .then(articleType =>
      res.json({ id: articleType._id, name: articleType.name })
    )
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  ArticleType.findById(req.params.id)
    .then(articleType =>
      res.json({ id: articleType._id, name: articleType.name })
    )
    .catch(err => res.status(400).json(`oli Error ${err}`));
});

router.route('/:id').delete((req, res) => {
  console.log('Hola del BACKEND delete MANY dice aaron V:');
  console.log(req.params.id);
  let ids = req.params.id.split(',');

  ArticleType.deleteMany({ _id: ids })
    .then(() => res.json('deleted many'))
    .catch(err => res.status(400).json(`Error ${err}`));
});

router.route('/:id').delete((req, res) => {
  ArticleType.findByIdAndDelete(req.params.id)
    .then(() => res.json('deleted'))
    .catch(err => res.status(400).json(`Error ${err}`));
});

router.route('/:id').put((req, res) => {
  ArticleType.findById(req.params.id)
    .then(articleType => {
      articleType.name = req.body.name;

      articleType
        .save()
        .then(() => res.json('Article Type updated'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error ${err}`));
});

module.exports = router;
