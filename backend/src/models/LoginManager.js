const AbstractManager = require("./AbstractManager");

class LoginManager extends AbstractManager {
  static table = "marcheurs";

  static login(data) {
    console.warn(`Can start the Manager`);
    return this.connection.query(
      `SELECT * FROM ${LoginManager.table} WHERE email = ? AND password = ?`,
      [data.email, data.password]
    );
  }
}

module.exports = LoginManager;
