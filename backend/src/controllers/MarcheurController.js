/* eslint-disable import/no-extraneous-dependencies */
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const models = require("../models");

const saltRounds = 10;

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
            nom: result[0].nom,
            prenom: result[0].prenom,
            email: result[0].email,
            tel: result[0].tel,
            tel_urgence: result[0].tel_urgence,
            adresse: `${result[0].adresse_rue} - ${result[0].adresse_cp} - ${result[0].adresse_ville}`,
          },
          process.env.JWTTOKEN_SECRET ?? "JWTTOKEN_SECRET",
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

  static add = async (req, res) => {
    const item = req.body;

    models.marcheurs
      .insert(item)
      // eslint-disable-next-line no-unused-vars
      .then(([result]) => {
        const hash = bcrypt.hashSync(item.password, saltRounds).toString();
        console.warn(`Hashed : ${hash}`);
        delete item.confirmpassword;
        item.password = hash;
        console.warn(item);
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
