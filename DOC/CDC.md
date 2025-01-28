# Cahier des charges - Projet Electron IPC

## 1. Contexte et objectifs
### Contexte
Le projet consiste à développer une application desktop multiplateforme à l'aide d'Electron. L'objectif est de tirer parti des fonctionnalités d'Electron, notamment la communication inter-processus (IPC), la manipulation de fichiers, et un menu personnalisé. Le projet sera distribué sous forme d'application installable pour une plateforme cible (Windows, macOS ou Linux).

### Objectifs
L'application a pour vocation d'illustrer le fonctionnement des communications IPC en Electron, tout en offrant une expérience utilisateur intuitive. Le système sera capable de :
- Manipuler des fichiers (lecture, écriture).
- Afficher une simulation en direct de la nature du terrain avec des mises à jour dynamiques.
- Fournir des options dans un menu personnalisé (aide, commentaires, mises à jour).
- Utiliser une architecture claire avec des scripts de preload.

---

## 2. Exigences et spécifications
### Exigences fonctionnelles
1. **Manipulation de fichiers :**
   - Sélection d'un fichier via une interface graphique.
   - Lecture du contenu du fichier sélectionné et affichage dans l'application.
   - Écriture/modification d’un fichier en fonction des interactions de l’utilisateur.

2. **Simulation de la nature du terrain :**
   - Modélisation visuelle en temps réel de la nature du terrain.
   - Options pour modifier les paramètres de simulation via l'interface utilisateur.
   - Sauvegarde et chargement des paramètres de simulation.

3. **Menu personnalisé :**
   - Ajout d'un menu personnalisé dans la barre des tâches avec les éléments :
     - **"À propos" :** Informations sur l'application et l'auteur.
     - **"Mise à jour" :** Instructions pour vérifier ou appliquer des mises à jour.
     - **"Aide" :** Section pour afficher des commentaires ou des guides.

4. **Communications interprocessus (IPC) :**
   - Communication entre le processus principal (`main`) et les processus d’affichage (`renderer`).
   - Transmission de données depuis le backend (simulation/lecture de fichiers) vers le frontend pour affichage.

5. **Architecture sécurisée :**
   - Utilisation d’un script preload pour limiter l'accès direct au `main process`.

---

### Exigences non fonctionnelles
1. **Compatibilité :**
   - L'application doit être testée et distribuée pour une plateforme cible (Windows, macOS ou Linux).

2. **Performances :**
   - Réactivité de l’interface utilisateur même avec des mises à jour fréquentes (ex. : simulation dynamique).

3. **Ergonomie :**
   - Interface simple et intuitive pour garantir une prise en main rapide.

---

## 3. Itérations et planning
| **Version** | **Fonctionnalités livrées**                          | **Date prévue** |
| ----------- | ---------------------------------------------------- | --------------- |
| **1.0.0**   | - Manipulation de fichiers (lecture/écriture).       | `Date 1`        |
|             | - Menu personnalisé (À propos, Aide).                |                 |
| **1.1.0**   | - Ajout de la simulation de terrain (base).          | `Date 2`        |
| **1.2.0**   | - Simulation dynamique (mises à jour en temps réel). | `Date 3`        |
| **2.0.0**   | - Optimisation des performances et stabilité.        | `Date 4`        |

---

## 4. Annexes
### 1. Liste des abréviations et conventions
- **IPC :** Inter-Process Communication (Communication interprocessus).
- **UI :** User Interface (Interface utilisateur).

### 2. Diagrammes UML et ressources
- **Diagramme de communication :**
  Représentation des échanges entre le processus principal (`main process`) et le processus d’affichage (`renderer process`).

```plaintext
[User] --> [Renderer Process] <--> [Main Process]

## 5. Lien vers les releases
Les livrables et les versions stables du projet sont disponibles ici :
[Releases du projet](https://github.com/gregorie536/forest-fire-simulation.git)
