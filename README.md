# GSheets Project Template

This project serves as a template for GSheets AppScripts Projects for small data processing and analysis projects. [Source on Github](https://github.com/kaiwren/gsheets-template).

## Setup

* https://codelabs.developers.google.com/codelabs/clasp/#0
	* Install Nodejs
	* `npm i @google/clasp -g `
	* `clasp login`
	* Create a Google Sheet
		* Create a corresponding AppsScript Project: `Tools` -> `Script Editor`
		* Get `scriptId` from Script Editor AppsScript Project: `File` -> `Project Properties`
	* Clone the AppsScript project to the local environment `clasp clone <scriptId>`
	* Add library
		* `git submodule add https://github.com/kaiwren/gsheets-lib.git lib`
		
## Push from local to script.google.com

* Enable Apps Script API: https://script.google.com/home/usersettings
* `clasp status`
* `clasp push`

## Local vs script.google.com

* Local folder structures are converted to flat stuctures on `clasp push`.
* Local `.js` files become `.gs` on `clasp push`

```
# On script.google.com:
├── tests/slides.gs
└── tests/sheets.gs

# Locally:
├── tests/
│   ├─ slides.js
│   └─ sheets.js
```
