# Q1 : Donner la tailles des fichiers générer par la commande.
Réponse: 108.48 kB

# Q2 : Donner la tailles des fichiers générer par la commande.
Réponse: 243.00 kB

# Q3 : Est-ce que le fichier est lisible ? Quel est l'intêret de minifier les fichiers d'un point de vue éco-responsable ? Pourquoi on ne minifie pas les fichiers générer en mode dev ?
Réponse: Non. La minification des fichiers réduit leur taille, ce qui accélère le chargement, diminue la consommation de bande passante et réduit l'énergie utilisée par les serveurs et appareils, contribuant ainsi à une empreinte carbone plus faible. Cependant, en mode développement, les fichiers ne sont pas minifiés car cela rend le code difficile à lire et à déboguer, ralentit les temps de compilation, et les gains de performance sont inutiles puisque le code s'exécute en local sans contrainte réseau.

# Q4 : Donner la tailles des fichiers générer par la commande.
Réponse:
dist/index.html :
Taille brute : 0.46 kB
Taille gzip : 0.30 kB

dist/assets/react-CHdo91hT.svg :
Taille brute : 4.13 kB
Taille gzip : 2.05 kB

dist/assets/index-DZl-RcEH.css :
Taille brute : 5.66 kB
Taille gzip : 1.40 kB

dist/assets/index-C_arIFqf.js :
Taille brute : 143.90 kB
Taille gzip : 46.34 kB

# Q5: Quel est l'intérêt du HMR ?
Réponse: Le HMR (Hot Module Replacement) permet de mettre à jour les modules d'une application en cours d'exécution sans recharger complètement la page.

# Q6: Donner la tailles des fichiers générer par la commande. Pourquoi il faut être vigilant sur les libraires et autre composant qu'on ajoute dans nos applications d'un point de vue éco-responsable ?
Réponse:
dist/index.html :
Taille brute : 0.46 kB
Taille gzip : 0.30 kB

dist/assets/react-CHdo91hT.svg :
Taille brute : 4.13 kB
Taille gzip : 2.05 kB

dist/assets/index-DZl-RcEH.css :
Taille brute : 5.66 kB
Taille gzip : 1.40 kB

dist/assets/index-03z4V8OH.js :
Taille brute : 156.75 kB
Taille gzip : 51.85 kB

Il est crucial de rester vigilant sur les librairies et composants ajoutés dans une application, car chaque ajout augmente la taille des fichiers finaux. Cela entraîne une consommation accrue de bande passante et d'énergie pour les serveurs, les réseaux et les appareils des utilisateurs, ce qui alourdit l'empreinte carbone. De plus, des fichiers volumineux dégradent les performances de l'application, augmentent les temps de chargement, et sollicitent davantage les appareils, en particulier sur des connexions limitées ou des équipements moins puissants. Optimiser et limiter les dépendances est donc essentiel pour garantir une application éco-responsable, performante et accessible.

# Q7: Noter les nom des différents fichiers qui ont été générés par la commande.
Réponse:
dist/about/index.html
dist/index.html
dist/assets/style-b4SyXn9O.css
dist/assets/about-D08RWGIN.js
dist/assets/style-Dgd37vtf.js
dist/assets/main-BdixoVug.js

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
Le Code Splitting permet de réduire la taille des fichiers chargés en divisant le code en modules plus petits et en ne chargeant que les fichiers nécessaires à une page donnée. Cela signifie que lorsqu'un utilisateur accède à une page, seul le code lié à cette page est chargé, contrairement au chargement d'un fichier global contenant tout le code de l'application. Cette approche réduit significativement le volume de données transférées, ce qui diminue la consommation de bande passante et l'énergie requise pour le chargement. Cela améliore également les performances en accélérant les temps de chargement, particulièrement utile sur des appareils aux ressources limitées ou dans des environnements à faible débit. Du point de vue éco-responsable, cela limite la consommation d'énergie des serveurs, des infrastructures réseau et des appareils clients, contribuant ainsi à réduire l'empreinte carbone globale de l'application.


# Q11: Ajouter le screen de votre score :
Screen:![alt text](image.png)


# Q12:  Proposition 1
Description: Optimiser le chargement des ressources en mettant en place un système de lazy loading pour les images non critiques et les composants non visibles directement à l'écran. Cela permettra de réduire les requêtes initiales et d'améliorer le temps de chargement de la page.
Nb de requête total du parcours de l'utilisateur: Réduction de 3 requêtes (grâce au chargement différé des images non visibles).
Taille total des requêtes du parcours de l'utilisateur: Réduction de ~20 kB (en évitant le chargement immédiat des images lourdes).
Taille total des fichiers généré : Inchangée car le lazy loading agit uniquement sur le moment où les ressources sont chargées.

# Q13:  Proposition 2
Description: Mettre en place le code splitting pour diviser les fichiers JavaScript en modules plus petits et charger uniquement les fichiers nécessaires à chaque page. Cela réduit le poids des fichiers JavaScript chargés sur chaque vue.
Nb de requête total du parcours de l'utilisateur: Augmentation de 2 requêtes (une par page, au lieu d'un fichier central).
Taille total des requêtes du parcours de l'utilisateur: Réduction de ~50 % (passant de 3.20 kB à environ 1.5 kB par page grâce au découpage des fichiers).
Taille total des fichiers généré : Légère augmentation (environ 3.5 kB au total, car chaque page a son propre fichier JavaScript).

# Q14:  Proposition 3
Description: Minifier les fichiers CSS et JavaScript pour réduire leur taille. Cela consiste à supprimer les espaces, les commentaires et raccourcir les noms des variables pour alléger les fichiers finaux.
Nb de requête total du parcours de l'utilisateur: Inchangé (le nombre de fichiers reste identique).
Taille total des requêtes du parcours de l'utilisateur: Réduction de ~30 % (passant de 3.20 kB à environ 2.2 kB pour le JavaScript et une réduction similaire pour les fichiers CSS).
Taille total des fichiers générés : Réduction de ~1 kB pour chaque fichier JS et CSS minifié.