#!/usr/bin/env bash
set -eu
hash vsce 2>/dev/null || { echo 'CRITICAL: missing "vsce"'; exit 1; }

vsce package
