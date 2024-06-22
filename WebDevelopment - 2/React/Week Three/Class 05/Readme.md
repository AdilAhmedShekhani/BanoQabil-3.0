### Create React with Vite





#### Why Vite?

Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

1. A dev server that serves your source files over native ES modules, with rich built-in features and astonishingly fast Hot Module Replacement (HMR).
2. A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

### React Project Structure

- node_modules
  packages installed by yarn or npm
- public
  static files
- src
  - assets
  - components
  - App.js
  - index.js
- .gitignore
- index.html
  index.html is the entry point of your app and it is the only HTML file you need to create.
- package.json
  package.json is the manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). It also includes the list of dependencies to install from yarn when running yarn install.
- README.md
- yarn.lock
  yarn.lock is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. This ensures that all people using your project will get the same set of dependencies.
- vite.config.js
  vite.config.js is the config file for Vite. It is optional and you can delete it if you don’t need it.

  ### React Components

Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.

#### Types of Components

There are two types of components in React:

1. Class Components ( Old way of writing components )
2. Functional Components ( New way of writing components )
