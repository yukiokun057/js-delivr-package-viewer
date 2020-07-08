# Js Delivr Package Viewer

Vue.js SPA for node packages viewing. It use algoliasearch 'npm-search' index and registry.npmjs.org api. It was designed in 3 days for test task.

# How to launch
It need 2 instances of Terminal. The first one is for proxy-server serving, the second one is for the application.

For the first:
```sh
npm run proxy-server
```
For the second:
```sh
npm run start
```

# Features

  - Search packages
  - Get detailed information about package by clicking on it


# Tech

Js Delivr Package Viewer uses a number of open source projects to work properly:

* [VueJS] - JavaScript Framework
* [Vuex] - Is a state management library for components and application
* [Vuetify] - CSS framework
* [Express] - fast node.js network app framework. Used for a proxy-server
* [Webpack] - Webpack for 'pack' 😊
* [algoliasearch] - core of searching


License
----

MIT

[VueJS]: <https://vuejs.org/>
[Vuex]: <https://vuex.vuejs.org/>
[Vuetify]: <https://vuetifyjs.com/>
[Express]: <https://www.npmjs.com/package/express>
[Webpack]: <https://webpack.js.org/>
[algoliasearch]: <https://github.com/algolia/npm-search>