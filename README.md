# 📅 Angular Conference Management App

Application de gestion de conférences développée avec **Angular 18** et **Signals**.

## 🎓 Projet ESPRIT
- **Auteur**: Ali Laouini
- **Email**: ali.laouini@esprit.tn
- **Formation**: Développement Web avec Angular

## 🚀 Fonctionnalités

### ✅ CRUD Complet
- **Create**: Ajouter une nouvelle conférence via formulaire
- **Read**: Afficher la liste des conférences
- **Update**: Modifier une conférence directement dans la liste (inline editing)
- **Delete**: Supprimer une conférence

### 🎯 Fonctionnalités Avancées
- ✨ **Reactive Forms** avec validation
- 🔄 **Signals Angular** (toSignal, computed, effect)
- 📡 **HTTP Client** pour les appels API REST
- 🎨 **Pipes** (UpperCase, Date)
- 🔀 **Routing** avec paramètres dynamiques
- 📝 **Formulaire inline** dans la liste des conférences
- 🎯 **Injection de dépendances** avec `inject()`

## 🛠️ Technologies

- **Angular**: 18.x (standalone components)
- **TypeScript**: 5.x
- **RxJS**: Observables et Signals
- **JSON Server**: Backend mock pour l'API REST
- **Bootstrap/CSS**: Styling

## 📦 Installation

```bash
# 1. Cloner le projet
git clone https://github.com/laouiniali/mon-projet.git
cd mon-projet

# 2. Installer les dépendances
npm install

# 3. Démarrer le backend (JSON Server)
npm run json-server
# Le backend sera accessible sur http://localhost:3000

# 4. Démarrer l'application Angular (dans un autre terminal)
npm start
# L'application sera accessible sur http://localhost:4200
```

## 📁 Structure du Projet

```
src/app/
├── components/
│   ├── conference-list/      # Liste des conférences avec UPDATE inline
│   ├── conf-details/          # Détails d'une conférence
│   ├── home/                  # Page d'accueil
│   └── ...
├── componentsForms/
│   └── conference-form/       # Formulaire CREATE/UPDATE
├── services/
│   └── conference-service.ts  # Service HTTP pour CRUD
├── models/
│   └── conference.ts          # Interface Conference
└── admin/                     # Zone admin
```

## 🎓 Concepts Angular Appris (21h de formation)

### 1. **Components**
- Standalone components
- Input/Output
- Lifecycle hooks (OnInit)

### 2. **Forms**
- Reactive Forms avec FormBuilder
- Validators (required, minLength)
- Form validation

### 3. **Services**
- Injection de dépendances
- HTTP Client
- Observable et Subscribe

### 4. **Routing**
- Routes avec paramètres `:id`
- RouterLink
- Navigation programmatique

### 5. **Signals (Nouveau Angular)**
- `signal()` - Créer un signal
- `computed()` - Signal calculé
- `effect()` - Effets secondaires
- `toSignal()` - Convertir Observable en Signal

## 🔧 API Endpoints (JSON Server)

```
GET    /conferences       # Liste toutes les conférences
GET    /conferences/:id   # Détails d'une conférence
POST   /conferences       # Créer une conférence
PUT    /conferences/:id   # Modifier une conférence
DELETE /conferences/:id   # Supprimer une conférence
```

## 📝 Exemple d'utilisation

### Ajouter une conférence
1. Cliquez sur "➕ Ajouter une conférence"
2. Remplissez le formulaire
3. Cliquez sur "Ajouter"

### Modifier une conférence (inline)
1. Dans la liste, cliquez sur "✏️ Modifier"
2. Le formulaire s'affiche directement dans la carte
3. Modifiez les champs
4. Cliquez sur "✅ Sauvegarder" ou "❌ Annuler"

## 🎨 Screenshots

_TODO: Ajouter des captures d'écran_

## 📚 Ressources

- [Documentation Angular](https://angular.dev)
- [Angular Signals](https://angular.dev/guide/signals)
- [Reactive Forms](https://angular.dev/guide/forms/reactive-forms)

## 📄 Licence

Ce projet est à usage éducatif dans le cadre de la formation ESPRIT.

---

**Développé avec ❤️ par Ali Laouini - ESPRIT 2026**
