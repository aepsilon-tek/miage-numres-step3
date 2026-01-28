# Q1 : Donner la tailles des fichiers générer par la commande.
Réponse: 108.48 kB

# Q2 : Donner la tailles des fichiers générer par la commande.
Réponse: 243.00 kB

# Q3 : Est-ce que le fichier est lisible ? Quel est l'intêret de minifier les fichiers d'un point de vue éco-responsable ? Pourquoi on ne minifie pas les fichiers générer en mode dev ?
Réponse: 
Les avantages sont les suivants :  
- Réduction de la taille des fichiers  
- Baisse de la consommation énergétique des serveurs  
- Amélioration des performances

En mode développement
- Lisibilité du code : Les développeurs doivent pouvoir lire, comprendre et modifier le code rapidement. Or, un fichier minifié rend cette tâche presque impossible.

- Facilité de débogage :  Les outils de débogage, tels que les navigateurs ou les environnements de développement (IDE), fonctionnent de manière optimale avec des fichiers non minifiés, car ils permettent de relier les erreurs à des lignes claires et compréhensibles.

- Aucun impact sur les performances en environnement local :  Les fichiers non minifiés n’altèrent pas les performances en mode développement, car ce dernier ne subit pas les contraintes d’un environnement de production, comme les serveurs publics ou les transferts réseau.

# Q4 : Donner la tailles des fichiers générer par la commande.
Réponse:
`dist/index.html                   0.46 kB │ gzip:  0.30 kB`
`dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB`
`dist/assets/index-DZl-RcEH.css    5.66 kB │ gzip:  1.40 kB`
`dist/assets/index-C_arIFqf.js   143.90 kB │ gzip: 46.34 kB`


# Q5: Quel est l'intérêt du HMR ?
Réponse: Le HMR (Hot Module Replacement) permet d'appliquer instantanément les modifications du code dans le navigateur sans avoir à recharger la page, ce qui accélère et optimise le processus de développement.
# Q6: Donner la tailles des fichiers générer par la commande. Pourquoi il faut être vigilant sur les libraires et autre composant qu'on ajoute dans nos applications d'un point de vue éco-responsable ?
Réponse:
- dist/index.html : 0.46 kB │ gzip : 0.30 kB  
- dist/assets/react-CHdo91hT.svg : 4.13 kB │ gzip : 2.05 kB  
- dist/assets/index-DZl-RcEH.css : 5.66 kB │ gzip : 1.40 kB  
- dist/assets/index-03z4V8OH.js : 156.75 kB │ gzip : 51.85 kB

Il est essentiel de restreindre l’utilisation de librairies et de composants additionnels, car ils augmentent la taille des fichiers finaux. Cela entraîne un chargement plus lent des pages, une consommation énergétique accrue et réduit l’éco-responsabilité de l’application.

# Q7: Noter les nom des différents fichiers qui ont été générés par la commande.
Réponse:
- dist/about/index.html : 0.53 kB │ gzip : 0.32 kB  
- dist/index.html : 0.65 kB │ gzip : 0.37 kB  
- dist/assets/style-b4SyXn9O.css : 2.18 kB │ gzip : 0.79 kB  
- dist/assets/about-D08RWGIN.js : 0.15 kB │ gzip : 0.16 kB  
- dist/assets/style-Dgd37vtf.js : 0.71 kB │ gzip : 0.40 kB  
- dist/assets/main-BdixoVug.js : 3.20 kB │ gzip : 1.14 kB 

# Q8 : Noter les nom des différents fichiers .js qui sont chargés au moment du chargement de la page.
Réponse:
- main-BdixoVug.js 
- style-Dgd37vtf.js 

# Q9 : Noter les nom des différents fichiers .js qui sont chargés au moment du changement de page.
Réponse:
- about-D08RWGIN.js  
- style-Dgd37vtf.js 

# Q10: Quel est l'intérêt de lu Code Splitting d'un point de vue éco-responsable ?
Réponse:
Le Code Splitting permet de charger uniquement les fichiers nécessaires pour chaque page, ce qui :  
- Réduit la taille des fichiers transférés,  
- Diminue les temps de chargement**,  
- Économise la bande passante,  
- Réduit la consommation énergétique des serveurs et des appareils des utilisateurs.   



# Q11: Ajouter le screen de votre score :
Screen:
![Capture d'écran Q11](./Capture_decran_2024-12-17_a_14.41.56.png)



# Q12:  Proposition 1
Description:
Nb de requête total du parcours de l'utilisateur: Réduit de 𝑁 + 1 N+1 (N requêtes pour les questions + 1 pour leur récupération) à une seule requête.
Taille total des requêtes du parcours de l'utilisateur: Légèrement augmentée pour une seule requête, mais considérablement optimisée en termes de temps.
Taille total des fichiers généré : Restée inchangée

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
