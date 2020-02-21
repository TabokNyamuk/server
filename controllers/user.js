const { User } = require('../models');

class UserController {
  static create(req, res, next) {
    let user = {
      name: req.body.name,
      score: req.body.score
    };
    console.log(user, '< ini user');
    User.create(user)
      .then(result => {
        res.status(201).json(result);
      })
      .catch(err => {
        next(err);
      });
  }

  static findAll(req, res, next) {
    User.findAll()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => {
        next(err);
      });
  }

  static update(req, res, next) {
    let user = {
      name: req.body.name,
      score: req.body.score
    };
    let id = req.params.id;

    User.update(user, {
      where: {
        id: id
      },
      returning: true
    })
      .then(result => {
        res.status(200).json(result[1][0]);
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = UserController;
