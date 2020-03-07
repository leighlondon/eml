#!/usr/bin/env bash
die() { echo "$1" >&2; exit 1; }
hash prettier   2>/dev/null || die "missing: prettier"
hash shellcheck 2>/dev/null || die "missing: shellcheck"

prettier --write 'syntax/*' '*.js' '*.json' || die "cant prettier"
find bin -type f -name '*.sh' -exec shellcheck -x {} + || die "shellwrecked"
