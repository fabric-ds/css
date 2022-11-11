# Fabric CSS

This is the core package for Fabric CSS, FINNs design system.

The package includes resets, core components and [Tailwind](https://tailwindcss.com/) utility classes tuned
for FINN.

## Usage (preferred)

The CSS should be used directly from Eik. This is because we can alias releases by major versions.

```html
<link href="https://assets.finn.no/pkg/@fabric-ds/css/v1/fabric.min.css" rel="stylesheet" />
```

## Usage (npm)

```sh
npm install @fabric-ds/css
```

## Development

Install dependencies:

```sh
npm install
```

Start a dev server:

```sh
npm run dev
```

Changes to to either the CSS, Tailwind configuration or the HTML files should hot reload.


We use [commitizen](https://github.com/commitizen/cz-cli) to ensure coherent commit message structure, used by [semantic release](#releases) to generate change logs and handle versioning.

```
npm install -g commitizen
```

When installed, you should be able to type `cz` or `git cz` in your terminal to commit your changes (replacing
`git commit`).

[![Add and commit with Commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)


## Releases

This project uses [Semantic Release](https://github.com/semantic-release/semantic-release) to automate package
publishing when making changes to the `main` or `next` branch.

It is recommended to branch off the `next` branch and follow
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) when making changes. When your
changes are ready for pull request, this should be opened against the `next` branch.

[Read more in-depth about Fabric Releases here](https://github.com/fabric-ds/issues/blob/779d59723993c13d62374516259602d967da56ca/rfcs/0004-releases.md).

Please note that the version published will depend on your commit message structure. Make sure to use commitizen (see [Development section](#development)).