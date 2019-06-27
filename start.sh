#!/bin/bash

set -e

"$(yarn bin)/tsc" --noEmit --watch &
"$(yarn bin)/parcel" -p 3000 ./client/index.html
