#!/bin/env bash
#while [ true ]; do
i=1
while [ true ]; do
 sleep 1
 #ffmpeg -f avfoundation -framerate 15 -vsync 2 -pix_fmt uyvy422 -i "default" -s 640x480 -an -vframes 1 $(date +%Y-%m-%d-%H-%M-%S).jpg
 ffmpeg -y -f avfoundation -framerate 15 -vsync 2 -pix_fmt uyvy422 -i "default" -s 1920x1080 -an -vframes 1 $(date +%Y-%m-%d-%H-%M-%S).jpg
 find . -mmin +1 -type f -name "*.jpg" -exec rm -fv {} \;
 echo $(($i%60))
 if [ $(($i%60)) == 0 ]
 then
   i=1
   echo "compile"
   ffmpeg -y -framerate 15 -pattern_type glob -i '*.jpg' -c:v libx264 -r 30 -pix_fmt yuv422p temp.mp4
   cp temp.mp4 timelaps_last_min.mp4
 fi
 ((i+=1))
done
