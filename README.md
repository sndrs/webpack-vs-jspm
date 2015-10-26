# JSPM vs Webpack

Comparison of JSPM and Webpack and how they could be used the Guardian.

### Status

Below is a list of requirments and progress toward it in each version:

| Requirement | Webpack | JSPM  |
|---|:-:|:-:|
| Create a self-contained `universal.js`. It should be loaded with a `<script>` tag and log its presence to the console. | ✔ |  |
| Create and conditionally async load an `augment.js`. It should include a sharable reference to lodash and log its presence to the console. | ✔ |  |
| On domready, load a `boostraps/app.js` and run its `init` method. `init` should log `_.map` to the console. | ✔ |  |
| Load `http://beacon.krxd.net/optout_check` (a 3rd party global) from `boostraps/app.js`'s `init` and anounce its arrival from a callback to the console. | ✔ |  |
| Load `modules/box` from `boostraps/app.js` after a 2 second delay. It should append a div to the page that is rendered as a red square by a sass dependency. | ✔ |  |
| The CSS should be autoprefixed. | ✔ |  |
| Load `dummy-interactive.js` (an unbundled AMD module) and log its presence to the console. No loader can be inlined in the HTML to achieve this. | ✔ |  |
| File edits should be viewable without needing to manually compile. |  |  |

## Setup

`make install`

## Build

`make`

Create JSPM/webpack dev builds.

`make compile`

Create JSPM/webpack prod builds, and report the gzipped file sizes.
