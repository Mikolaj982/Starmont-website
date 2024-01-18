#!/bin/sh
git filter-branch --force --index-filter "git rm -r --cached --ignore-unmatch .history" --prune-empty --tag-name-filter cat -- --all
