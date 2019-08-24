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
