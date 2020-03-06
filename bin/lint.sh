#!/usr/bin/env bash
die() { echo "$1" >&2; exit 1; }
prettier --write 'src/**' 'syntaxes/*' '*.js' || die "cant prettier"
find bin -type f -name '*.sh' -exec shellcheck -x {} + || die "shellwrecked"
