[![view on npm](https://img.shields.io/npm/v/renamer-case.svg)](https://www.npmjs.org/package/renamer-case)
[![npm module downloads](https://img.shields.io/npm/dt/renamer-case.svg)](https://www.npmjs.org/package/renamer-case)
[![Build Status](https://travis-ci.org/75lb/renamer-case.svg?branch=master)](https://travis-ci.org/75lb/renamer-case)
[![Dependency Status](https://david-dm.org/75lb/renamer-case.svg)](https://david-dm.org/75lb/renamer-case)
[![Coverage Status](https://coveralls.io/repos/github/75lb/renamer-case/badge.svg)](https://coveralls.io/github/75lb/renamer-case)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# renamer-case

[Renamer](https://github.com/75lb/renamer) plugin to set the case of a filename.

### Install

```
$ npm install -g renamer renamer-case
```

### Use

```

$ tree -N
.
├── One one
└── One two

0 directories, 2 files

$ renamer -p case --case camel *
✔︎ One one → oneOne
✔︎ One two → oneTwo

$ tree -N
.
├── oneOne
└── oneTwo

0 directories, 2 files
```

* * *

&copy; 2018 Lloyd Brookes <75pound@gmail.com>.