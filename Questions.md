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
Réponse: Le fichier `main-FT3QBEBB.js` est illisible. Tous les espaces, sauts de ligne, commentaires et noms de variables longs sont supprimés ou raccourcis.
Le fichier devient une longue ligne de code compacte et illisible, mais toujours interprétable par le navigateur.

L’intérêt de minifier les fichiers d’un point de vue éco-responsable se situe principalement dans la réduction des ressources consommées (bande passante, CPU, mémoire).

En mode dev, les fichiers ne sont pas minifiés pour faciliter la lisibilité, le débogage et le développement rapide.

# Q4 : Donner la tailles des fichiers générer par la commande.
Réponse: 

dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/assets/index-DZl-RcEH.css    5.66 kB │ gzip:  1.40 kB
dist/assets/index-C_arIFqf.js   143.90 kB │ gzip: 46.34 kB

# Q5: Quel est l'intérêt du HMR ?
Réponse: L'interet de HMR est de pouvoir visualiser en temps réel les modifications qu'on a fait dans le code en chargeant les modules a la volée.

# Q6: Donner la tailles des fichiers générer par la commande. Pourquoi il faut être vigilant sur les libraires et autre composant qu'on ajoute dans nos applications d'un point de vue éco-responsable ?
Réponse: 

dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/assets/index-DZl-RcEH.css    5.66 kB │ gzip:  1.40 kB
dist/assets/index-03z4V8OH.js   156.75 kB │ gzip: 51.85 kB

Chaque librairie ajoutée augmente la taille des fichiers JS, CSS, SVG, images.
Par exemple, dist/assets/index-03z4V8OH.js = 156.75 kB (51.85 kB gzip) ==> Cela signifie que le fichier index.js pèse 156,75 Ko, mais il sera compressé à 51,85 Ko lors du transfert au navigateur.
Avec des centaines d’utilisateurs, la consommation de bande passante devient importante.
Plus de bande passante = plus de consommation énergétique sur le réseau.
Chaque Mo transféré entraîne des émissions de CO₂ liées au réseau (centres de données, routeurs, etc.).

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

/assets/main-BdixoVug.js
/assets/style-Dgd37vtf.js

# Q9 : Noter les nom des différents fichiers .js qui sont chargés au moment du changement de page.
Réponse:

/assets/about-D08RWGIN.js
/assets/style-Dgd37vtf.js

# Q10: Quel est l'intérêt de lu Code Splitting d'un point de vue éco-responsable ?
Réponse: Le code splitting permet de charger seulement les fichiers de la page visuellement affichée dans l'interface utilisateur. Cela permet d'économiser des données et du temps car il n'y a pas besoin de charger tous les fichiers du projet.

# Q11: Ajouter le screen de votre score :
Screen: 

![mon score est de 85 en accessibilité](image.png)


# Q12:  Proposition 1
Description:
Réduction des requêtes HTTP (cache local) : 
- Avant, l’API était appelée à chaque fois.
- Maintenant, les questions et propositions sont mises en cache localement avec localStorage.
- Avantages :
- Moins de bande passante utilisée.
- Moins de requêtes réseau = empreinte carbone réduite.
- Gain de temps (pas besoin d’attendre la réponse de l’API).

# Q13:  Proposition 2
Description:
Réduction de la redondance :
Avant, les fonctions getQuestionsApi, getProposalApi, evaluate faisaient des fetch() identiques.
Maintenant, une seule fonction générique fetchFromApi() est utilisée.

# Q14:  Proposition 3
Description: Utilisation de variables les plus locales possible et on enlève le maximum de variables globales.
Ca permet d'avoir un code beaucoup plus propre, et plus performant.



Je vous mets les chiffres pour les tailles et nombre de requêtes pour toutes les propositions en une fois.

Nb de requête total du parcours de l'utilisateur:
4 requetes lorsque je réponds aux questions. Il y en a bien moins qu'avant.
=> 1 preflight et 3 fetch
Au chargement du quizz, j'ai 15 requêtes

Taille total des requêtes du parcours de l'utilisateur:
124 B transferred

Taille total des fichiers généré :
La taille ne change pas

dist/about/index.html           0.53 kB │ gzip: 0.32 kB
dist/index.html                 0.65 kB │ gzip: 0.37 kB
dist/assets/style-b4SyXn9O.css  2.18 kB │ gzip: 0.79 kB
dist/assets/about-D08RWGIN.js   0.15 kB │ gzip: 0.16 kB
dist/assets/style-Dgd37vtf.js   0.71 kB │ gzip: 0.40 kB
dist/assets/main-B7lxTwf5.js    3.62 kB │ gzip: 1.35 kB