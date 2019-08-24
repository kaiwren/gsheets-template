function onOpen() {
  new View().renderMenu();
}

var View = function() {
  this.ui = SpreadsheetApp.getUi();
}

View.prototype = {
  renderMenu: function() {
    this.ui.createMenu('New Menu ' + App.version)
      .addItem('Action 1', 'View.actionOneMenuItem')
      .addItem('Action 2', 'View.actionTwoMenuItem')
      .addSeparator()
      .addItem('Changelog', 'View.changelogMenuItem')
      .addToUi();    
  }
}

View.actionOneMenuItem = function() {
  new App.main();
  SpreadsheetApp.getUi().alert('Done!');
}

View.actionTwoMenuItem = function() {
  SpreadsheetApp.getUi().alert('Done!');
}

View.changelogMenuItem = function() {
  SpreadsheetApp.getUi().alert(JSON.stringify(CHANGELOG, null, 2));
}
