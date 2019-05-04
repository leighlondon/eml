#!/usr/bin/env bash
set -eu
echo '--- linting source'
prettier --write 'src/**' 'syntaxes/*.tmLanguage.json' '*.js'
echo '--- linting scripts'
shellcheck script/*
