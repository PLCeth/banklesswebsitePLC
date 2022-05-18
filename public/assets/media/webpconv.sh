#!/bin/bash
FILES="./*"
for f in $FILES; do
    outputFile=$(echo "$f" | sed "s/\.png/\.webp/g")
    cwebp $f -o $outputFile
    echo "Processing $outputFile file.."; 
done