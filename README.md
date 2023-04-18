# Starter template for Eleventy

This is a template for new Eleventy (11ty) projects.
It has preconfigured:

- Eleventy
  - Navigation plugin
  - RSS plugin
  - Render plugin
  - HTML Base plugin
- SASS _(Styling kept minimal on purpose)_
- PostCSS
  - PostCSS hash
  - AutoPrefixer
  - CSS Nano
- Prettier (on local builds)
- HTML Minifier (on production builds)
- Example code
  - Shortcode (year)
  - Filters (htmlDate, readableDate, head, min, md)

## Detailed description

In this readme you find how to get started with this template, but this
starter is developed as past of a blog article on [`DevZone.one`](https://devzone.one), you find a much more detailed walk-through on:
[**DevZone.one - Get started with Eleventy**](https://devzone.one/blogs/get-started-with-eleventy)

## Demo

The lastest version of this template is deployed on:
https://starter-eleventy.web.app
_(**Please note:** The template and therefor the demo only contains a minimum of styling, as that is purpose of this stater template)_

## How to use the template

Don't fork this repository, that would give you all the branches and
commit history, not what you want.

- **GitHub** If you're going to put your repo on Github, use the green
  `Use this template` button and either directly create a new repo, or
  open a codespace (online IDE). This will copy over all the files but without any git related history.

## Start developing

1. Install the dependencies:<br>
   `$ npm i`
2. Run locally in watch mode (with html code prettified):<br>
   `$ npm start`
3. Build for production (with html code minified):<br>
   `$ npm run build`

## Firebase hosting

This template is automatically deployed to Firebase hosting for demo purposes. Please cleanup or adjust according to your needs as follows:

### Not using firebase

1. Delete `.firebaserc` and `firebase.json`
2. Delete the two workflows in `.github/workflows` or modify them to your own needs.

### Using firebase for your own projects:

The easiest way to get automatic deployment working via GitHub actions as used in the template, is to delete all firebase related files as described above and use the Firebase CLI to configure it again for your Firebase project. After that, continue as follows:

1. Initiate firebase hosting in your project:<br>
   `$ firebase init hosting`
2. Create firebase actions scripts. This step will also create a
   service account in your firebase project and creates a secret in GitHub to allow the actions to update your firebase project.<br>
   `$ firebase init hosting:github`

## Inspiration & Credits

This template starter is partly based on:

- https://github.com/11ty/eleventy-base-blog
- https://github.com/kevin-powell/new-website
