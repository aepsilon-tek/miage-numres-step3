# Rappels

## Sujet : Faire Burger Quizz !
Vous avez 4 séances de TD/TP pour  produire un site web qui permettent de répondre à des questions et  donne le score.


## Environnement
L'ensemble des  4 TD/TP sont à réaliser sur **_Github codespaces_**.
Vous devez réutiliser le compte que vous avez crée durant la première séance.

## Déroulement

Comme au premier TP, vous devez suivre le même processus que pour contribuer à un projet:
1. Dupliquer (**Forker**) le projet github
1. Modifier / compléter des fichier du repo. forké
1. Commiter vos modifs sur votre repo.
1. Proposer vos modifications sur le repo. parent (**PullRequest**)

## Architecture
L'architecture   générale de  l'application  Burger Quizz est la suivante :
![Capture d'écran](assets/Archi.png)

Une application web consomme une API Rest Quarkus  qui s'appuie sur une base de données relationnelles en  mémoire **H2**.

## TP3 - Choix stack Front-End

Votre client  veut une Application de quizz en français qui :
* Permet à un utilisateur de passer le quizz.
* Indique le score du joueur à la fin du quizz.
* Met en avant tout ces réseaux sociaux.
* Une page "About".
* Une image fix avec un "?"

**L'objectif de ce troisième TP est d'identifier les différents paramètres à prendre en compte dans le choix d'une stack et de découvrir l'app front qui servira de base pour répondre au besoin du Client**

# Fork du projet
L'objectif est de créer une copie du projet 'miage-numres-step3' sur votre compte github.

1. Se rendre sur le projet github [miage-numres-step3] (https://github.com/aepsilon-tek/miage-numres-step3)
1. Fork du projet grâce au bouton **Fork**
![Capture d'écran](assets/Fork.png)

# lancement de CodeSpaces

1. Rendez-vous sur la page principale de votre projet forké
1. En haut de cette page, cliquez sur le bouton vert <> Code
1. Sélectionnez l'onglet Codespaces
1. Cliquez sur Create codespace on main
1. Attendez environ 1 à 2 minutes que l'environnement se construise (le système installe Java et les extensions nécessaires automatiquement).

Sinon vous pouvez clicquer ici  [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=${github.repository_id})

> [!TIP]
> Fermez la fenêtre de Copilot, vous n'en avez pas besoin.

> [!WARNING]
> Assurez-vous d'avoir forké ce projet sur votre compte personnel avant de cliquer sur le bouton ci-dessus, sinon vous ne pourrez pas enregistrer (pusher) vos modifications.

> [!WARNING]
> Vous disposez de 60 heures gratuites par mois. Quand vous avez terminé votre travail, cliquez sur le nom du Codespace en bas à gauche et choisissez Stop Current Codespace.



# ViteJs
 Vite est un outil de construction qui vise à fournir une expérience de développement plus rapide et plus simple pour les projets Web modernes. Il se compose de deux grandes parties :
 - Un serveur de développement qui offre de riches améliorations de
   fonctionnalités par rapport aux modules ES natifs, par exemple un
   remplacement de module à chaud (HMR) extrêmement rapide.
 - Une commande de build qui regroupe votre code avec Rollup,
   préconfiguré pour générer des ressources statiques hautement
   optimisées pour la production.
   
Nous utiliserons Vite durant ce TP pour nous permettre de mettre en évidence les optimisation faite par ce qu'on appel un "bundler"

# L'intérêt d'un bundler
Un bundler est un outils qui permet notamment de rendre l'App utilisable sur tous les navigateurs, et optimise le code par plusieurs mécanisme comme la minification des fichiers js et css.
ViteJs utilise un bundler quand on "build" l'App pour la mettre en ligne.

1. Se rendre dans l'app front "bigger-stack" `cd front/bigger-stack/`
2. Installer les dépendances : `npm install`
3. Lancer l'app front en mode "dev" `npm run start`
4. Répondre à la question Q1 du fichier **_Questions.md_**
5. Build l'app`npm run build`
6. Répondre à la question Q2 du fichier **_Questions.md_**
7. Regarder le fichier minifier "main-*.js" dans le dossier  `/bigger-stack/dist/bigger-stack/browser/`
8. Répondre à la question Q3 du fichier **_Questions.md_**
9. Commiter  & Pusher le fichier **_Questions.md_** 


# Attention à ce qu'on ajoute
Vite JS nous permet de lancer notre application en mode DEV, ou en mode PRODUCTION.
Comme vu au dessus le mode PRODUCTION a plusieurs intérêt et notamment celui d'optimiser les fichier finaux qui serviront d'App.
Le mode DEV, nous permet de profiter du HMR, ce qui donne une expérience de développement fluide.

1. Se rendre dans l'app front "big-stack" `cd front/big-stack/`
2. Installer les dépendances : `npm install`
3. Build l'App `npm run build`
4. Répondre à la question Q4 du fichier **_Questions.md_**
5. Lancer l'app front en mode "dev" `npm run dev`
1. Constater le Hot module Reload (HMR)
    1. Mettre cote à cote gitpod et l'onglet de l'app que vous venez de lancer
    2. Ouvrez le fichier `front/big-stack/src/App.tsx`
    3. dé-commenter la ligne `// import { Rating } from '@smastrom/react-rating';`
    4. dé-commenter la ligne `// const [rating, setRating] = useState(0) // Initial value`
    5. dé-commenter la ligne `{/* <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} /> */}`
    6. Sauvegarder et Répondez à la Q5 du fichier **_Questions.md_**
8. Build l'App `npm run build`
9. Répondre à la question Q6 du fichier **_Questions.md_**
10. Commiter  & Pusher le fichier **_Questions.md_**

## Code Splitting
ViteJs permet d'effectuer du Code splitting

1. Se rendre dans l'app front "light-stack" `cd front/light-stack`
2. Installer les dépendances : `npm install`
3. Build l'App `npm run build`
4. Répondre à la question Q7 du fichier **_Questions.md_**
1. Constater le Code Splitting
    1. Lancer l'app front en mode "build" `npm run preview`
    2. Mettre cote à cote gitpod et l'onglet de l'app que vous venez de lancer
    3. Ouvrir la console développer (click droit -> inspecter)
    4. Aller dans l'onglet Réseau
    5. Effacer l'historique
    6. Recharger la page
    7. Répondre à la question Q8 du fichier **_Questions.md_**
    8. Effacer l'historique
    9. Click sur /about
    10. Répondre à la question Q9 du fichier **_Questions.md_**
7. Répondre à la question Q10 du fichier **_Questions.md_**
8. Commiter  & Pusher le fichier **_Questions.md_**

## Accessibilité

### Lighthouse
Lightouse est un outils présent dans le navigateur Chrome qui se repose sur Axe (vu en cour), un outil permettant d'évaluer jusqu'à un certain point l'accessibilité de votre site web.

1. Ouvrir la console développer (click droit -> inspecter)
2. Aller dans Lighthouse
3. Choisir Navigation, Bureau, Accessibilité
4. Lance l'analyse
5. Répondre à la question Q11 du fichier **_Questions.md_**
8. Commiter  & Pusher le fichier **_Questions.md_**

## Connecter l'api et le front

1. Ouvrir deux terminaux.
1. Terminal 1 :
   1. Retourner à la racine du projet :  `cd /workspace/miage-numres-step3/`
   2. Aller dans le la partie front : `cd front`
   3. Installer les dépendances : `npm install`
   3. Lancer l'application Front en mode dev : `npm run dev`
1. Terminal 2 :
   1. Retourner à la racine du projet :  `cd /workspace/miage-numres-step3/`
   2. Lancer l'api : `./mvnw quarkus:dev -pl api`
   3. Clicker sur "make public"
   5. Dans VS Code : 
       1. Aller dans l'onglet PORTS
       2. Copier l'Address qui commence par `https://8080...`
   5. Dans le fichier store.js `front/light-stack/src/store.js`
       1. Modifier la ligne : `export const baseUrl = "https://url.api";` par l'url que vous venez de copier`export const baseUrl = "https://8080...";`
7. Faite le Quizz !

# Amélioration

Nous allons travailler sur le front "light-stack".

Vous devez désormais regarder / analyser / critiquer / améliorer le code existant en appliquant les bonnes pratiques d'éco-conception.
Effectuer le parcour d'un Utilisateur en vous aidant des information de la "console du devellopeur" de Chrome pour cela.


Pour chacune des propositions que vous faites, vous devez :
  1. Decrire la proposition dans le fichier **_Questions.md_**
  1. Implementer votre proposition
  1. Tester la proposition
  1. Indiquez soit le gain en tailles de fichier, soit en nombre de requête soit en taille de requête.
  1. Commiter  & Pusher le code et le  fichier **_Questions.md_**

## Proposition 1
Suivez les étapes ci-desus et répondre à Q12  du fichier fichier **_Questions.md_**

## Proposition 2
Suivez les étapes ci-desus et répondre à Q13  du fichier fichier **_Questions.md_**

## Proposition 3
Suivez les étapes ci-desus et répondre à Q14  du fichier fichier **_Questions.md_**


# Pull Request
Une fois tous vos commits & Push réalisés sur votre repo, il est nécessaire de faire la **Pull Request** sur le repo **parent**.
Pour cela, il suffit de :
1. Se rendre sur votre compte personnel sur `GitHub`.
1. Sur la page principale, se rendre sur `Contribute` > `Open pull Request`
1. Remplir le titre de la pull request en précisant votre nom (vos noms) et `Create pull request`
