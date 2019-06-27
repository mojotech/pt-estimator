# PT Estimator

## Resources

[Pivotal Tracker Project](https://www.pivotaltracker.com/n/projects/2354450)

[Design Doc](https://paper.dropbox.com/doc/PT-Estimator--AfCObrQ6NOkdv113xWrh3oGNAQ-5uQ31HqitmrW9Fsp4b0ue)

[Original Designs](https://projects.invisionapp.com/share/GVSGGEN528N#/screens/220994025)

## Dev Env Init

1. yarn install
2. cd server
3. rvm install 2.6.3
4. gem install bundler
4. bundle install
4. brew services list (check postgres status)
5. brew services start postgres (if pg is stopped)
6. rake db:create
7. cd ..
8. yarn run develop
