# Q1 : Donner la tailles des fichiers générer par la commande.
Réponse: 108.48 kB

# Q2 : Donner la tailles des fichiers générer par la commande.
Réponse: 243.00 kB

# Q3 : Est-ce que le fichier est lisible ? Quel est l'intêret de minifier les fichiers d'un point de vue éco-responsable ? Pourquoi on ne minifie pas les fichiers générer en mode dev ?
Réponse: Non il n'est pas lisible pour un être humain.
Les intêrets sont : 
- Réduction de la taille des fichiers
- Diminution de la consommation énergétique des serveurs
- Optimisation des performances

En mode développement, la priorité est donnée à la lisibilité et à la facilité de débogage:
- Lisibilité du code :  
   Les développeurs ont besoin de lire, comprendre et modifier rapidement le code. Un fichier minifié rend cela presque impossible.

- Debugging facilité :  
   Les outils de débogage comme les navigateurs ou les IDE (environnements de développement) fonctionnent mieux avec des fichiers non minifiés, car ils peuvent associer les erreurs à des lignes spécifiques et compréhensibles.

- Pas d’impact sur les performances en local :  
   Les fichiers non minifiés n’affectent pas les performances en mode développement, car ils ne sont pas soumis aux contraintes d’un environnement de production (serveurs publics, transferts réseau, etc.).


# Q4 : Donner la tailles des fichiers générer par la commande.
Réponse:
`dist/index.html                   0.46 kB │ gzip:  0.30 kB`
`dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB`
`dist/assets/index-DZl-RcEH.css    5.66 kB │ gzip:  1.40 kB`
`dist/assets/index-C_arIFqf.js   143.90 kB │ gzip: 46.34 kB`

# Q5: Quel est l'intérêt du HMR ?
**Réponse :**  
Le **HMR** permet de voir les modifications du code instantanément dans le navigateur sans recharger la page, ce qui améliore la rapidité et l'efficacité du développement.  

# Q6: Donner la tailles des fichiers générer par la commande. Pourquoi il faut être vigilant sur les libraires et autre composant qu'on ajoute dans nos applications d'un point de vue éco-responsable ?

**Taille des fichiers générés :**  
- **dist/index.html** : 0.46 kB │ gzip : 0.30 kB  
- **dist/assets/react-CHdo91hT.svg** : 4.13 kB │ gzip : 2.05 kB  
- **dist/assets/index-DZl-RcEH.css** : 5.66 kB │ gzip : 1.40 kB  
- **dist/assets/index-03z4V8OH.js** : 156.75 kB │ gzip : 51.85 kB  

**Pourquoi être vigilant :**  
Il faut limiter les librairies et composants ajoutés car ils augmentent la taille des fichiers finaux, ce qui alourdit le chargement des pages, augmente la consommation d’énergie et nuit à l’éco-responsabilité de l’application.  


# Q7: Noter les nom des différents fichiers qui ont été générés par la commande.
**Réponse :**  
- **dist/about/index.html** : 0.53 kB │ gzip : 0.32 kB  
- **dist/index.html** : 0.65 kB │ gzip : 0.37 kB  
- **dist/assets/style-b4SyXn9O.css** : 2.18 kB │ gzip : 0.79 kB  
- **dist/assets/about-D08RWGIN.js** : 0.15 kB │ gzip : 0.16 kB  
- **dist/assets/style-Dgd37vtf.js** : 0.71 kB │ gzip : 0.40 kB  
- **dist/assets/main-BdixoVug.js** : 3.20 kB │ gzip : 1.14 kB 

# Q8 : Noter les nom des différents fichiers .js qui sont chargés au moment du chargement de la page.
**Réponse :**  
- **main-BdixoVug.js**  
- **style-Dgd37vtf.js**  

# Q9 : Noter les nom des différents fichiers .js qui sont chargés au moment du changement de page.
**Réponse :**  
- **about-D08RWGIN.js**  
- **style-Dgd37vtf.js** 


# Q10: Quel est l'intérêt de lu Code Splitting d'un point de vue éco-responsable ?
**Réponse :**  
Le **Code Splitting** permet de charger uniquement les fichiers nécessaires pour chaque page, ce qui :  
- **Réduit la taille des fichiers** transférés,  
- **Diminue les temps de chargement**,  
- **Économise la bande passante**,  
- **Réduit la consommation énergétique** des serveurs et des appareils des utilisateurs.   


# Q11: Ajouter le screen de votre score :
Screen:

![Capture d'écran Q11](./Capture%20d’écran%202024-12-17%20à%2014.39.01.png)


# Q12:  Proposition 1
Description: 

Actuellement, une requête API est faite pour chaque question afin de récupérer ses propositions. Cela entraîne un nombre important de requêtes HTTP. Une optimisation consiste à modifier l'API pour récupérer toutes les questions avec leurs propositions dans une seule requête. 

Nombre de requêtes total : Réduit de N + 1 requêtes (N questions + 1 pour les questions) à 1 seule requête.
Taille totale des requêtes du parcours utilisateur : Légèrement augmentée pour une seule requête, mais fortement optimisée en temps.
Taille totale des fichiers générés : Inchangée.

  
# Q13:  Proposition 2
Description :
La taille des fichiers CSS et JS peut être réduite davantage en appliquant des outils de minification et tree shaking sur le code.

Taille totale des fichiers générés : Réduction des fichiers CSS et JS (par exemple de 30% à 50%).
Impact sur les performances : Temps de chargement réduit.
Nb de requêtes total : Inchangé.