# Q1 : Donner la tailles des fichiers générer par la commande.
Réponse:
- polyfills.js :	90.20 kB
- main.js :	18.18 kB
- styles.css :	95 bytes
Total des fichiers initiaux : 108.48 kB.

# Q2 : Donner la tailles des fichiers générer par la commande.
Réponse:
- main-FT3QBEBB.js : taille brute =>	208.48 kB , taille estimée de transfert =>	56.93 kB
- polyfills-FFHMD2TL.js	: taille brute => 34.52 kB, taille estimée de transfert =>	11.28 kB
- styles-5INURTSO.css	: taille brute => 0 bytes, taille estimée de transfert =>	0 bytes
Total des fichiers initiaux : 243.00 kB (taille brute) et 68.21 kB (taille estimée de transfert).

# Q3 : Est-ce que le fichier est lisible ? Quel est l'intêret de minifier les fichiers d'un point de vue éco-responsable ? Pourquoi on ne minifie pas les fichiers générer en mode dev ?
Réponse:
Non, le fichier n'est pas lisible par un humain. Le code est compressé sur une seule ligne, sans indentation ni commentaires. Cela rend sa compréhension extrêmement difficile, voire impossible sans outils d'analyse.
Les intérêts de minifier les fichiers d'un point de vue éco-responsable sont : 
   - Réduction de la taille des fichiers : La minification permet de supprimer les espaces inutiles, les retours à la ligne et d'abréger les noms de variables. Cela réduit considérablement la taille des fichiers à transférer.
   - Diminution de la bande passante : Moins de données sont envoyées sur le réseau, ce qui réduit la consommation d'énergie nécessaire au transfert.
   - Performance améliorée : Le chargement plus rapide des pages réduit l'utilisation des serveurs et des appareils des utilisateurs.
   - Impact environnemental : Moins de requêtes et une meilleure performance impliquent une consommation énergétique moindre, ce qui est bénéfique pour l'environnement.
On ne minifie pas les fichiers en mode développement pour les raisons suivantes : 
   - Lisibilité : En mode développement, les développeurs ont besoin de lire, comprendre et déboguer le code. La minification complique ces tâches.
   - Debugging facilité : Les outils de développement (comme les sources maps) sont plus simples à utiliser avec un code non minifié.
   - Temps de build : Minifier les fichiers prend du temps supplémentaire. En mode dev, l'objectif est d'avoir un cycle rapide entre les modifications et les tests.

# Q4 : Donner la tailles des fichiers générer par la commande.
Réponse:
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/assets/index-DZl-RcEH.css    5.66 kB │ gzip:  1.40 kB
dist/assets/index-C_arIFqf.js   143.90 kB │ gzip: 46.34 kB

# Q5: Quel est l'intérêt du HMR ?
Réponse:
permet de mettre à jour les modules JavaScript sans recharger complètement la page lors du développement

# Q6: Donner la tailles des fichiers générer par la commande. Pourquoi il faut être vigilant sur les libraires et autre composant qu'on ajoute dans nos applications d'un point de vue éco-responsable ?
Réponse:
Initial chunk files   | Names         |  Raw size | Estimated transfer size
main-FT3QBEBB.js      | main          | 208.48 kB |                56.93 kB
polyfills-FFHMD2TL.js | polyfills     |  34.52 kB |                11.28 kB
styles-5INURTSO.css   | styles        |   0 bytes |                 0 bytes
                      | Initial total | 243.00 kB |                68.21 kB
                      
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