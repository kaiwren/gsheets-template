# Structure

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