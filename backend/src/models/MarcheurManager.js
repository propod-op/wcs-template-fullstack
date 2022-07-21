const AbstractManager = require("./AbstractManager");

class MarcheurManager extends AbstractManager {
  static table = "marcheurs";

  insert(marcheur) {
    return this.connection.query(
      `insert into ${MarcheurManager.table} (pseudo, nom, prenom, adresse_rue, adresse_cp, adresse_ville, email, tel, femme, tel_urgence, password) values (? , ? , ? , ?, ?, ?, ?, ?, ?, ?, ? )`,
      [
        marcheur.pseudo,
        marcheur.nom,
        marcheur.prenom,
        marcheur.adresse_rue,
        marcheur.adresse_cp,
        marcheur.adresse_ville,
        marcheur.email,
        marcheur.tel,
        marcheur.femme,
        marcheur.tel_urgence,
        marcheur.password,
      ]
    );
  }

  update(marcheur) {
    return this.connection.query(
      `update ${MarcheurManager.table} set pseudo = ?, nom = ?, prenom = ?, adresse_rue = ?, adresse_cp = ?, adresse_ville = ?, email = ?, tel = ?, femme = ?, tel_urgence = ?, password = ? where id = ?`,
      [
        marcheur.pseudo,
        marcheur.nom,
        marcheur.prenom,
        marcheur.adresse_rue,
        marcheur.adresse_cp,
        marcheur.adresse_ville,
        marcheur.email,
        marcheur.tel,
        marcheur.femme,
        marcheur.tel_urgence,
        marcheur.password,
        marcheur.id,
      ]
    );
  }

  login(data) {
    return this.connection.query(
      `SELECT * FROM ${MarcheurManager.table} WHERE email = ? AND password = ?`,
      [data.email, data.password]
    );
  }
}

module.exports = MarcheurManager;
