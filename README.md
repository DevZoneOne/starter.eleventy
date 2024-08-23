# Starter template for Eleventy

This is an example markdown / liquid starter template for new Eleventy (11ty) projects.
It has preconfigured:

- Eleventy
  - Navigation plugin
  - RSS plugin
  - Render plugin
  - HTML Base plugin
  - Markdown configured with footnotes
- Liquid-based scripts (instead of nunjucks)
- SASS[^styling]
- PostCSS
  - PostCSS hash
  - AutoPrefixer
  - CSS Nano
- Prettier (on local builds)
- HTML Minifier (on production builds)
- Example code
  - Shortcode (year)
  - Filters (htmlDate, readableDate, head, min, md)

[^styling]: Styling kept minimal on purpose.

## Detailed description

In this readme, you find how to get started with this template, but this
starter is developed as part of a blog article on [`DevZone.one`](https://devzone.one), you find a much more detailed walk-through on
[**DevZone.one - Get started with Eleventy**](https://devzone.one/posts/get-started-with-eleventy)

## Demo

The latest version of this template is deployed on:
https://starter-eleventy.devzoneone.app
_(**Please note:** The template and therefore the demo only contains a minimum of styling, as that is the purpose of this starter template)_

## How to use the template

Don't fork this repository. That would give you all the branches and
commit history that is different from what you want.

- **GitHub** If you're going to put your repo on Github, use the green
  `Use this template` button to create a new repo or
  open a codespace (online IDE). This will copy over all the files but without any git-related history.

## Start developing

1. Install the dependencies:<br>
   `$ npm i`
2. Run locally in watch mode (with HTML code prettified):<br>
   `$ npm start`
3. Build for production (with HTML code minified):<br>
   `$ npm run build`

## Inspiration & Credits

This template starter is partly based on the following:

- https://github.com/11ty/eleventy-base-blog
- https://github.com/kevin-powell/new-website
