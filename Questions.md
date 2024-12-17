# Q1 : Donner la tailles des fichiers générer par la commande.
Réponse:
Initial chunk files | Names         |  Raw size
polyfills.js        | polyfills     |  90.20 kB | 
main.js             | main          |  18.18 kB | 
styles.css          | styles        |  95 bytes | 

                    | Initial total | 108.48 kB

# Q2 : Donner la tailles des fichiers générer par la commande.
Réponse:
Initial chunk files   | Names         |  Raw size | Estimated transfer size
main-FT3QBEBB.js      | main          | 208.48 kB |                56.93 kB
polyfills-FFHMD2TL.js | polyfills     |  34.52 kB |                11.28 kB
styles-5INURTSO.css   | styles        |   0 bytes |                 0 bytes

                      | Initial total | 243.00 kB |                68.21 kB

# Q3 : Est-ce que le fichier est lisible ? Quel est l'intêret de minifier les fichiers d'un point de vue éco-responsable ? Pourquoi on ne minifie pas les fichiers générer en mode dev ?
Est-ce que le fichier est lisible ?
Non, le fichier est peu lisible lorsqu'il est minifié car les espaces, commentaires et sauts de ligne sont supprimés pour réduire sa taille.

Quel est l'intérêt de minifier les fichiers d'un point de vue éco-responsable ?
Minifier un fichier réduit sa taille, ce qui diminue les ressources nécessaires pour le télécharger et le charger. Cela permet de :

Réduire la consommation d'énergie liée au transfert de données.
Améliorer le temps de chargement des pages web, ce qui est bénéfique pour les utilisateurs et les serveurs.
Diminuer l'empreinte carbone globale, surtout si la taille des fichiers est significative à grande échelle.
Pourquoi on ne minifie pas les fichiers générés en mode dev ?
En mode développement (dev), les fichiers doivent rester lisibles pour faciliter la compréhension, le débogage et la maintenance du code. La minification rend l'analyse et les modifications plus difficiles pour les développeurs.

# Q4 : Donner la tailles des fichiers générer par la commande.
Réponse:
vite v6.0.3 building for production...
✓ 30 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/assets/index-DZl-RcEH.css    5.66 kB │ gzip:  1.40 kB
dist/assets/index-C_arIFqf.js   143.90 kB │ gzip: 46.34 kB
✓ built in 727ms

# Q5: Quel est l'intérêt du HMR ?
Réponse:
Le HMR (Hot Module Replacement) permet de voir rapidement les modifications apportées au code dans le navigateur sans recharger entièrement la page ni redémarrer le serveur web. Cela présente plusieurs avantages :

Gain de temps : Les changements sont appliqués instantanément, ce qui accélère le processus de développement.
Conservation de l'état : Lors du rechargement partiel, l'état de l'application (comme les formulaires ou variables en mémoire) reste intact, ce qui facilite le test des fonctionnalités dynamiques.
Expérience de développement fluide : Les développeurs peuvent travailler en temps réel et voir les résultats de leurs modifications immédiatement.

# Q6: Donner la tailles des fichiers générer par la commande. Pourquoi il faut être vigilant sur les libraires et autre composant qu'on ajoute dans nos applications d'un point de vue éco-responsable ?
Réponse:
✓ 31 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/assets/index-DZl-RcEH.css    5.66 kB │ gzip:  1.40 kB
dist/assets/index-03z4V8OH.js   156.75 kB │ gzip: 51.85 kB

# Q7: Noter les nom des différents fichiers qui ont été générés par la commande.
Réponse:
vite v6.0.3 building for production...
✓ 8 modules transformed.
dist/about/index.html           0.53 kB │ gzip: 0.32 kB
dist/index.html                 0.65 kB │ gzip: 0.37 kB
dist/assets/style-b4SyXn9O.css  2.18 kB │ gzip: 0.79 kB
dist/assets/about-D08RWGIN.js   0.15 kB │ gzip: 0.16 kB
dist/assets/style-Dgd37vtf.js   0.71 kB │ gzip: 0.40 kB
dist/assets/main-BdixoVug.js    3.20 kB │ gzip: 1.14 kB
✓ built in 120ms

# Q8 : Noter les nom des différents fichiers .js qui sont chargés au moment du chargement de la page.
Réponse:

main-BdixoVug.js
style-Dgd37vtf.js

# Q9 : Noter les nom des différents fichiers .js qui sont chargés au moment du changement de page.
Réponse:
about-D08RWGIN.js
style-Dgd37vtf.js

# Q10: Quel est l'intérêt de lu Code Splitting d'un point de vue éco-responsable ?
Réponse:

Le Code Splitting (fractionnement du code) consiste à diviser le code JavaScript en plusieurs fichiers plus petits qui sont chargés uniquement lorsque cela est nécessaire. Cela a plusieurs avantages d'un point de vue éco-responsable :

Réduction de la taille des fichiers chargés initialement :
Seul le code nécessaire pour afficher la page actuelle est téléchargé, ce qui diminue le transfert de données et réduit la consommation d'énergie associée.

Optimisation des ressources réseau :
Moins de données à transférer signifie moins de requêtes réseau et donc une réduction de l'empreinte carbone, surtout pour les utilisateurs ayant des connexions limitées ou des appareils moins performants.

Amélioration des performances :
En chargeant uniquement le nécessaire, les pages se chargent plus rapidement, ce qui améliore l'expérience utilisateur tout en limitant l'utilisation de CPU et d'énergie, à la fois côté client et serveur.

Impact positif à grande échelle :
Sur des sites avec un grand nombre d'utilisateurs, les économies réalisées en termes de bande passante et d'énergie deviennent significatives.

Conclusion : Le Code Splitting permet d'optimiser l'utilisation des ressources numériques, réduisant ainsi la consommation d'énergie et contribuant à une démarche plus éco-responsable dans le développement web.

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