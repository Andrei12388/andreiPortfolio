@echo off
REM Converts all MP4 videos in public/videos to WebM

SET inputFolder=gallery\
SET outputFolder=public\videos\webm

REM Create output folder if it doesn't exist
IF NOT EXIST "%outputFolder%" (
    mkdir "%outputFolder%"
)

REM Loop through all mp4 files
FOR %%F IN (%inputFolder%\*.mp4) DO (
    echo Converting %%F to WebM...
    ffmpeg -i "%%F" -c:v libvpx-vp9 -b:v 1M -c:a libopus "%outputFolder%\%%~nF.webm"
)

echo All conversions done!
pause