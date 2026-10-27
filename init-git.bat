@echo off
echo ========================================
echo  Initialisation Git pour le projet
echo ========================================
echo.

REM Initialiser Git
git init
echo [OK] Git initialise

REM Configuration
git config user.name "Ali Laouini"
git config user.email "ali.laouini@esprit.tn"
echo [OK] Configuration Git definie

REM Ajouter les fichiers
git add .
echo [OK] Fichiers ajoutes

REM Commit
git commit -m "Initial commit: Angular Conference Management App with CRUD"
echo [OK] Commit cree

REM Ajouter le remote
git remote add origin https://github.com/laouiniali/mon-projet.git
echo [OK] Remote GitHub ajoute

REM Renommer la branche
git branch -M main
echo [OK] Branche renommee en main

echo.
echo ========================================
echo  Initialisation terminee!
echo ========================================
echo.
echo Pour pousser sur GitHub, executez:
echo git push -u origin main
echo.
echo Windows vous demandera vos identifiants GitHub
echo.
pause
