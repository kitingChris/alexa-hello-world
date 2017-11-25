@echo off

rm artifact.zip
7za a -tzip artifact.zip src\*

aws lambda update-function-code --function-name %1 --zip-file fileb://artifact.zip --profile hackathon
