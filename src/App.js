var App = function() {
  L.level = L.levels.log;
  this.databaseSheet = new Sheet("DB:Foo");
  this.outputSheet = new Sheet("OP:Bar");
}

App.version = "0.0.1";

App.prototype = {
  main: function() {
    var self = this;
    L.d("___ Starting main() ___");
  }
}

/* 
 * Convenience function to support Cmd + R
 * for easy debugging in the AppScript Online Editor
*/
function main() {
  new App().main();
}
