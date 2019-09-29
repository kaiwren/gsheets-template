# GSheets AppScript Project Template

[Source on Github](https://github.com/kaiwren/gsheets-template)

This project serves as a convention driven template for GSheets AppScripts Projects for small data processing and analysis projects.

I've been using this to make my life easier when working on administrative tasks, especially those which you don't want to expose the data in the sheet to unknown addons (compensation, performance review analysis etc.)

It includes some tools, some helpers, some wrappers, some libraries and some conventions to make life easier.

To use this, fork this project and use it as a starting point. Note that the `lib` submodule which contains wrappers/libs is maintained in [this project](https://github.com/kaiwren/gsheets-lib).

## Spreadsheet Conventions

* Segregate sheets in a spreadsheet into readonly and writeonly as far as possible 
  * Name readonly sheets with prefix "DB"
  * Name writeonly sheets with prefix "OP"

## Dev Setup

AppScript projects use [Clasp](https://codelabs.developers.google.com/codelabs/clasp/#0) to manage push/pull/deploy to script.google.com

I advise versioning the codebase both via `git` and script.google.com (through `clasp`) because `git` version control is far easier to use. 

To get started with setup:

* Install Nodejs and create blank project
  * `npm i @google/clasp -g`
  * Create your new project dir `your-project`
    * Initialize a new git repo
    * Copy over the following files and dirs
    ```
    |
    - src
    |  |
    |  - App.js
    |  - View.js
    - .claspignore
    - .gitignore
    - CHANGELOG.js
    - README.md
  ```
    
* Update gsheets-lib library and link to a Google sheet
  * `git pull --recurse-submodules` or `git submodule update --remote --recursive`
  * `clasp login`
  * Create a Google Sheet
    * Create a corresponding AppsScript Project: `Tools` -> `Script Editor`
    * Get `scriptId` from Script Editor AppsScript Project: `File` -> `Project Properties` 
    * Clone the AppsScript project to `your-project` with `clasp clone <scriptId>`
```
Cloned 2 files.
└─ Code.js
└─ appsscript.json
```        

* Push to AppScripts
  * Change README.md to explain what you're doing
  * Delete the boilerplate file `Code.js` created by `clasp clone` ( but retain `appscript.json`!)
  * Use `clasp status` to verify that the files copied from the template under `src/` and `lib/` are not being ignored
  * To push from local to script.google.com
    * Enable Apps Script API: https://script.google.com/home/usersettings
    * Remember to update CHANGELOG.js as needed
    * `clasp status` to see which files will be pushed
    * `clasp push`
    * Refresh the Google Sheet in your browser - you should see an additional menu option: `New Menu 0.0.1`
```
└─ CHANGELOG.js
└─ appsscript.json
└─ lib/Logger.js
└─ lib/Sheet.js
└─ src/App.js
└─ src/View.js
```

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
