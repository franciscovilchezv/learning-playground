export class User {
  static aaa = 3;

  init () {
    this.aaa = 4;
    // User.aaa = 5;
  }

  static returnA() {
    return this.aaa;
  }
}
