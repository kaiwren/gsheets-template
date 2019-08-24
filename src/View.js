function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('New Menu ' + App.version)
    .addItem('Action 1', 'actionOneMenuItem')
    .addItem('Action 2', 'actionTwoMenuItem')
    .addSeparator()
    .addItem('Changelog', 'changelogMenuItem')  
    .addToUi();
}

function actionOneMenuItem() {
	new App().main();
  SpreadsheetApp.getUi().alert('Done!');
}

function actionTwoMenuItem() {
  SpreadsheetApp.getUi().alert('Done Two!');
}

function changelogMenuItem() {
  SpreadsheetApp.getUi()
     .alert(JSON.stringify(CHANGELOG, null, 2));
}
