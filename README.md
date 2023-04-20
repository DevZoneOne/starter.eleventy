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

In this readme, you find how to get started with this template, but this
starter is developed as part of a blog article on [`DevZone.one`](https://devzone.one), you find a much more detailed walk-through on
[**DevZone.one - Get started with Eleventy**](https://devzone.one/posts/get-started-with-eleventy)

## Demo

The latest version of this template is deployed on:
https://starter-eleventy.devzoneone.app
_(**Please note:** The template and therefore the demo only contains a minimum of styling, as that is the purpose of this starter template)_

## How to use the template

Don't fork this repository, that would give you all the branches and
commit history, not what you want.

- **GitHub** If you're going to put your repo on Github, use the green
  `Use this template` button and either directly create a new repo, or
  open a codespace (online IDE). This will copy over all the files but without any git-related history.

## Start developing

1. Install the dependencies:<br>
   `$ npm i`
2. Run locally in watch mode (with HTML code prettified):<br>
   `$ npm start`
3. Build for production (with HTML code minified):<br>
   `$ npm run build`

## Inspiration & Credits

This template starter is partly based on:

- https://github.com/11ty/eleventy-base-blog
- https://github.com/kevin-powell/new-website
