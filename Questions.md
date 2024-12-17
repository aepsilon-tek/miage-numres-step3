# Q1 : Donner la tailles des fichiers générer par la commande.
Réponse: npm run start
Initial chunk files | Names         |  Raw size
polyfills.js        | polyfills     |  90.20 kB | 
main.js             | main          |  18.18 kB | 
styles.css          | styles        |  95 bytes | 

                    | Initial total | 108.48 kB

# Q2 : Donner la tailles des fichiers générer par la commande.
Réponse: npm run build
Initial chunk files   | Names         |  Raw size | Estimated transfer size
main-FT3QBEBB.js      | main          | 208.48 kB |                56.93 kB
polyfills-FFHMD2TL.js | polyfills     |  34.52 kB |                11.28 kB
styles-5INURTSO.css   | styles        |   0 bytes |                 0 bytes

                      | Initial total | 243.00 kB |                68.21 kB

# Q3 : Est-ce que le fichier est lisible ? Quel est l'intêret de minifier les fichiers d'un point de vue éco-responsable ? Pourquoi on ne minifie pas les fichiers générer en mode dev ?
Réponse: Le fichier n'est pas lisible. L'intérêt de minifier les fichiers d'un point de vue éco-responsable est de réduire la taille des fichiers et donc de réduire la consommation d'énergie (stockage, bandes passantes). On ne minifie pas les fichiers générés en mode dev pour faciliter le débogage et la compréhension du code.

# Q4 : Donner la tailles des fichiers générer par la commande.
Réponse: npm run build
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/assets/index-DZl-RcEH.css    5.66 kB │ gzip:  1.40 kB
dist/assets/index-C_arIFqf.js   143.90 kB │ gzip: 46.34 kB

# Q5: Quel est l'intérêt du HMR ?
Réponse: 
Le Hot Module Replacement (HMR) offre plusieurs avantages éco-responsables et de développement :
1. Conservation de l'état de l'application pendant le développement, évite les rechargements complets de la page, conserve les données et l'état de l'interface et permet de réduire la consommation de ressources serveur
2. Les modifications de code sont visibles immédiatement, pas besoin de rebuild complet de l'application et réduit le temps d'attente et la consommation d'énergie
3. De plus, seuls les modules modifiés sont mis à jour, ça économise de la bande passante et optimise l'utilisation des ressources système comme on peut le voir ci-dessous :
```bash
1:12:37 PM [vite] (client) hmr update /src/App.tsx
1:12:37 PM [vite] (client) ✨ new dependencies optimized: @smastrom/react-rating
1:12:37 PM [vite] (client) ✨ optimized dependencies changed. reloading
```
4. Et donc le cycle de développement plus rapide, moins de temps d'attente = moins de consommation énergétique et meilleure expérience de développement.

# Q6: Donner la tailles des fichiers générer par la commande. Pourquoi il faut être vigilant sur les libraires et autre composant qu'on ajoute dans nos applications d'un point de vue éco-responsable ?
Réponse: npm run build
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/assets/index-DZl-RcEH.css    5.66 kB │ gzip:  1.40 kB
dist/assets/index-03z4V8OH.js   156.75 kB │ gzip: 51.85 kB
Il faut être vigilant sur l'ajout de librairies car:
1. Chaque librairie augmente la taille du bundle final (ici +12.85 kB en gzip par rapport au build précédent)
2. Plus le bundle est gros, plus la consommation de bande passante est importante
3. L'augmentation du temps de chargement impacte la consommation d'énergie côté client
4. Certaines librairies peuvent avoir des dépendances qui alourdissent encore plus l'application
Il est recommandé de:
- N'ajouter que les librairies essentielles
- Préférer des alternatives plus légères quand c'est possible
- Utiliser le tree-shaking pour n'importer que les fonctionnalités nécessaires
- Évaluer l'impact de chaque nouvelle dépendance sur la taille du bundle

# Q7: Noter les nom des différents fichiers qui ont été générés par la commande.
Réponse:

# Q8 : Noter les nom des différents fichiers .js qui sont chargés au moment du chargement de la page.
Réponse:

# Q9 : Noter les nom des différents fichiers .js qui sont chargés au moment du changement de page.
Réponse:


# Q10: Quel est l'intérêt de lu Code Splitting d'un point de vue éco-responsable ?
Réponse:


# Q11: Ajouter le screen de votre score :
Screen:


# Q12:  Proposition 1
Description:
Nb de requête total du parcours de l'utilisateur:
Taille total des requêtes du parcours de l'utilisateur:
Taille total des fichiers généré :

# Q13:  Proposition 2
Description:
Nb de requête total du parcours de l'utilisateur:
Taille total des requêtes du parcours de l'utilisateur:
Taille total des fichiers généré :

# Q14:  Proposition 3
Description:
Nb de requête total du parcours de l'utilisateur:
Taille total des requêtes du parcours de l'utilisateur:
Taille total des fichiers générés :