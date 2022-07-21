const models = require("../models");

class LoginController {
  static login = (req, res) => {
    const item = req.body;

    // TODO validations (length, format...)

    models.login
      .insert(item)
      .then(([result]) => {
        res.status(201).send({ ...item, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = LoginController;
