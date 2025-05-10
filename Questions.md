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
- dist/index.html	: 0.46 kB	, compressé => 0.30 kB
- dist/assets/react-CHdo91hT.svg	: 4.13 kB	, compressé =>2.05 kB
- dist/assets/index-DZl-RcEH.css	: 5.66 kB	, compressé =>1.40 kB
- dist/assets/index-C_arIFqf.js	: 143.90 kB , compressé =>	46.34 kB

# Q5: Quel est l'intérêt du HMR ?
Réponse:
Le Hot Module Reloading (HMR) présente plusieurs avantages :

- Les modifications du code source sont appliquées instantanément sans recharger la page (Temps de développement réduit).
- L'état actuel de l'application est conservé, contrairement à un simple rechargement (Expérience fluide).
- Les développeurs peuvent tester leurs modifications en temps réel (Efficacité accrue).
- Moins de rechargements réduisent la consommation de bande passante et d'énergie (Ressources optimisées).

# Q6: Donner la tailles des fichiers générer par la commande. Pourquoi il faut être vigilant sur les libraires et autre composant qu'on ajoute dans nos applications d'un point de vue éco-responsable ?
Réponse:
- dist/index.html	: 0.46 kB , compressé =>	0.30 kB
- dist/assets/react-CHdo91hT.svg	: 4.13 kB , compressé => 2.05 kB
- dist/assets/index-DZl-RcEH.css	: 5.66 kB , compressé => 1.40 kB
- dist/assets/index-03z4V8OH.js	: 156.75 kB , compressé => 51.85 kB

Il faut être vigilant sur les librairies et composants ajoutés pour les raison suivantes :
- Augmentation de la taille des fichiers : Chaque librairie ajoutée alourdit l'application, ce qui impacte le temps de chargement et l'expérience utilisateur.
- Consommation d'énergie accrue : Des fichiers plus lourds nécessitent davantage de ressources pour être transférés et chargés, ce qui augmente la consommation d'énergie des serveurs et des appareils des utilisateurs.
- Impact environnemental : La consommation excessive d'énergie liée au transfert et au traitement des données contribue aux émissions de CO₂, augmentant l'empreinte carbone.
- Performances dégradées : Les appareils moins puissants ou les connexions limitées subissent une baisse de performance significative.

Il est donc essentiel de :
- Évaluer l'utilité réelle des librairies ajoutées.
- Privilégier des alternatives légères et optimisées.
- Supprimer les dépendances inutilisées pour réduire la taille du bundle final.

# Q7: Noter les nom des différents fichiers qui ont été générés par la commande.
Réponse:
- dist/about/index.html	
- dist/index.html	
- dist/assets/style-b4SyXn9O.css	
- dist/assets/about-D08RWGIN.js	
- dist/assets/style-Dgd37vtf.js	
- dist/assets/main-BdixoVug.js

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
Le Code Splitting réduit la taille des fichiers chargés, ce qui :

- Diminue la consommation de bande passante.
- Réduit la consommation d'énergie des serveurs et appareils utilisateurs.
- Améliore les performances en ne chargeant que le nécessaire.
Cela limite l'impact environnemental lié au transfert et au traitement des données. 

# Q11: Ajouter le screen de votre score :
Screen:
![alt text](image.png)

# Q12:  Proposition 1
Description:
J'ai remplacé l'image question.gif par un élément HTML <div> stylisé avec CSS pur pour afficher un symbole "?" dessiné directement dans le navigateur. Cela a permis de supprimer la requête HTTP associée au chargement de l'image.

Nb de requête total du parcours de l'utilisateur:
Avant : Une requête supplémentaire pour charger question.gif.
Après : 1 requête en moins, car le symbole est généré via CSS et aucun fichier n'est requis.

Taille total des requêtes du parcours de l'utilisateur:
Avant : Taille de l'image question.gif (693 Ko).
Après : Taille réduite de la page globale, car le CSS remplace l'image sans ajout de ressources externes.

Gain estimé : Taille de l'image économisée.

Taille total des fichiers généré :

Le symbole "?" est dessiné via CSS intégré, donc aucun fichier supplémentaire n'est généré.
Gain en espace disque : Aucun fichier image n'est stocké ou généré.
![alt text](image-1.png)

# Q13:  Proposition 2
Description:
J'ai optimisé le chargement des questions et des propositions pour réduire le nombre de requêtes API ainsi que la taille des données échangées avec le serveur.

- Pagination des requêtes : Au lieu de charger toutes les questions en une seule requête, les questions sont récupérées page par page grâce à une pagination côté serveur. Ceci permet un chargement progressif des questions, réduisant la taille des données échangées lors de chaque appel.

-Mise en cache local des données : Les réponses des appels API (questions et propositions) sont stockées dans le localStorage afin d'éviter des requêtes redondantes. Si l'utilisateur revient à une question ou une proposition déjà chargée, les données sont récupérées depuis le cache local plutôt que de refaire un appel au serveur.

- Lazy loading des propositions : Les propositions sont récupérées uniquement lorsque l'utilisateur atteint une question spécifique, au lieu de les charger toutes en amont.

Nb de requête total du parcours de l'utilisateur:
- Avant optimisation : 1 requête pour récupérer toutes les questions + 1 requête par question pour récupérer les propositions (donc 1 requête pour les questions et 3 pour les propositions).
- Après optimisation : 1 requête pour récupérer toutes les questions + 3 requêtes pour récupérer les propositions au fur et à mesure (lorsque l'utilisateur répond, une requête est envoyée uniquement pour la proposition de cette question spécifique).

Taille total des requêtes du parcours de l'utilisateur:
Avant optimisation :
La taille totale des requêtes est élevée car toutes les données (questions + propositions) sont chargées en une seule fois.
Après optimisation :
La taille des requêtes est réduite car : Les questions sont paginées et les propositions ne sont chargées qu'à la demande.
Les données déjà chargées sont récupérées depuis le cache local.

Taille total des fichiers généré : La taille des fichiers générés reste similaire, mais l'efficacité du chargement est améliorée grâce au lazy loading et à la pagination.

# Q14:  Proposition 3
Description:

Utiliser l'optimisation du caching côté serveur et le préchargement des données pour réduire le nombre de requêtes.

Nb de requête total du parcours de l'utilisateur:
Avant : 4 requêtes
Après : 1 requête (préchargement)

Taille total des requêtes du parcours de l'utilisateur:
Avant : Plus petite taille, mais plus de requêtes
Après : Taille plus grande pour 1 requête unique

Taille total des fichiers générés :
Avant : Moyenne (génération multiple)
Après : Fichier plus volumineux (préchargé)
