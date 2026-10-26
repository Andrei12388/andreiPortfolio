
@echo off
setlocal

REM Always run relative to this .bat file
cd /d "%~dp0"

REM Input and output folders
set "inputFolder=gallery"
set "outputFolder=public\videos\webm"

REM Check if FFmpeg is installed
where ffmpeg >nul 2>&1
if errorlevel 1 (
    echo ERROR: FFmpeg is not installed or not in PATH.
    echo Install it, then reopen your terminal.
    pause
    exit /b 1
)

REM Check input folder
if not exist "%inputFolder%\" (
    echo ERROR: Input folder "%inputFolder%" was not found.
    pause
    exit /b 1
)

REM Create output folder
if not exist "%outputFolder%\" mkdir "%outputFolder%"

REM Convert all MP4 files
set "found=0"

for %%F in ("%inputFolder%\*.mp4") do (
    if exist "%%~fF" (
        set "found=1"
        echo Converting: %%~nxF

        ffmpeg -n -i "%%~fF" -c:v libvpx-vp9 -b:v 1M -c:a libopus "%outputFolder%\%%~nF.webm"

        if errorlevel 1 echo WARNING: Failed to convert %%~nxF
    )
)

if "%found%"=="0" echo No MP4 files found in "%inputFolder%".

echo.
echo Conversion process finished.
pause
