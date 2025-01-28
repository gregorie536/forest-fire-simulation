# Documentation d'installation et d'utilisation

## 1. Prérequis
Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :
- **Node.js** (version 16 ou supérieure) : [Télécharger ici](https://nodejs.org/)
- **npm** (inclus avec Node.js)

---

## 2. Installation en mode développement
Pour configurer et lancer le projet en mode développement :

1. Clonez le dépôt Git :
   `git clone https://github.com/ton-utilisateur/electron-ipc.git`
   `cd electron-ipc`

2. Installez les dépendances :
   `npm install`

3. Lancez l'application en mode développement :
   `npm start`

---

## 3. Créer une version installable
Pour générer une version installable de l’application sur votre plateforme cible :

1. Installez un outil de packaging (par exemple, `electron-packager`) si ce n’est pas déjà fait :
   `npm install electron-packager --save-dev`

2. Générez un livrable pour votre plateforme cible :
   `npx electron-packager . electron-ipc --platform=win32 --arch=x64 --out=dist`

   - Remplacez `--platform=win32` par `--platform=darwin` pour macOS ou `--platform=linux` pour Linux.
   - Le fichier généré se trouvera dans le dossier `dist/`.

3. Exécutez l'application générée :
   - **Sous Windows :** Double-cliquez sur le fichier `.exe`.
   - **Sous macOS :** Ouvrez l'application dans le Finder.
   - **Sous Linux :** Lancez le fichier binaire généré.

---

## 4. Téléchargement des versions packagées
Si vous souhaitez uniquement télécharger et installer une version stable de l’application :

1. Rendez-vous sur la page des [releases](https://github.com/ton-utilisateur/electron-ipc/releases) de ce dépôt.
2. Téléchargez le fichier correspondant à votre système d’exploitation.
3. Installez et exécutez l'application.

---

## 5. Lancer les tests (optionnel)
Si des tests unitaires sont inclus :

1. Exécutez les tests via la commande suivante :
   `npm test`

---

## 6. Dépendances principales
- [Electron](https://www.electronjs.org/)
- [Node.js](https://nodejs.org/)

---

## 7. Ressources supplémentaires
- Documentation Electron : [https://www.electronjs.org/docs](https://www.electronjs.org/docs)
- Développement avec Node.js : [https://nodejs.org/](https://nodejs.org/)
