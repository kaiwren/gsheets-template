# GSheets AppScript Project Template

[Source on Github](https://github.com/kaiwren/gsheets-template)

This project serves as a convention driven template for GSheets AppScripts Projects for small data processing and analysis projects.

I've been using this to make my life easier when working on administrative tasks, especially those which you don't want to expose the data in the sheet to unknown addons (compensation, performance review analysis etc.)

It includes some tools, some helpers, some wrappers, some libraries and some conventions to make life easier.

Once you clone this project, it should be readonly via git except for the `lib` submodule which is maintained in [this project](https://github.com/kaiwren/gsheets-lib).  All your pushes will be via `clasp` to script.google.com and not `git` to github.com.

## Spreadsheet Conventions

* Segregate sheets in a spreadsheet into readonly and writeonly as far as possible 
  * Name readonly sheets with prefix "DB"
  * Name writeonly sheets with prefix "OP"

## Dev Setup

* AppScript projects use [Clasp](https://codelabs.developers.google.com/codelabs/clasp/#0) to manage push/pull/deploy
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
      * Use `clasp status` to verify that the files copied from the template under `src/` and `lib/` are not being ignored
      * To push from local to script.google.com
        * Enable Apps Script API: https://script.google.com/home/usersettings
        * Remember to update CHANGELOG.js as needed
        * `clasp status` to see which files will be pushed
        * `clasp push`
      * Local folder structures are converted to flat stuctures on `clasp push`.
      * Local `.js` files become `.gs` on `clasp push`

```
# On script.google.com:
├── tests/slides.gs
└── tests/sheets.gs

# Locally:
├── tests/
    ├─ slides.js
    └─ sheets.js
```
