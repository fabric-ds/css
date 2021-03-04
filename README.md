# Fabric CSS

[![Build Status](https://travis.schibsted.io/finn/fabric-css.svg?token=c2i7RTPCstzjYPkxuoGG&branch=master)](https://travis.schibsted.io/finn/fabric-css)

Monorepo for Fabric CSS

## Development

Install dependencies:

```sh
yarn
```

Start a dev server:

```sh
yarn dev
```

Changes to to either the CSS, Tailwind configuration or the HTML files should hot reload.

## How to release

Fabric CSS is published both to npm and to eik (as an npm `postpublish` step).

1. Make sure you're on `master`
2. `git pull`
3. Make sure you have set up
   [npm publishing to local repository](https://confluence.schibsted.io/display/FINNWEB/How+to+publish+to+our+local+NPM+registry)
4. Make sure you are [authenticated with the eik server](https://eik.dev/docs/client_login)
5. `yarn lerna publish`
