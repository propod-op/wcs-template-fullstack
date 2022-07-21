// eslint-disable-next-line import/no-extraneous-dependencies
const jwt = require("jsonwebtoken");
const models = require("../models");

class MarcheurController {
  static login = (req, res) => {
    const item = req.body;

    // TODO validations (length, format...)

    models.marcheurs
      .login(item)
      .then(([result]) => {
        console.warn(result);
        // eslint-disable-next-line no-param-reassign
        delete result[0].password;

        const token = jwt.sign(
          {
            id: result[0].id,
            pseudo: result[0].pseudo,
            email: result[0].email,
            role: result[0].role,
          },
          "process.env.SECRET_JWT",
          { expiresIn: "36h" }
        );
        res.cookie("cookie_hekaxapa", token);
        res.status(200).json(result);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browse = (req, res) => {
    models.marcheurs
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.marcheurs
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const item = req.body;

    // TODO validations (length, format...)

    models.marcheurs
      .insert(item)
      .then(([result]) => {
        res.status(201).send({ ...item, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const item = req.body;

    // TODO validations (length, format...)

    item.id = parseInt(req.params.id, 10);

    models.marcheurs
      .update(item)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.marcheurs
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = MarcheurController;
