[![view on npm](https://badgen.net/npm/v/renamer-case)](https://www.npmjs.org/package/renamer-case)
[![npm module downloads](https://badgen.net/npm/dt/renamer-case)](https://www.npmjs.org/package/renamer-case)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/75lb/renamer-case)](https://github.com/75lb/renamer-case/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/75lb/renamer-case)](https://github.com/75lb/renamer-case/network/dependents?dependent_type=PACKAGE)
[![Build Status](https://travis-ci.org/75lb/renamer-case.svg?branch=master)](https://travis-ci.org/75lb/renamer-case)
[![Coverage Status](https://coveralls.io/repos/github/75lb/renamer-case/badge.svg)](https://coveralls.io/github/75lb/renamer-case)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# renamer-case

[Renamer](https://github.com/75lb/renamer) replace chain plugin to set the case of one or more files or directories.

Possible values: `camel`, `kebab`, `lower`, `upper`, `snake` and `start`. It uses the [lodash](https://lodash.com/docs/4.17.10#camelCase) methods by the same name.

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

&copy; 2018-21 Lloyd Brookes <75pound@gmail.com>.
