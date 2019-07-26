#!/bin/sh

cp .env server/.env
rvm in server do bundle exec rails s -p 3001
