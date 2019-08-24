# GSheets Project Template

This project serves as a template for GSheets AppScripts Projects for small data processing and analysis projects. [Source on Github](https://github.com/kaiwren/gsheets-template).

It includes some helpers, some wrappers, some libraries and some conventions to make life easier.

Once you clone this project, it should be readonly via git except for the `lib` submodule.  All your pushes will be via `clasp` to script.google.com and not `git` to github.com.

## SpreadSheet Conventions

* Segregate sheets in a spreadsheet into readonly and writeonly as far as possible 
  * Name readonly sheets with prefix "DB"
  * Name writeonly sheets with prefix "OP"

## Setup

* https://codelabs.developers.google.com/codelabs/clasp/#0
  * Install Nodejs
  * `npm i @google/clasp -g `
  * Update library
    * `git pull --recurse-submodules` or `git submodule update --remote --recursive`
    * `clasp login`
    * Create a Google Sheet
      * Create a corresponding AppsScript Project: `Tools` -> `Script Editor`
      * Get `scriptId` from Script Editor AppsScript Project: `File` -> `Project Properties` 
      * Create a dir to be the workspace for the gsheets codebase
      * Clone the AppsScript project to the local dir with `clasp clone <scriptId>`
    * Copy the contents of gsheets-template over to the dir
      * Ensure that the `.claspignore` file is also copied over
      * Use `clasp status` to verify that the files copeid from the template under `src/` and `lib/` are not being ignored
    
## Push from local to script.google.com

* Enable Apps Script API: https://script.google.com/home/usersettings
* Remember to update CHANGELOG.js as needed
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
