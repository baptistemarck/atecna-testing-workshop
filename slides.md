---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://live.staticflickr.com/4500/37150757250_00a4a2a533_z.jpg
# apply any unocss classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# some information about the slides, markdown enabled
info: |
  **Slidev Starter Template**
  
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
transition: slide-left
title: Tester c'est douter ?
mdc: true
---


# Tester c'est douter ?

---
class: 'text-center cover'
---

<div class="my-auto w-full">

<v-clicks>

![opinion](https://media0.giphy.com/media/roSUut7ekzOQth7id3/giphy.webp?cid=790b76117y5zna2nnc6p6u8hu76h1o0x5qobs1s1137nwihs&ep=v1_gifs_search&rid=giphy.webp&ct=g)

## Si vous n'êtes pas d'accord, dites-le (gentillement) !

</v-clicks>

</div>

---
layout: 'center'
---

<div class="my-auto w-full">

# Sommaire

- Keskecé
- Pourquoi ?
- Je pars de 0, keskej'fé ?
- Best practices
- Vitest vs Jest
- Testing library
- Les mocks
- Performance
- le coverage
- CI setup (husky, github action)

</div>

---
class: 'text-center cover'
---

<div class="my-auto w-full">

## Keskecé

![keskece](https://media3.giphy.com/media/Ee2oeU9UR6igg3alHB/200.webp?cid=ecf05e474agovd1ssgzc4hnma93n9ydrw1p6tmxzgklnnxba&ep=v1_gifs_search&rid=200.webp&ct=g)

</div>

---
layout: two-cols
class: 'cover'
---

Les tests unitaires permettent de vérifier le bon fonctionnement d’une petite partie bien précise (unité ou module) d’une application

Mike Cohn, l’un des théoriciens pionniers de la méthodologie agile Scrum, met d’ailleurs les tests unitaires à la base de sa Pyramide des tests (test pyramid) qui rappelle aux développeurs de construire leurs tests sur différents niveaux de granularité :

- Je m’assure du bon fonctionnement des différents cas de figures
- Grâce à ces tests unitaires, je me protège également des futures évolutions de mon code

::right::

![testing pyramid](https://www.leapwork.com/hs-fs/hubfs/Blog%20Images/Testing-pyramid.png?width=1250&height=1086&name=Testing-pyramid.png)

---
layout: two-cols
---

#### Principe d'unité

- **Définition d'une unité**: La plus petite partie testable du code, comme une fonction, une méthode de classe, un module, etc.
- **Niveau de test**: Bas niveau dans la Pyramide des tests, en opposition aux tests de haut niveau qui évaluent des fonctionnalités complètes.

#### Isolation

- **Indépendance**: Chaque test unitaire doit fonctionner indépendamment des autres pour garantir des résultats constants, peu importe l'ordre d'exécution.
- **Utilisation de Mocks et Stubs**: Essentiels pour maintenir l'isolation des tests, en simulant les dépendances et interactions externes.


#### Rapidité

- **Exécution fréquente**: Les tests unitaires doivent être rapides à exécuter pour faciliter des tests fréquents, permettant de détecter rapidement les régressions.
- **Intégration dans le développement**: Idéalement lancés à chaque compilation ou modification du code pour une détection instantanée des erreurs.

::right::

#### Rejouabilité

- **Idempotence**: Un test unitaire doit toujours produire le même résultat, peu importe le nombre de fois qu'il est exécuté ou l'environnement dans lequel il opère.
- **Abstraction des interactions externes**: Il est crucial d'éviter les appels en base de données ou les requêtes HTTP directes pour maintenir la consistance.

#### Automatisation
- **Résultats automatiques**: Les tests unitaires doivent indiquer clairement "Pass" ou "Fail" sans intervention manuelle du développeur.
- **Utilisation de test runners et librairies d'assertion**: Les tests sont exécutés et évalués automatiquement par des outils dédiés pour assurer leur efficacité et précision.

---
layout: quote
class: 'text-center cover'
---

We write tests to be confident that our application will work when the user uses them, [Kent C. Dodds 🌌](https://kentcdodds.com/blog/how-to-know-what-to-test)

---
layout: two-cols
class: 'cover'
---

<div class="text-center">

### Je pars de 0, keskej'fé ?

</div>

![how](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHJveXNreXE5cjZwcWl6aXAxcWdwM3FpZjk3M2Zvazgzb2s0b3d2diZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10yIEN8cMn4i9W/giphy.webp)

::right::

<v-clicks>

#### Identifier les Priorités de Test

- **Perspective de l'utilisateur**: Commencez par évaluer l'application du point de vue de l'utilisateur.
- **Identification des risques**: Demandez-vous quelle défaillance aurait l'impact le plus négatif :
  - "Quelle partie de cette application me dérangerait le plus si elle était cassée ?"
  - "Quelle serait la pire chose à casser dans cette application ?"


#### Commencer par des Tests E2E

- **Test du chemin heureux**: Écrivez un test E2E qui suit le parcours le plus commun que vos utilisateurs prennent dans un cas d'utilisation typique.
- **Couverture fonctionnelle**: Ce type de test permet souvent de couvrir plusieurs des principales fonctionnalités critiques.

#### Développement Progressif des Tests

- **Ajout progressif**: Continuez à ajouter des tests au fil du temps, sans viser une couverture de 100% dès le départ.
- **Pragmatisme**: Ne vous concentrez pas sur l'atteinte d'une couverture de code à 100%, car cela peut être contre-productif et onéreux.

</v-clicks>

---
class: 'cover text-center'
---

<div class="my-auto w-full">

Pensez moins au code que vous testez et davantage aux cas d'utilisation pris en charge par le code.

</div>

---
layout: two-cols
class: 'cover'
---

# Best Practices

#### Rapidité des Tests

- Gardez les tests unitaires extrêmement rapides, idéalement en dessous de dix secondes pour l'exécution complète de la suite.

#### Gestion des Bugs

- Avant de corriger un bug, écrivez ou modifiez un test unitaire qui met clairement en évidence le problème. Cela garantit que le bug est correctement identifié et évité à l'avenir.

::right::

#### Choix de l'Unité de Test

- Sélectionnez soigneusement les unités à tester pour maximiser la couverture fonctionnelle de votre application, en veillant à ce que les tests restent gérables et pertinents.

#### Structuration des Tests

- Template AAA (Arrange-Act-Assert):
  - Arrange: Préparez l'environnement de test, créez les objets nécessaires, définissez les données de test, et établissez les attentes.
  - Act: Exécutez la fonction ou la méthode à tester.
  - Assert: Vérifiez que les résultats correspondent aux attentes.

#### Pratique Continue

- Intégrez les tests unitaires dans votre routine de développement quotidienne. Testez toujours et régulièrement pour maintenir et améliorer la qualité du code.

---
layout: two-cols
class: 'cover'
---

# Jest

- designed to work with CommonJS
- Faster in CI
- Beaucoup de cas d'usage sur l'internet

::right::

# Vitest

- compatible with ECMAScript Modules
- Faster in local
- Plutot récent donc moins de resultats de recherche, mais partage la même API que Jest, donc les réponses concernant Jest s'appliquent également à Vitest (en gros, c'est pareil, mais en mieux)

---
class: 'cover'
---

<div class="my-auto w-full">

# Testing library

Le petit mot du créateur :

> Hi there 👋 I created React Testing Library because I wasn't satisfied with the testing landscape at the time. It expanded to DOM Testing Library and now we have Testing Library implementations (wrappers) for every popular JavaScript framework and testing tool that targets the DOM (and even some that don't). [Kent C. Dodds 🌌](https://kentcdodds.com)


Et la lumière fût...

</div>

---
class: 'cover text-center'
---

<div class="my-auto w-full">

# Les erreurs courantes

</div>


---
class: 'cover text-center'
---

<div class="my-auto w-full">

## Ne pas utiliser les plugins ESLint de Testing Library

[eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)

[eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)

Une erreur de ne pas les utiliser !   

Ils vous permettront en effet de détecter rapidement   
des incohérences ou erreurs de syntaxe/structure dans vos tests,    
et vous habitueront aux bonnes pratiques.  

Ce serait dommage de se priver d'un guide.   
Faisez pas les cons

</div>

---
layout: two-cols
class: 'cover'
---

## Utiliser "wrapper" comme nom de variable pour la valeur retournée par render

On n'est plus sur Enzyme, on fait ça proprement, maintenant

::right::

  ```ts
  // ❌
  const wrapper = render(<Example prop="1" />)
  wrapper.rerender(<Example prop="2" />)

  // ✅
  const { rerender } = render(<Example prop="1" />)
  rerender(<Example prop="2" />)
  ```

---
layout: 'center'
---

# Ne pas utiliser screen

  ```ts
  // ❌
  const { getByRole } = render(<Example />)
  const errorMessageNode = getByRole('alert')

  // ✅
  render(<Example />)
  const errorMessageNode = screen.getByRole('alert')
  ```

  `screen` a été ajouté dans DOM Testing Library v6.11.0   
  (ce qui signifie que vous devriez y avoir accès dans @testing-library/react@>=9).  
  Il provient de la même instruction d'importation que vous utilisez pour render :

  ```ts
  import { render, screen } from '@testing-library/react'
  ```

---
layout: 'center'
---

  L'avantage d'utiliser `screen` est que vous n'avez plus besoin de mettre à jour la déstructuration   
  de l'appel de `render` au fur-et-à-mesure que vous ajoutez/supprimez les requêtes dont vous avez besoin.  

  ```ts
  // 😭
  const { getByRole, queryByRole, getAllByRole, queryByText, findTheTruc, helpMeGod, pleaseKillMe } = render(<Example />)
  ```

  Vous n'avez qu'à taper `screen.` et laisser l'autocomplétion magique de votre éditeur faire le reste.  

  ```ts
  // 😌
  render(<Example />)
  const button = screen.getByRole('button')
  ```

  La seule exception à cela est si vous définissez le `container` ou `baseElement`, ce que vous devriez probablement éviter de faire (je ne peux honnêtement pas penser à un cas d'utilisation légitime pour ces options à ce stade, elles existent seulement pour des raisons historiques).
  
  Vous pouvez également appeler `screen.debug()` au lieu de `debug`

---
class: 'cover'
---

<div class="my-auto w-full">

## Utiliser la mauvaise assertion

  ```ts
  const button = screen.getByRole('button', {name: /disabled button/i})

  // ❌
  expect(button.disabled).toBe(true)
  // message d'erreur :
  //  expect(received).toBe(expected) // égalité Object.is
  //
  //  Expected: true
  //  Received: false

  // ✅
  expect(button).toBeDisabled()
  // message d'erreur :
  //   L'élément reçu n'est pas désactivé :
  //     <button />
  ```

  L'assertion `toBeDisabled` vient de `jest-dom`.   
  
  Il est fortement recommandé d'utiliser `jest-dom` avec les assertions appropriées, car les messages d'erreur que vous obtiendrez avec seront bien plus explicites.

</div>

---
class: 'cover'
layout: two-cols
---

## Utiliser act inutilement

Souvent on utilise `act` car on voit remonter des warnings "`act`" qui ont tendance à parasiter les résultats, et on tente désespérément de les faire disparaître.   
Mais `render` et `fireEvent` sont déjà enveloppés dans `act` !   
Donc, ceux-ci ne font rien d'utile.   

La plupart du temps, si vous voyez un avertissement `act`, ce n'est pas juste quelque chose à faire taire, mais cela vous indique réellement que quelque chose d'inattendu se passe dans votre test.   

Pour en savoir plus à ce sujet:   
[Fix the "not wrapped in act(...)" warning](https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning).

::right::

  ```ts
  // ❌
  act(() => {
    render(<Example />)
  })

  const input = screen.getByRole('textbox', {name: /choose a fruit/i})
  act(() => {
    fireEvent.keyDown(input, {key: 'ArrowDown'})
  })

  // ✅
  render(<Example />)
  const input = screen.getByRole('textbox', {name: /choose a fruit/i})
  fireEvent.keyDown(input, {key: 'ArrowDown'})
  ```

---
layout: 'center'
---

# Utiliser la mauvaise query

  ```ts
  // ❌
  // en supposant que vous ayez ce DOM avec lequel travailler:
  // <label>Username</label><input data-testid="username" />
  screen.getByTestId('username')

  // ✅
  // changez le DOM pour qu'il soit accessible en associant l'étiquette et en définissant le type
  // <label for="username">Username</label><input id="username" type="text" />
  screen.getByRole('textbox', {name: /username/i})
  ```

  Plus d'infos incontournables sur le choix de requête DOM le plus approprié selon différents cas, par ordre de priorité: [Which query should I use?](https://testing-library.com/docs/guide-which-query)

---
layout: 'center'
--- 

# Utiliser container pour interroger des éléments

  ```ts
  // ❌
  const { container } = render(<Example />)
  const button = container.querySelector('.btn-primary')
  expect(button).toHaveTextContent(/click me/i)

  // ✅
  render(<Example />)
  screen.getByRole('button', {name: /click me/i})
  ```

  Nous voulons nous assurer que nos utilisateurs peuvent interagir avec votre interface utilisateur.   

  En requêtant un élément du DOM en utilisant `querySelector`, nous perdrions beaucoup de cette confiance, le test serait plus difficile à lire, et se échouerait plus fréquemment. Cela va de pair avec la section suivante.

---
layout: 'center'
---  

# Ne pas requêter un élément par son contenu texte

  ```ts
  // ❌
  screen.getByTestId('submit-button')

  // ✅
  screen.getByRole('button', {name: /submit/i})
  ```

  Si vous ne requêtez pas un élément par son contenu de texte réel, vous devrez faire un travail supplémentaire pour vous assurer que vos traductions sont correctement appliquées.   
  La plus grande plainte que j'entends à ce sujet est que cela conduit à ce que les changements des rédacteurs de contenu cassent vos tests.   
  Ma réponse à cela est que, d'abord, si un rédacteur de contenu change "Username" en "Email", c'est un changement que je veux pouvoir détecter (parce que je devrais alors changer mon implémentation).   
  Aussi, s'il y a une situation où ils cassent quelque chose, réparer ce problème ne prend pas beaucoup de temps. C'est facile à trier et facile à réparer.
  
  Donc, le coût est assez faible, et l'avantage est que vous obtenez une confiance accrue que vos traductions sont correctement appliquées, et vos tests sont plus faciles à écrire et à lire.

---
layout: 'center'
--- 

# Ne pas utiliser **ByRole** la plupart du temps

  Si l'élément à requêter porte un rôle accessible natif, il est préférable d'utiliser le `*ByRole` en priorité.

  ```ts
  // En supposant que nous ayons cette structure DOM avec laquelle travailler:
  // <button><span>Hello</span> <span>World</span></button>

  screen.getByText(/hello world/i)
  // ❌ échoue avec l'erreur suivante :
  // Impossible de trouver un élément avec le texte : /hello world/i. Cela pourrait être
  // parce que le texte est divisé par plusieurs éléments. Dans ce cas, vous pouvez
  // fournir une fonction pour votre correspondance de texte pour rendre votre correspondance plus flexible.

  screen.getByRole('button', {name: /hello world/i})
  // ✅ fonctionne !
  ```

  Dans le cas où l'élément est un tag sans rôle, comme un paragraphe, le `*ByText` sera l'option prioritaire.   
  Dans le cas de l'exemple précédent, une option `exact` (à `true`par défaut) peut être utilisée pour rendre la requête plus permissive.

  ```ts
  screen.getByText(/hello world/i, { exact: false })  
  ```

---
layout: 'center'
--- 

# Ajout incorrect d'attributs aria-, role et autres attributs d'accessibilité

  ```ts
  // ❌
  render(<button role="button">Click me</button>)

  // ✅
  render(<button>Click me</button>)
  ```

  Laissez faire la nature...   

  Pas besoin d'ajouter un rôle `button` à un `<button>`, et éviter tant que faire se peut d'appliquer un rôle à un élément qui n'en a normalement pas, ou qui en nativement un autre.

---
layout: 'center'
--- 

# Ne pas utiliser @testing-library/user-event

  ```ts
  // ❌
  fireEvent.change(input, {target: {value: 'hello world'}})

  // ✅
  import { userEvent } from '@testing-library/user-event'
  userEvent.type(input, 'hello world')
  ```

  `userEvent` est un package construit par-dessus `fireEvent`, mais qui fournit plusieurs méthodes ressemblant davantage aux interactions utilisateur.   

  Dans l'exemple ci-dessus, `fireEvent.change` déclenchera simplement un seul événement de changement sur l'entrée.   
  Alors que l'appel de `userEvent.type` déclenchera également des événements `keyDown`, `keyPress` et `keyUp` pour chaque caractère.  
  Cela se rapproche beaucoup plus des interactions réelles de l'utilisateur, et a l'avantage de bien fonctionner avec les bibliothèques que vous pouvez utiliser, qui n'écouteraient pas réellement l'événement `change`.

---
layout: 'center'
--- 

# Utiliser les variantes queryBy* pour autre chose que vérifier la non-existence

  ```ts
  // ❌
  expect(screen.queryByRole('alert')).toBeInTheDocument()

  // ✅
  expect(screen.getByRole('alert')).toBeInTheDocument()
  expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  ```

  Utilisez uniquement les variantes `query*` pour affirmer qu'un élément ne peut pas être trouvé.

---
layout: 'center'
---  

# Utiliser waitFor pour attendre des éléments qui peuvent être interrogés avec findBy*

  ```ts
  // ❌
  const submitButton = await waitFor(() =>
    screen.getByRole('button', {name: /submit/i}),
  )

  // ✅
  const submitButton = await screen.findByRole('button', {name: /submit/i})
  ```

  La méthode `findBy*` fonctionne de manière asynchrone.   
  Utilisez-la quand vous voulez requêter un élément qui n'est pas disponible immédiatement.

---
layout: 'center'
---  

# Passer un rappel vide à waitFor

  ```ts
  // ❌
  await waitFor(() => {}) // parfaitement dégjeulass'
  expect(window.fetch).toHaveBeenCalledWith('foo')
  expect(window.fetch).toHaveBeenCalledTimes(1)

  // ✅
  await waitFor(() => expect(window.fetch).toHaveBeenCalledWith('foo'))
  expect(window.fetch).toHaveBeenCalledTimes(1)
  ```

  L'objectif de `waitFor` est de vous permettre d'attendre qu'une chose spécifique se produise.   

  Si vous passez un rappel vide, cela pourrait fonctionner aujourd'hui parce que tout ce dont vous avez besoin d'attendre est "un tick de la boucle d'événements", grâce à la manière dont vos mocks fonctionnent.   
  MAIS vous vous retrouverez avec un test fragile qui pourrait facilement échouer si vous refactorisez votre logique asynchrone.

---
layout: 'center'
---  

# Avoir plusieurs assertions dans un seul rappel waitFor

  ```ts
  // ❌
  await waitFor(() => {
    expect(window.fetch).toHaveBeenCalledWith('foo')
    expect(window.fetch).toHaveBeenCalledTimes(1)
  })

  // ✅
  await waitFor(() => expect(window.fetch).toHaveBeenCalledWith('foo'))
  expect(window.fetch).toHaveBeenCalledTimes(1)
  ```
  Le `waitFor` ne doit contenir qu'une assertion. Si vous avez plusieurs assertions à faire suite à un évènement, les suivantes peuvent(doivent) être placées après le `waitFor`.

---
layout: 'center'
---  

# Effectuer des effets secondaires dans waitFor

  ```ts
  // ❌
  await waitFor(() => {
    fireEvent.keyDown(input, {key: 'ArrowDown'})
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })

  // ✅
  fireEvent.keyDown(input, {key: 'ArrowDown'})
  await waitFor(() => {
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })
  ```

  La fonction `waitFor` est destinée aux choses qui ont un temps non déterministe entre l'action que vous avez effectuée et l'assertion réussie.   
  Cela signifie que le rappel peut être effectué (ou vérifié pour des erreurs) un nombre de fois non déterministe et une certaine fréquence (il est appelé à la fois à intervalles réguliers ainsi que lorsque des mutations du DOM se produisent).   
  **Cela signifie donc que votre effet secondaire pourrait se produire plusieurs fois !**   
  C'est scandaleux !
  
  Placez les effets secondaires en dehors des rappels `waitFor` et réservez le rappel pour les assertions seulement. Bien le merci.

---
layout: 'center'
---  

# Utiliser getBy* comme assertion

  ```ts
  // ❌
  screen.getByRole('alert', {name: /error/i})

  // ✅
  expect(screen.getByRole('alert', {name: /error/i})).toBeInTheDocument()
  ```

  Ce n'est pas vraiment un gros problème en fait, mais j'ai pensé que je le mentionnerai et donnerai mon avis à ce sujet.   
  Si les requêtes `getBy*` ne réussissent pas à trouver l'élément, elles lanceront un message d'erreur vraiment utile qui vous montre la structure complète du DOM (avec mise en évidence de la syntaxe) qui vous aidera lors du débogage.    
  En raison de cela, l'assertion ne pourrait jamais échouer, car la requête lancerait avant que l'assertion ait la possibilité de le faire.

---
layout: 'center'
---  

# Le Mocking : Pratique, mais à Double Tranchant 🔪   

  😟 Déconnexion du monde réel : Le mocking coupe le lien entre votre test et la réalité. Même si tout fonctionne avec une version simulée, comme celle du service de paiement, rien ne garantit que cela marchera avec la version réelle.

  🛠️ Un compromis nécessaire : mocker est un échange entre la confiance et la praticité. Sans le mocking, certains tests seraient impossibles ou très compliqués à réaliser. C'est un mal nécessaire pour éviter, par exemple, des coûts exorbitants de transactions réelles lors des tests.

  ⏱️ Économiser du temps : Attention, économiser quelques millisecondes par test grâce au mocking n'est pas une justification suffisante. Si vos tests sont lents, cela peut révéler un problème de performance dans votre application à résoudre plutôt que de le masquer avec des simulations.

  > En somme, le mocking est utile, mais il faut être conscient du compromis entre vitesse et fiabilité des tests. Le juste milieu dépend de ce que vous êtes prêt à sacrifier.

---
layout: 'center'
---  

# Performance des tests unitaires 
Comment et pourquoi ?

---
layout: 'center'
---  

## Comment ?

1. Optimisation de l'environnement de test
    
    - Utiliser une base de données en mémoire pour les tests.
    - Configurer correctement l'environnement pour réduire le temps de démarrage des tests.

2. Réduire la complexité des tests
  
    - Écrire des tests unitaires simples qui ciblent une fonctionnalité précise.
    - Éviter les dépendances externes non nécessaires.

3. Utilisation de Mocks et Stubs
  
    - Simuler des services externes pour éviter des appels coûteux en temps.
    - Utiliser des stubs pour les opérations lourdes qui n'affectent pas directement le résultat du test.

4. Parallélisation des tests
  
    - Exécuter les tests en parallèle pour exploiter pleinement les capacités du processeur.
    - Utiliser des outils et des frameworks qui supportent la parallélisation.

5. Mesure et suivi des performances
  
    - Utiliser des outils pour mesurer le temps d'exécution des tests.
    - Identifier et optimiser les tests qui prennent anormalement plus de temps.

---
layout: 'center'
--- 

## Pourquoi ?
1. Augmentation de la productivité
    
    - Des tests plus rapides permettent des cycles de développement plus courts.
    - Permet aux développeurs de recevoir rapidement des retours sur les modifications apportées.

2. Amélioration de la qualité du code
    
    - Des tests performants sont exécutés plus fréquemment, offrant une meilleure couverture et détectant plus tôt les erreurs.

3. Réduction des coûts
    
    - Minimiser le temps d'exécution des tests peut réduire les coûts de l'infrastructure, surtout dans les environnements cloud où les ressources sont payées à l'utilisation.

4. Meilleure intégration continue

    - Un pipeline d'intégration continue avec des tests rapides est moins susceptible de créer des goulets d'étranglement.
    - Encourage l'adoption de pratiques d'intégration et de livraison continues.

5. Satisfaction de l'équipe

    - Les développeurs sont moins frustrés par des attentes prolongées pour les résultats des tests.
    - Contribue à un cycle de feedback plus positif et motivant.

---
layout: 'center'
--- 

# La Couverture des Tests Unitaires

**Spiting facts**

- Couverture des cas d'utilisation > Couverture du code.
- Écrire des tests, mais pas en excès.
- Exiger une couverture de code de 100% est une très mauvaise idée.
    - l'utilité des tests diminue à mesure que la couverture dépasse environ 70% (ce chiffre est fictif, il n'est basé sur aucune donnée scientifique). 
    - viser les 100% conduit souvent à tester des éléments qui n'en ont pas réellement besoin. 
    - certains aspects qui ne contiennent aucune logique significative peuvent être vérifiés par des outils comme ESLint, rendant certains tests superflus. 
    - maintenir ce genre de tests peut vous ralentir considérablement (vous et votre équipe).
- Eviter de tester des détails d'implémentation juste pour atteindre cette fameuse ligne de code difficile à reproduire en environnement de test. 
    - complique les refactorisations. 
    - idéalement, vous ne devriez que rarement avoir à modifier vos tests lorsque vous refactorisez du code.
- Les TU ne sont en aucun cas une perte de temps. 
    - le véritable défi est de savoir quoi tester et comment le tester de manière à obtenir une véritable confiance dans vos résultats, plutôt que la fausse assurance que peuvent donner les tests de détails d'implémentation.

---
layout: two-cols
---

# CI setup

**Github action**


**Validation continue :**   
Les tests sont exécutés sur des serveurs distants chaque fois qu'une _pull request_ est créée ou mise à jour, garantissant que le code intégré répond aux standards de qualité.

**Isolation et environnement contrôlé :**   
Les tests s'exécutent dans un environnement propre et contrôlé, éliminant les variations entre les environnements de développement locaux.

**Sécurité accrue et collaboration :**   
Empêche l'intégration de code non testé dans la branche principale, favorisant une collaboration sûre et efficace.

::right::

Exemple :

Ce workflow déclenche des tests à chaque _push_ ou _pull request_, garantissant que toutes les contributions sont vérifiées.

```yml
name: Run Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'
    - name: Install Dependencies
      run: npm install
    - name: Run Tests
      run: npm test
```

---
layout: two-cols
---

# Husky 🐕

**Assurance qualité immédiate :**   
Les tests exécutés avant chaque commit garantissent que toutes les modifications soumises passent les tests de base, réduisant les risques de régressions.

**Gain de temps pour l'équipe :**   
Détecte les erreurs plus tôt, évitant que des bugs non détectés n'atteignent des phases plus avancées du développement ou de la production.

**Automatisation du processus de vérification :**   
Les développeurs n'ont pas à se rappeler de lancer les tests manuellement, ce qui standardise les pratiques de test.

::right::


Installation de Husky :

```bash
npm install husky lint-staged --save-dev
```

Activation des hooks Git avec Husky :


```bash
npx husky install
```

Ajout d'un hook de pré-commit pour exécuter des tests :

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

```json
  //package.json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "vitest --changed HEAD~1 --coverage.enabled --coverage.lines=80"
    ]
  }
```

---
layout: 'center'
--- 

# Et maintenant a vous !
