# Change remote credentials
git config credential.${remote}.username <username>
git config credential.${remote}.password <password>

# Change local credentials
git config credential.username <username>
git config credential.password <password>

# Fork the workshop repository
https://github.com/bernardodesousa/odd-ball.git

# Clone your fork
git clone https://github.com/<username>/odd-ball.git

# Once you're satisfied with your contributions
git add <changed_file>
git commit -m "Descriptive message about what you did"
git push
git fetch upstream
git checkout master
git merge upstream/master
* then browse to your fork page and click the pull request button

# Configuring a remote for a fork
git remote -v
git remote add upstream https://github.com/bernardodesousa/odd-ball.git
git remote -v

# Sync a fork
## do it before making your PR to make sure it can be automatically merged
git fetch upstream
git checkout master
git merge upstream/master
