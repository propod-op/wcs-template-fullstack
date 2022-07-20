const AbstractManager = require("./AbstractManager");

class MarcheurManager extends AbstractManager {
  static table = "marcheurs";

  insert(marcheur) {
    return this.connection.query(
      `insert into ${MarcheurManager.table} (nom, prenom, adresse_rue, adresse_cp, adresse_ville, email, tel, femme) values (? , ? , ? , ?, ?, ?, ?, ? )`,
      [
        marcheur.nom,
        marcheur.prenom,
        marcheur.adresse_rue,
        marcheur.adresse_cp,
        marcheur.adresse_ville,
        marcheur.email,
        marcheur.tel,
        marcheur.femme,
      ]
    );
  }

  update(marcheur) {
    return this.connection.query(
      `update ${MarcheurManager.table} set nom = ?, prenom = ?, adresse_rue = ?, adresse_cp = ?, adresse_ville = ?, email = ?, tel = ?, femme = ? where id = ?`,
      [
        marcheur.nom,
        marcheur.prenom,
        marcheur.adresse_rue,
        marcheur.adresse_cp,
        marcheur.adresse_ville,
        marcheur.email,
        marcheur.tel,
        marcheur.femme,
        marcheur.id,
      ]
    );
  }
}

module.exports = MarcheurManager;
