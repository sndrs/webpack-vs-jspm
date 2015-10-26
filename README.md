# JSPM vs Webpack

Comparison of JSPM and Webpack and how they could be used the Guardian.

### Status

Below is a list of requirments and progress toward it in each version:

| Requirement | Webpack | JSPM  |
|---|:-:|:-:|
| Create a self-contained `universal.js` that is loaded with a `<script>` tag. | ✔ |  |
| Create a `augment.js` that includes a sharable reference to lodash. | ✔ |  |
| On domready, load a `boostraps/app.js` and run its `init` method. log `_.map` to the console. | ✔ |  |
| Load `http://beacon.krxd.net/optout_check` from `boostraps/app.js`'s `init` and anounce the load from a callback. | ✔ |  |
| Load `modules/box` from `boostraps/app.js` after 2 seconds. It should append a div to the page that is rendered as a red square by a sass dependency. | ✔ |  |
| The CSS should be autoprefixed. | ✔ |  |
| Load an non-bundled AMD module. No loader should be inlined in the HTML to achieve this. | ✔ |  |
| files edits should be viewable without needing to manually compile |  |  |

## Setup

`make install`

## Build

`make` /

Create JSPM/webpack dev builds.

`make compile`

Create JSPM/webpack prod builds, and report the gzipped file sizes.
