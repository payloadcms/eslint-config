[![NPM](https://img.shields.io/npm/v/@payloadcms/eslint-config)](https://www.npmjs.com/@payloadcms/eslint-config)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@payloadcms/eslint-config?label=zipped)

# Payload CMS ESLint Config

An ESLint Config for Payload CMS projects.

### Installation

```bash
$ npm i --save-dev @payloadcms/eslint-config
$ npm info @payloadcms/eslint-config peerDependencies
$ npm i --save-dev <dependency>@<version> # for each dependency in the above output
$ # or
$ yarn add --dev @payloadcms/eslint-config
$ yarn info @payloadcms/eslint-config peerDependencies
$ yarn add --dev <dependency>@<version> # for each dependency in the above output
```

### Usage

In your ESLint config file, extend the config (`.eslintrc`, `.eslintrc.js`, `eslint.json`, etc):

```javascript
{
  "extends": "@payloadcms"
}
```

If using Webpack, install and configure `eslint-loader` to have loaded files automatically linted.

```javascript
{
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'eslint-loader',
  options: {
    fix: true,
    emitWarning: true,
  },
}
```

## Demo

```bash
$ git clone git@github.com:payloadcms/eslint-config.git
$ yarn
$ yarn demo
$ open http://localhost:3000
```

## License

[MIT](https://github.com/payloadcms/eslint-config/blob/master/LICENSE) Copyright (c) Payload CMS
