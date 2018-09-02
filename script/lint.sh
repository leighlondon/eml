#!/usr/bin/env bash
set -eu
prettier --write 'src/**' 'syntaxes/*.tmLanguage.json' '*.js' 'package.json'
