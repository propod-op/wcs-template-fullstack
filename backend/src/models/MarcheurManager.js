const AbstractManager = require("./AbstractManager");

class MarcheurManager extends AbstractManager {
  static table = "marcheurs";

  insert(marcheur) {
    return this.connection.query(
      `insert into ${MarcheurManager.table} (title) values (?)`,
      [marcheur.title]
    );
  }

  update(marcheur) {
    return this.connection.query(
      `update ${MarcheurManager.table} set title = ? where id = ?`,
      [marcheur.nom, marcheur.id]
    );
  }
}

module.exports = MarcheurManager;
