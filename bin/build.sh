#!/usr/bin/env bash
die() { echo "$1" >&2; exit "${2:-1}"; }
hash vsce 2>/dev/null || die "missing vsce"
vsce package || die "cant package"
