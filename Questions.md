# Q1 : Donner la tailles des fichiers générer par la commande.
Réponse: 108.48 kB

# Q2 : Donner la tailles des fichiers générer par la commande.
Réponse: 243 kB

# Q3 : Est-ce que le fichier est lisible ? Quel est l'intêret de minifier les fichiers d'un point de vue éco-responsable ? Pourquoi on ne minifie pas les fichiers générer en mode dev ?
Réponse: Non il n'est pas lisible mais l'intêret est de réduire sa taille, qu'il se charge rapidement et qu'il consomme moins de ressources.

# Q4 : Donner la tailles des fichiers générer par la commande.
Réponse: La taille normale des fichiers est de 154,15 kB. Et pour la taille zippée des fichiers : 50,09 kB.

# Q5: Quel est l'intérêt du HMR ?
Réponse: L'affichage des modifications du code en l'instant T sans avoir besoin de rebuild l'app.

# Q6: Donner la tailles des fichiers générer par la commande. Pourquoi il faut être vigilant sur les libraires et autre composant qu'on ajoute dans nos applications d'un point de vue éco-responsable ?
Réponse: 167 kB | 55,6 kB. Pour ne pas trop charger la bande passante.

# Q7: Noter les nom des différents fichiers qui ont été générés par la commande.
Réponse: index.html, index.html, style-b4SyXn9O.css, about-D08RWGIN.js, style-Dgd37vtf.js, main-BdixoVug.js

# Q8 : Noter les nom des différents fichiers .js qui sont chargés au moment du chargement de la page.
Réponse: main-BdixoVug.js, style-Dgd37vtf.js

# Q9 : Noter les nom des différents fichiers .js qui sont chargés au moment du changement de page.
Réponse: about-D08RWGIN.js, style-Dgd37vtf.js


# Q10: Quel est l'intérêt de lu Code Splitting d'un point de vue éco-responsable ?
Réponse: On fait appel à la donnée au besoin.


# Q11: Ajouter le screen de votre score :
Screen: ![alt text](image.png)


# Q12:  Proposition 1
Description: Réduction du nombre de requêtes API en récupérant toutes les questions avec leurs propositions en une seule requête. Cela évite des appels réseau successifs pour chaque question.
Nb de requête total du parcours de l'utilisateur: 1 requête (au lieu de n + 1 où n est le nombre de questions).
Taille total des requêtes du parcours de l'utilisateur:
Taille total des fichiers généré :

# Q13:  Proposition 2
Description: Remplacement de l'image question.gif par un dessin en CSS pur représentant un point d'interrogation. Le cadre blanc a été ajouté autour du point d'interrogation pour conserver l'apparence visuelle tout en réduisant la taille des fichiers à charger.

Nb de requête total du parcours de l'utilisateur: 1 requête en moins (suppression de l'image).

Taille total des requêtes du parcours de l'utilisateur: Réduction de la taille totale des requêtes réseau (l'image de 500 KB a été supprimée).

Taille total des fichiers généré :  Aucun fichier image généré. Code CSS additionnel d'environ 1 KB pour dessiner le point d'interrogation et le cadre.

# Q14:  Proposition 3
Description: Remplacement des icônes FontAwesome par des icônes SVG directement intégrées dans le HTML ou CSS.
Réduction du nombre d'icônes à seulement les réseaux sociaux réellement pertinents.
Utilisation d'un display: flex pour organiser les icônes de manière simple.

Nb de requête total du parcours de l'utilisateur: Réduction d’au moins 1 requête pour FontAwesome.

Taille total des requêtes du parcours de l'utilisateur: Réduction de la taille des icônes.

Taille total des fichiers générés : Quelques lignes de CSS et HTML ajoutées, environ 1-2 KB.