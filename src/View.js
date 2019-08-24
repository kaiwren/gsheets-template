var View = function() {
  this.ui = SpreadsheetApp.getUi();
}

View.prototype = {
  renderMenu: function() {
    this.ui.createMenu('New Menu ' + App.version)
      .addItem('Action 1', 'actionOneMenuItem')
      .addItem('Action 2', 'actionTwoMenuItem')
      .addSeparator()
      .addItem('Delete Empty Rows', 'deleteEmptyRowsMenuItem')
      .addItem('Changelog', 'changelogMenuItem')
      .addToUi();
  }
}

function actionOneMenuItem() {
  new App.main();
  SpreadsheetApp.getUi().alert('Done!');
}

function actionTwoMenuItem() {
  SpreadsheetApp.getUi().alert('Done!');
}

function changelogMenuItem() {
  SpreadsheetApp.getUi().alert(JSON.stringify(CHANGELOG, null, 2));
}

function deleteEmptyRowsMenuItem() {
  var activeSheetName = SpreadsheetApp.getActiveSheet().getName();
  new Sheet(activeSheetName).deleteEmptyRows();
}

function onOpen() {
  new View().renderMenu();
}
