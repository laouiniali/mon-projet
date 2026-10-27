# Script pour pousser le projet sur GitHub
# Auteur: Ali Laouini

Write-Host "=== Initialisation du dépôt Git ===" -ForegroundColor Cyan

# 1. Initialiser Git si ce n'est pas déjà fait
if (-not (Test-Path .git)) {
    git init
    Write-Host "✓ Dépôt Git initialisé" -ForegroundColor Green
} else {
    Write-Host "✓ Dépôt Git déjà initialisé" -ForegroundColor Yellow
}

# 2. Configurer l'utilisateur Git (si pas déjà fait)
git config user.name "Ali Laouini"
git config user.email "ali.laouini@esprit.tn"
Write-Host "✓ Configuration Git définie" -ForegroundColor Green

# 3. Ajouter tous les fichiers
git add .
Write-Host "✓ Fichiers ajoutés au staging" -ForegroundColor Green

# 4. Créer le commit
git commit -m "Initial commit: Angular Conference Management App with CRUD operations"
Write-Host "✓ Commit créé" -ForegroundColor Green

# 5. Ajouter le remote GitHub
$repoUrl = "https://github.com/laouiniali/mon-projet.git"
git remote remove origin 2>$null
git remote add origin $repoUrl
Write-Host "✓ Remote GitHub ajouté: $repoUrl" -ForegroundColor Green

# 6. Renommer la branche en 'main'
git branch -M main
Write-Host "✓ Branche renommée en 'main'" -ForegroundColor Green

# 7. Message pour le push
Write-Host ""
Write-Host "=== IMPORTANT ===" -ForegroundColor Yellow
Write-Host "Pour pousser vers GitHub, exécutez cette commande:" -ForegroundColor Cyan
Write-Host ""
Write-Host "git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "Windows vous demandera vos identifiants GitHub:" -ForegroundColor Yellow
Write-Host "  Username: ali.laouini@esprit.tn" -ForegroundColor White
Write-Host "  Password: Votre mot de passe GitHub" -ForegroundColor White
Write-Host ""
Write-Host "ASTUCE: Utilisez un Personal Access Token au lieu du mot de passe" -ForegroundColor Magenta
Write-Host "Créez-le ici: https://github.com/settings/tokens" -ForegroundColor Cyan
Write-Host ""
