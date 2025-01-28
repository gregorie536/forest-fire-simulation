# Guide pour la mise en place d'un système de version

Ce document explique comment versionner un projet en utilisant **Git**

## Structure des versions

Nous utilisons le format de versionnement **MAJOR.MINOR.PATCH** (exemple : `1.2.3`), où :
- **MAJOR** : Changements incompatibles avec les versions précédentes.
- **MINOR** : Nouvelles fonctionnalités compatibles avec les versions précédentes.
- **PATCH** : Corrections de bugs ou petites améliorations.

## Étapes pour gérer le versionnement

### Ajouter un tag Git pour chaque version
Les **tags Git** permettent de marquer les versions dans l’historique Git.

### Créer un tag pour une nouvelle version
### Ajoute et commite tes changements :
   ```bash
   git add VERSION.md
   git commit -m "Mise à jour vers la version 1.0.0"
```

### Crée un tag Git annoté pour la version
   ```bash
git tag -a v1.0.0 -m "Version 1.0.0 : version initiale"
```
### Pousser les tags vers le dépôt distant
   ```bash
git push origin --tags
```
### Vérifier les tags existants
   ```bash
git tag
```
## Supprimer un tag en cas d'erreur
### Supprimer localement 
   ```bash
git tag -d v1.0.0
```


### Supprimer à distance
   ```bash
git push origin --delete v1.0.0
```

## Ressources supplémentaires
- [Documentation GitHub : Releases et Tags](https://docs.github.com/en/repositories/releasing-projects-on-github)
