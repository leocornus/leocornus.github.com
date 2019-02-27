#!/bin/bash

echo 'Start to generate the index.html file for this folder...'

HTMLS=*.html
#HTMLS=find . -name '*.html'

#for file in `find . -name '*.html'`
#for file in '*.html'
for file in $HTMLS
do 
    echo $file
done

echo ' 
<html>
</html>
' > index.html
