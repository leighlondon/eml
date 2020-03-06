#!/usr/bin/env bash
die() { echo "$1" >&2; exit "${2:-1}"; }
hash npm 2>/dev/null || die "missing npm"
npm run test || die "failed tests"
