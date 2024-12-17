# Q1 : Donner la tailles des fichiers générer par la commande.
Réponse:
Réponse :
| Nom du fichier    | Taille brute (Raw size) |
|--------------------|------------------------|
| polyfills.js       | 90.20 kB              |
| main.js            | 18.18 kB              |
| styles.css         | 95 bytes              |

Total initial : 108.48 kB

# Q2 : Donner la tailles des fichiers générer par la commande.
Réponse:
| Nom du fichier             | Raw size        | Estimated transfer size |
|-----------------------------|-----------------|-------------------------|
| main-FT3QBEBB.js            | 208.48 kB       | 56.93 kB                |
| polyfills-FFHMD2TL.js       | 34.52 kB        | 11.28 kB                |
| styles-5INURTSO.css         | 0 bytes         | 0 bytes                 |

**Total :**  
- Raw size : **243.00 kB**  
- Transfer size : **68.21 kB**

# Q3 : Est-ce que le fichier est lisible ? Quel est l'intêret de minifier les fichiers d'un point de vue éco-responsable ? Pourquoi on ne minifie pas les fichiers générer en mode dev ?
Réponse:
- **Est-ce que le fichier est lisible ?**  
  Non, le fichier `main-FT3QBEBB.js` est **minifié**, ce qui signifie que le code est compacté et difficilement lisible pour un humain. Les espaces, indentations et noms de variables inutiles ont été supprimés.

- **Quel est l'intérêt de minifier les fichiers d'un point de vue éco-responsable ?**  
  Minifier les fichiers permet :  
  - **Réduction de la taille des fichiers** : Cela diminue la quantité de données transférées entre le serveur et le client.  
  - **Réduction de la consommation de bande passante** : Moins de données à transférer signifie une utilisation plus faible des ressources réseau.  
  - **Réduction du temps de chargement des pages** : Les utilisateurs bénéficient d’une expérience plus fluide et rapide.  
  - **Réduction de l'empreinte carbone** : Moins de données transférées réduit la consommation d'énergie des serveurs et des terminaux utilisateurs, ce qui est bénéfique pour l'environnement.

- **Pourquoi on ne minifie pas les fichiers générés en mode dev ?**  
  - En mode développement, il est important que le code reste **lisible** pour faciliter le débogage.  
  - Les développeurs doivent pouvoir comprendre facilement le code source.  
  - Le **Hot Module Replacement (HMR)**, qui permet de recharger une partie du code sans redémarrer l’application entière, fonctionne mieux avec des fichiers non minifiés.  
  - La minification introduit une étape supplémentaire qui ralentirait le développement.
# Q4 : Donner la tailles des fichiers générer par la commande.
Réponse:
| Nom du fichier    | Taille brute (Raw size) |
|--------------------|------------------------|
| polyfills.js       | 90.20 kB              |
| main.js            | 18.18 kB              |
| styles.css         | 95 bytes              |

**Total initial : 108.48 kB**

# Q5: Quel est l'intérêt du HMR ?
Réponse:
Le **Hot Module Replacement (HMR)** permet de recharger uniquement les parties du code qui ont été modifiées, sans avoir besoin de recharger l'ensemble de l'application.

**Les avantages du HMR sont :**
- **Gain de temps** : Les modifications apparaissent instantanément sans redémarrer tout le serveur.
- **Expérience fluide** : L'état de l'application n'est pas perdu (par exemple, les formulaires remplis ou les variables d'état sont conservés).
- **Développement plus rapide** : Les développeurs peuvent tester leurs modifications immédiatement, ce qui accélère le cycle de développement.
- **Moins de consommation de ressources** : Cela évite les compilations complètes et réduit les ressources nécessaires.
# Q6: Donner la tailles des fichiers générer par la commande. Pourquoi il faut être vigilant sur les libraires et autre composant qu'on ajoute dans nos applications d'un point de vue éco-responsable ?
Réponse:
| Nom du fichier             | Raw size        | Estimated transfer size |
|-----------------------------|-----------------|-------------------------|
| main-FT3QBEBB.js            | 208.48 kB       | 56.93 kB                |
| polyfills-FFHMD2TL.js       | 34.52 kB        | 11.28 kB                |
| styles-5INURTSO.css         | 0 bytes         | 0 bytes                 |

**Total :**  
- Raw size : **243.00 kB**  
- Transfer size : **68.21 kB**

---

**Pourquoi faut-il être vigilant sur les librairies et autres composants qu'on ajoute dans nos applications d'un point de vue éco-responsable ?**

- **Taille des fichiers** : Chaque librairie ajoutée augmente la taille des fichiers finaux, ce qui alourdit le transfert des données.
- **Consommation d'énergie** : Plus de données à transférer implique une consommation accrue des ressources serveurs et des terminaux utilisateurs, augmentant ainsi l'empreinte carbone.
- **Performance de l'application** : L'ajout de librairies non optimisées ou inutiles ralentit le chargement de l'application, ce qui nuit à l'expérience utilisateur.
- **Bonne pratique** : Il est recommandé de n'ajouter que les librairies **strictement nécessaires** et d'opter pour des versions allégées ou des alternatives plus légères.

En résumé, **réduire les dépendances** permet d'améliorer les performances tout en réduisant l'impact environnemental de l'application.

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