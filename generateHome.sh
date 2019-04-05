#!/bin/bash

echo 'Start to generate the index.html file for this folder...'

echo ' 
<!DOCTYPE html>
<html><body>
<ul>' > home.html 

#HTMLS=**/*/*.html
HTMLS=`find . -name '*.html'`

#for file in `find . -name '*.html'`
#for file in '*.html'
for file in $HTMLS
do 
    echo "<li><a href='$file'>$file</a></li>" >> home.html
done

echo '
</ul>
</body></html>' >> home.html

echo "<!-- Generated on $(date) -->" >> home.html 

echo 'File generated!'
echo '============'
cat home.html 
