[![view on npm](https://badgen.net/npm/v/renamer-case)](https://www.npmjs.org/package/renamer-case)
[![npm module downloads](https://badgen.net/npm/dt/renamer-case)](https://www.npmjs.org/package/renamer-case)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/75lb/renamer-case)](https://github.com/75lb/renamer-case/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/75lb/renamer-case)](https://github.com/75lb/renamer-case/network/dependents?dependent_type=PACKAGE)
[![Build Status](https://travis-ci.org/75lb/renamer-case.svg?branch=master)](https://travis-ci.org/75lb/renamer-case)
[![Coverage Status](https://coveralls.io/repos/github/75lb/renamer-case/badge.svg)](https://coveralls.io/github/75lb/renamer-case)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# renamer-case

[Renamer](https://github.com/75lb/renamer) replace chain plugin to set the case of one or more files and/or directories. See [this tutorial](https://github.com/75lb/renamer/wiki/How-to-use-replace-chain-plugins) to learn how to use renamer plugins.

Possible values: `camel`, `kebab`, `lower`, `upper`, `snake` and `start`. It uses the [lodash](https://lodash.com/docs/4.17.10#camelCase) methods by the same name.

### Install

```
$ npm install -g renamer renamer-case
```

### Use

Example usage. Remove the `--dry-run` option to rename the files on disk.

```
$ tree -N
.
├── One one
└── One two

0 directories, 2 files

$ renamer --chain renamer-case --case camel --dry-run * 

✔︎ one one → oneOne
✔︎ one two → oneTwo

Rename complete: 1 of 1 files renamed.

$ tree -N
.
├── oneOne
└── oneTwo

0 directories, 2 files
```

* * *

&copy; 2018-21 Lloyd Brookes <75pound@gmail.com>.
