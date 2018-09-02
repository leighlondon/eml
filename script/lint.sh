#!/usr/bin/env bash
set -eu
echo '--- linting source'
prettier --write 'src/**' 'syntaxes/*.tmLanguage.json' '*.js' 'package.json'
echo '--- linting scripts'
shellcheck script/*
