@echo off
setlocal
set "CATALOG_DIR=%~dp0deliverables\whimsy_context_catalog"
start "Whimsy Catalog Server" /min python -m http.server 8765 --bind 127.0.0.1 --directory "%CATALOG_DIR%"
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:8765/index.html"
endlocal
