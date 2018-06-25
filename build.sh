#!/bin/bash
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <version>"
    exit 1
fi
rm -rf dist
ng build --prod --build-optimizer
cd dist
zip -r ../builds/dist_$1.zip *
cd ..
rm -rf dist