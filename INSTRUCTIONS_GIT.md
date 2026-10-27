# Instructions pour pousser sur GitHub

## Étape 1: Initialiser Git

Ouvrez PowerShell dans le dossier `c:\mon-projet` et exécutez ces commandes une par une:

```powershell
# Initialiser Git
git init

# Configurer votre identité
git config user.name "Ali Laouini"
git config user.email "ali.laouini@esprit.tn"

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit: Angular Conference Management App"

# Créer le dépôt sur GitHub (si pas déjà fait)
# Allez sur https://github.com/new
# Nom du repository: mon-projet
# Description: Angular Conference Management App - ESPRIT
# Cochez "Public" pour le rendre accessible à tous

# Ajouter le remote GitHub
git remote add origin https://github.com/laouiniali/mon-projet.git

# Renommer la branche en main
git branch -M main

# Pousser vers GitHub
git push -u origin main
```

## Étape 2: Authentification GitHub

Quand vous exécutez `git push`, Windows vous demandera de vous authentifier.

**OPTION 1: Utiliser GitHub Desktop (RECOMMANDÉ)**
- Téléchargez GitHub Desktop: https://desktop.github.com/
- Connectez-vous avec votre compte
- Ajoutez le dépôt local
- Publiez sur GitHub

**OPTION 2: Utiliser un Personal Access Token**
1. Allez sur: https://github.com/settings/tokens
2. Cliquez "Generate new token (classic)"
3. Cochez "repo" (full control of private repositories)
4. Générez et copiez le token
5. Lors du push, utilisez:
   - Username: `ali.laouini@esprit.tn`
   - Password: `COLLEZ_VOTRE_TOKEN_ICI` (pas votre mot de passe!)

**OPTION 3: Configurer Git Credential Manager**
```powershell
git config --global credential.helper wincred
```
Ensuite lors du push:
- Username: `ali.laouini@esprit.tn`
- Password: Votre mot de passe GitHub

## Étape 3: Rendre le dépôt public

1. Allez sur: https://github.com/laouiniali/mon-projet
2. Cliquez sur "Settings" (en haut à droite)
3. Descendez jusqu'à "Danger Zone"
4. Cliquez sur "Change visibility"
5. Sélectionnez "Make public"
6. Confirmez

## Commandes Git utiles

```powershell
# Voir le statut
git status

# Voir les commits
git log --oneline

# Ajouter des modifications
git add .
git commit -m "Message de commit"
git push

# Créer une nouvelle branche
git checkout -b nom-de-branche
```

---

**IMPORTANT**: Ne partagez JAMAIS votre mot de passe dans le code ou sur GitHub!
Utilisez toujours des tokens d'accès pour l'authentification.
