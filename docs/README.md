__ADD NAME HERE__ / [Exports](modules.md)

# NPM Package Template

This is a template NPM package repository. Get started with the following commands:

```shell
git clone https://github.com/Antman261/npm-package-template.git my-package
cd my-package
rm -rf .git
git init
git remote add origin https://github.com/<YOUR USERNAME>/<YOUR REPOSITORY>
nvm use
npm i
```

Where `my-package` is the name of your package

Now you can begin developing your package!

## Included package scripts

* `npm run watch` Use this during development to run tests on change
* `npm run build` Build your library
* `npm run build-docs` Builds the documentation using [TypeDoc](http://typedoc.org) and [TypeDoc Markdown](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/typedoc-plugin-markdown)

## Setting up GitHub Pages and CircleCI

### GitHub Pages

Hosting your docs on GitHub Pages makes it easier for people to read the full documentation for your package. TypeDoc will generate markdown for your JSDoc comments, which will then be parsed and rendered into HTML by GitHub's Jekyll engine on their pages server.

The following steps describe how to set up a GitHub Pages site for your package as a project site.

1. Follow the instructions in the [GitHub Pages Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) to set up Pages on your GitHub account or organisation if not already configured.
1. Go to your repository for this package on GitHub and click `Settings`
1. Click `Pages`
1. Configure the branch as `main` (or `master`) and the directory to `/docs`
1. Configure the remaining settings as per your own preferences

### CircleCI

This template includes a basic [CircleCI](https://circleci.com) config which will install dependencies and run tests. You can use this to ensure that pull requests from contributors pass tests.

1. Login to [CircleCI](https://circleci.com) with GitHub
1. Click "Projects"
1. Click "Set up project" for this repository and follow the instructions

Also consider setting up branch protection and requiring passing checks from CircleCI for pull requests.

## Finish setting up your package

You'll need to update the following files and properties to finish setting up your package:

* `package.json` => `"name"`
* `package.json` => `"description"`
* `package.json` => `"repository.url"`
* `package.json` => `"author"`
* `CONTRIBUTING.md` -- Update for your project
* `LICENSE` -- Add your name to the copyright notice or replace with another license.
* `README.md` -- Time to update the file you're reading! Add your own description and usage examples for your package.

When you've completed the above, and you're ready to publish, `npm publish` will publish your package, complete with type definitions and docs.
