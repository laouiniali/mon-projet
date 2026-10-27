# 🚀 POUSSER SUR GITHUB - GUIDE ULTRA-SIMPLE

## ✅ Tout est prêt! Suivez ces étapes:

### Étape 1: Ouvrir PowerShell
- Appuyez sur `Windows + X`
- Choisissez "Windows PowerShell" ou "Terminal"
- Tapez: `cd c:\mon-projet`
- Appuyez sur `Entrée`

### Étape 2: Copier-Coller ces commandes (UNE PAR UNE)

```powershell
# 1. Configurer Git (copier-coller cette ligne)
git config user.name "Ali Laouini"

# 2. Configurer l'email (copier-coller cette ligne)
git config user.email "ali.laouini@esprit.tn"

# 3. Ajouter les fichiers (copier-coller cette ligne)
git add .

# 4. Créer le commit (copier-coller cette ligne)
git commit -m "Initial commit: Angular Conference App with CRUD"

# 5. Ajouter GitHub (copier-coller cette ligne)
git remote add origin https://github.com/laouiniali/mon-projet.git

# 6. Renommer la branche (copier-coller cette ligne)
git branch -M main
```

### Étape 3: Créer le dépôt sur GitHub

**AVANT de faire le push, allez sur GitHub:**

1. Ouvrez votre navigateur
2. Allez sur: https://github.com/new
3. Remplissez:
   - **Repository name**: `mon-projet`
   - **Description**: `Angular Conference Management App - ESPRIT`
   - **Visibilité**: ☑️ Cochez **Public**
   - **Ne cochez RIEN d'autre** (pas de README, pas de .gitignore)
4. Cliquez sur "Create repository"

### Étape 4: Pousser le code

```powershell
# 7. Pousser vers GitHub (copier-coller cette ligne)
git push -u origin main
```

**Windows va vous demander de vous connecter à GitHub.**

### 🔐 Authentification GitHub (CHOIX 1 - RECOMMANDÉ)

**Si une fenêtre Windows s'ouvre:**
- Choisissez "Sign in with your browser"
- Connectez-vous avec votre compte GitHub
- Autorisez l'accès
- Terminé! ✅

### 🔐 Authentification GitHub (CHOIX 2 - Manuel)

**Si on vous demande username/password:**

1. **Username**: `laouiniali` (votre nom d'utilisateur GitHub, PAS l'email)
2. **Password**: **NE PAS UTILISER VOTRE MOT DE PASSE!**
   
   **Utilisez un TOKEN à la place:**
   - Allez sur: https://github.com/settings/tokens
   - Cliquez "Generate new token (classic)"
   - Nom: `Mon Projet Angular`
   - Cochez: ☑️ `repo` (toutes les sous-cases)
   - Durée: 90 jours
   - Cliquez "Generate token"
   - **COPIEZ LE TOKEN** (vous ne le reverrez jamais!)
   - Collez ce token comme "password"

---

## ✅ VÉRIFIER QUE ÇA A MARCHÉ

Allez sur: https://github.com/laouiniali/mon-projet

Vous devriez voir tous vos fichiers! 🎉

---

## 🔄 POUR METTRE À JOUR PLUS TARD

Quand vous modifiez des fichiers:

```powershell
git add .
git commit -m "Description de vos modifications"
git push
```

---

## ❌ EN CAS DE PROBLÈME

### Erreur: "repository already exists"
Le dépôt existe déjà sur GitHub. Pas de problème:
```powershell
git remote set-url origin https://github.com/laouiniali/mon-projet.git
git push -u origin main
```

### Erreur: "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/laouiniali/mon-projet.git
```

### Erreur: "authentication failed"
Vous utilisez probablement votre mot de passe au lieu d'un token.
→ Créez un token sur: https://github.com/settings/tokens

---

## 📞 AIDE SUPPLÉMENTAIRE

Si vous êtes bloqué:
1. Prenez une capture d'écran de l'erreur
2. Cherchez l'erreur sur Google
3. Ou demandez à un camarade/prof

**Bon courage! Vous allez y arriver! 💪**

---

*Projet créé par Ali Laouini - ESPRIT 2024*
