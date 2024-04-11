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
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
transition: slide-left
title: Welcome to Slidev
mdc: true
---

# Tester c'est douter ?

---

# si vous n'etes pas d'accord dites le

---

# Au menu
- 30min de theorie / 30min de QA participative
- 2h de pratique
- 1h de cas reel sur vos missions

---

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

---

# Keskecé

---

# Pourquoi

Nous écrivons des tests pour être sûrs que notre application fonctionnera lorsque l'utilisateur l'utilisera.

> Pensez moins au code que vous testez et davantage aux cas d'utilisation pris en charge par le code.

## À quoi servent les tests unitaires ?

Les tests unitaires permettent de vérifier le bon fonctionnement d’une petite partie bien précise (unité ou module) d’une application

Mike Cohn, l’un des théoriciens pionniers de la méthodologie agile Scrum, met d’ailleurs les tests unitaires à la base de sa Pyramide des tests (test pyramid) qui rappelle aux développeurs de construire leurs tests sur différents niveaux de granularité :

![testing pyramid](https://welovedevs.com/wp-content/uploads/2022/08/3248e3f6e9f5af465032b699544538cbbdf9b8a3-466x246.png)

- Je m’assure du bon fonctionnement des différents cas de figures

- Grâce à ces tests unitaires, je me protège également des futures évolutions de mon code

- L'importance de la mise en place de tests unitaires est souvent sous-estimée


## Principe d'unité

Un test unitaire se concentre sur une seule unité, qui est le plus petit élément identifiable de notre application. Selon les contextes et les langages de programmation, plusieurs éléments du code peuvent constituer une unité. Il peut s’agir d’une fonction, d’une méthode de classe, d’un module, d’un objet… Parce qu’ils se concentrent sur les plus petites parties de notre application, les tests unitaires sont des tests de bas niveau (comme dans la Pyramide). À l’inverse, les tests de haut niveau contrôlent la validité d’une ou plusieurs fonctionnalités complètes.

## Isolation

Les tests unitaires visant à tester chaque unité en isolation totale par rapport aux autres, ils doivent pouvoir être indépendants des tests lui précédents. Votre suite de tests unitaires doit pouvoir être lancé dans n’importe quel ordre sans affecter le résultat des tests suivants. C’est pourquoi l’utilisation de Mocks et Stubs est indispensable aux tests unitaires.

## Rapidité

La petite échelle des tests unitaires et le fait qu’ils soient écrits par les développeurs pendant le développement font que les tests unitaires sont souvent très rapides. Ils peuvent ainsi être lancés très fréquemment, idéalement à chaque modification dans le code ou à chaque compilation. Cette façon de procéder permet de repérer les bugs bien plus rapidement : si vous avez accidentellement cassé une fonctionnalité pendant votre dernier changement, vous le saurez immédiatement et n’aurez pas à chercher bien loin pour le réparer. Vous n’êtes bien sûr pas obligés de lancer tous les tests unitaires à chaque fois.

## Rejouabilité

L’intérêt de bons tests unitaires réside dans le fait qu’ils soient idempotents, c’est-à-dire que pour un test donné, quel que soit l’environnement ou le nombre de fois qu’il soit joué, il produise toujours le même résultat. C’est pourquoi il est indispensable de faire abstraction des appels en base de données ou des requêtes HTTP pour avoir un test unitaire robuste.

## Automatisés

Les tests unitaires doivent produire un résultat Pass ou Fail automatiquement. Ils doivent pouvoir être interprétés par un test runner et ne pas demander au développeur de lire ou d’observer manuellement que le test a réussi ou échoué. C’est pourquoi les tests automatisés, qu’ils soient unitaires ou non, sont exécutés par un test runner et évalués par une librairie d’assertion.

---

# Je pars de 0, keskej'fé ?

Nous savons donc comment réfléchir aux éléments à tester pour les composants individuels et même les pages de notre application, mais par où commencer ? C'est un peu écrasant. Surtout si vous commencez tout juste à tester dans une grande application.

Alors voici ce que vous faites, considérez votre application du point de vue de l'utilisateur et demandez :

> Quelle partie de cette application me dérangerait le plus si elle était cassée ?

Alternativement, et plus généralement :

> Quelle serait la pire chose à casser dans cette application ?

Une fois que vous avez cette liste de priorités, écrivez un seul test de bout en bout (E2E) pour couvrir le « chemin heureux » que suivent la plupart de vos utilisateurs pour un cas d'utilisation particulier. Souvent, vous pouvez ainsi couvrir certaines parties de plusieurs des principales fonctionnalités de votre liste. La configuration peut prendre un peu de temps, mais une fois en place vous en aurez pour votre argent.

À partir de là, il ne s’agit plus que d’ajouter des tests au fil du temps. Ne vous embêtez pas à cibler un rapport de couverture de code à 100 %, cela n'en vaut pas la peine.

---

# Best Practices

- Gardez vos tests unitaires très rapides, jusqu’à une dizaine de secondes au maximum
- Avant de réparer un bug, écrivez ou modifiez un test unitaire pour exposer ce bug
- Choisissez la bonne unité pour que votre plan de test couvre un maximum de fonctionnalités
- Utilisez le template AAA pour améliorer la lisibilité de votre test : Arrange (création des objets, des données de test et définition des attentes), Act (invocation de la méthode testée), Assert (résultat du test unitaire)
- Testez toujours et tout le temps !

---
layout: two-cols
---

# Jest

- designed to work with CommonJS
- Faster in CI
- Beaucoup de cas d'usage sur l'internet

::right::

# Vitest

- compatible with ECMAScript Modules
- Faster in local
- Plutot recent donc moins de resultats de recherche, mais partage la meme API que jest donc les reponses concernant Jest s'applique egalement a Vitest

---

# Testing library

Le petit mot du créateur :

> Hi there 👋 I created React Testing Library because I wasn't satisfied with the testing landscape at the time. It expanded to DOM Testing Library and now we have Testing Library implementations (wrappers) for every popular JavaScript framework and testing tool that targets the DOM (and even some that don't).

## Les erreurs courantes

- Not using Testing Library ESLint plugins
  - [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)
  - [eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)

- Using wrapper as the variable name for the return value from render

  ```ts
  // ❌
  const wrapper = render(<Example prop="1" />)
  wrapper.rerender(<Example prop="2" />)

  // ✅
  const {rerender} = render(<Example prop="1" />)
  rerender(<Example prop="2" />)

- Not using screen

  ```ts
  // ❌
  const {getByRole} = render(<Example />)
  const errorMessageNode = getByRole('alert')

  // ✅
  render(<Example />)
  const errorMessageNode = screen.getByRole('alert')
  ```

  screen was added in DOM Testing Library v6.11.0 (which means you should have access to it in @testing-library/react@>=9). It comes from the same import statement you get render from:

  ```ts
  import {render, screen} from '@testing-library/react'
  ```

  The benefit of using screen is you no longer need to keep the render call destructure up-to-date as you add/remove the queries you need. You only need to type screen. and let your editor's magic autocomplete take care of the rest.

  The only exception to this is if you're setting the container or baseElement which you probably should avoid doing (I honestly can't think of a legitimate use case for those options anymore and they only exist for historical reasons at this point).

  You can also call screen.debug instead of debug

- Using the wrong assertion

  ```ts
  const button = screen.getByRole('button', {name: /disabled button/i})

  // ❌
  expect(button.disabled).toBe(true)
  // error message:
  //  expect(received).toBe(expected) // Object.is equality
  //
  //  Expected: true
  //  Received: false

  // ✅
  expect(button).toBeDisabled()
  // error message:
  //   Received element is not disabled:
  //     <button />
  ```

  That toBeDisabled assertion comes from jest-dom. It's strongly recommended to use jest-dom because the error messages you get with it are much better.

- Wrapping things in act unnecessarily

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

  I see people wrapping things in act like this because they see these "act" warnings all the time and are just desperately trying anything they can to get them to go away, but what they don't know is that render and fireEvent are already wrapped in act! So those are doing nothing useful.

  Most of the time, if you're seeing an act warning, it's not just something to be silenced, but it's actually telling you that something unexpected is happening in your test. You can learn more about this from my blog post (and videos): [Fix the "not wrapped in act(...)" warning](https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning).

- Using the wrong query

  ```ts
  // ❌
  // assuming you've got this DOM to work with:
  // <label>Username</label><input data-testid="username" />
  screen.getByTestId('username')

  // ✅
  // change the DOM to be accessible by associating the label and setting the type
  // <label for="username">Username</label><input id="username" type="text" />
  screen.getByRole('textbox', {name: /username/i})
  ```

  We maintain a page called [Which query should I use?](https://testing-library.com/docs/guide-which-query) of the queries you should attempt to use in the order you should attempt to use them. If your goal is aligned with ours of having tests that give you confidence that your app will work when your users use them, then you'll want to query the DOM as closely to the way your end-users do so as possible. The queries we provide will help you to do this, but not all queries are created equally.

- Using container to query for elements

  ```ts
  // ❌
  const {container} = render(<Example />)
  const button = container.querySelector('.btn-primary')
  expect(button).toHaveTextContent(/click me/i)

  // ✅
  render(<Example />)
  screen.getByRole('button', {name: /click me/i})
  ```

  We want to ensure that your users can interact with your UI and if you query around using querySelector we lose a lot of that confidence, the test is harder to read, and it will break more frequently. This goes hand-in-hand with the next sub-section.

- Not querying by text

  ```ts
  // ❌
  screen.getByTestId('submit-button')

  // ✅
  screen.getByRole('button', {name: /submit/i})
  ```

  If you don't query by the actual text, then you have to do extra work to make sure that your translations are getting applied correctly. The biggest complaint I hear about this is that it leads to content writers breaking your tests. My rebuttal to that is that first, if a content writer changes "Username" to "Email" that's a change I definitely want to know about (because I'll need to change my implementation). Also, if there is a situation where they break something, fixing that issue takes no time at all. It's easy to triage and easy to fix.

  So the cost is pretty low, and the benefit is you get increased confidence that your translations are applied correctly and your tests are easier to write and read.

- Not using *ByRole* most of the time

  ```ts
  // assuming we've got this DOM structure to work with
  // <button><span>Hello</span> <span>World</span></button>

  screen.getByText(/hello world/i)
  // ❌ fails with the following error:
  // Unable to find an element with the text: /hello world/i. This could be
  // because the text is broken up by multiple elements. In this case, you can
  // provide a function for your text matcher to make your matcher more flexible.

  screen.getByRole('button', {name: /hello world/i})
  // ✅ works!
  ```

- Adding aria-, role, and other accessibility attributes incorrectly

  ```ts
  // ❌
  render(<button role="button">Click me</button>)

  // ✅
  render(<button>Click me</button>)
  ```

- Not using @testing-library/user-event

  ```ts
  // ❌
  fireEvent.change(input, {target: {value: 'hello world'}})

  // ✅
  userEvent.type(input, 'hello world')
  ```

  @testing-library/user-event is a package that's built on top of fireEvent, but it provides several methods that resemble the user interactions more closely. In the example above, fireEvent.change will simply trigger a single change event on the input. However the type call, will trigger keyDown, keyPress, and keyUp events for each character as well. It's much closer to the user's actual interactions. This has the benefit of working well with libraries that you may use which don't actually listen for the change event.

- Using query* variants for anything except checking for non-existence

  ```ts
  // ❌
  expect(screen.queryByRole('alert')).toBeInTheDocument()

  // ✅
  expect(screen.getByRole('alert')).toBeInTheDocument()
  expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  ```

  Only use the query* variants for asserting that an element cannot be found.

- Using waitFor to wait for elements that can be queried with find*

  ```ts
  // ❌
  const submitButton = await waitFor(() =>
    screen.getByRole('button', {name: /submit/i}),
  )

  // ✅
  const submitButton = await screen.findByRole('button', {name: /submit/i})
  ```

  use find* any time you want to query for something that may not be available right away.

- Passing an empty callback to waitFor

  ```ts
  // ❌
  await waitFor(() => {})
  expect(window.fetch).toHaveBeenCalledWith('foo')
  expect(window.fetch).toHaveBeenCalledTimes(1)

  // ✅
  await waitFor(() => expect(window.fetch).toHaveBeenCalledWith('foo'))
  expect(window.fetch).toHaveBeenCalledTimes(1)
  ```

  The purpose of waitFor is to allow you to wait for a specific thing to happen. If you pass an empty callback it might work today because all you need to wait for is "one tick of the event loop" thanks to the way your mocks work. But you'll be left with a fragile test which could easily fail if you refactor your async logic.

- Having multiple assertions in a single waitFor callback

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

- Performing side-effects in waitFor
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

  waitFor is intended for things that have a non-deterministic amount of time between the action you performed and the assertion passing. Because of this, the callback can be called (or checked for errors) a non-deterministic number of times and frequency (it's called both on an interval as well as when there are DOM mutations). So this means that your side-effect could run multiple times!
  
  put side-effects outside waitFor callbacks and reserve the callback for assertions only.

- Using get* variants as assertions

  ```ts
  // ❌
  screen.getByRole('alert', {name: /error/i})

  // ✅
  expect(screen.getByRole('alert', {name: /error/i})).toBeInTheDocument()
  ```

  This one's not really a big deal actually, but I thought I'd mention it and give my opinion on it. If get* queries are unsuccessful in finding the element, they'll throw a really helpful error message that shows you the full DOM structure (with syntax highlighting) which will help you during debugging. Because of this, the assertion could never possibly fail (because the query will throw before the assertion has a chance to).

---

# Les mooooocks

- Mocking lets you fake it so you can make it. If you couldn't have a fake version of certain modules or services, testing the checkout process of an app would cost you a lot of money in credit card fees. Talk about paying a high price for confidence! 🤑 So instead, we make a fake version of that credit card charging service to avoid paying the fees.

  But mocking comes with a cost of its own.

- Mocking severs the real-world connection between what you're testing and what you're mocking. Even if we have confidence that our code works with our fake version of the credit card service, we can't have 100% confidence that our code will work in production with the real version of the credit card service.

- When you mock something, you're making a trade-off. You're trading confidence for something else. For me, that something else is usually practicality — meaning I wouldn't be able to test this thing at all, or it may be pretty difficult/messy, without mocking. (Like in our credit card example.)

- Saving a few milliseconds per test? That's not a good reason to mock. People like shallow rendering — component mocking to the max — because it's faster. That's true, but we're talking milliseconds faster. If it takes a long time to render your entire component tree, sounds to me like you have a real performance bug in your software that needs to be addressed. I realize that time adds up (50ms per test * 1000 tests = 50 seconds). But the less you mock, the fewer tests you need, and trading confidence for a minute or two faster test suite is a bad trade. 😵

---

# Performance

- Comment ?
- Pourquoi ?

---

# Le coverage

- Code Coverage < Use Case Coverage
- Write tests, not too many.

I've heard managers and teams mandating 100% code coverage for applications. That's a really bad idea. The problem is that you get diminishing returns on your tests as the coverage increases much beyond 70% (I made that number up... no science there). Why is that? Well, when you strive for 100% all the time, you find yourself spending time testing things that really don't need to be tested. Things that really have no logic in them at all (so any bugs could be caught by ESLint and Flow). Maintaining tests like this actually really slow you and your team down.

You may also find yourself testing implementation details just so you can make sure you get that one line of code that's hard to reproduce in a test environment. You really want to avoid testing implementation details because it doesn't give you very much confidence that your application is working and it slows you down when refactoring. You should very rarely have to change tests when you refactor code.

I don't think that anyone can argue that testing software is a waste of time. The biggest challenge is knowing what to test and how to test it in a way that gives true confidence rather than the false confidence of testing implementation details.

---

# CI setup (husky, github action)

- Husky
- Github action


