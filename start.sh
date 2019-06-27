#!/bin/bash

set -e

"$(yarn bin)/tsc" --noEmit --watch &
"$(yarn bin)/parcel" ./client/index.html
