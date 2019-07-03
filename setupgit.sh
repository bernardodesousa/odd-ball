#!/bin/bash
# Configure Git to work with the student's GitHub account
# at the #FatecSAT2019 NodeJS & WebSockets workshop.
# -------------------------------------------------------
# Usage:
# $ ./setupgit.sh <myGitHubUserName> <my@github.email>
# -------------------------------------------------------

echo "Setting up Git to work for GitHub user $1, who's email is $2"
git remote rename origin upstream
git remote add origin https://github.com/$1/odd-ball.git
git config --global user.email "$2"
git config --global user.name "$1"
