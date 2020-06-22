checklist-cli
=============



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/checklist-cli.svg)](https://npmjs.org/package/checklist-cli)
[![Downloads/week](https://img.shields.io/npm/dw/checklist-cli.svg)](https://npmjs.org/package/checklist-cli)
[![License](https://img.shields.io/npm/l/checklist-cli.svg)](https://github.com/KerrickC/checklist-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g checklist-cli
$ checklist-cli COMMAND
running command...
$ checklist-cli (-v|--version|version)
checklist-cli/0.0.0 linux-x64 node-v10.21.0
$ checklist-cli --help [COMMAND]
USAGE
  $ checklist-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`checklist-cli add ADDTODO`](#checklist-cli-add-addtodo)
* [`checklist-cli complete`](#checklist-cli-complete)
* [`checklist-cli edit`](#checklist-cli-edit)
* [`checklist-cli help [COMMAND]`](#checklist-cli-help-command)
* [`checklist-cli show`](#checklist-cli-show)

## `checklist-cli add ADDTODO`

```
USAGE
  $ checklist-cli add ADDTODO

ARGUMENTS
  ADDTODO  add todo to list

OPTIONS
  -p, --priority=priority  (required) [default: low] Todo priority level - (urgent, important, normal, low)
```

_See code: [src/commands/add.js](https://github.com/KerrickC/checklist-cli/blob/v0.0.0/src/commands/add.js)_

## `checklist-cli complete`

Describe the command here

```
USAGE
  $ checklist-cli complete

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/complete.js](https://github.com/KerrickC/checklist-cli/blob/v0.0.0/src/commands/complete.js)_

## `checklist-cli edit`

Describe the command here

```
USAGE
  $ checklist-cli edit

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/edit.js](https://github.com/KerrickC/checklist-cli/blob/v0.0.0/src/commands/edit.js)_

## `checklist-cli help [COMMAND]`

display help for checklist-cli

```
USAGE
  $ checklist-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_

## `checklist-cli show`

Describe the command here

```
USAGE
  $ checklist-cli show

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/show.js](https://github.com/KerrickC/checklist-cli/blob/v0.0.0/src/commands/show.js)_
<!-- commandsstop -->
