# JSPM vs Webpack

Comparison of JSPM and Webpack and how they could be used the Guardian.

## Requirements

One single app should work with both setups. This is obviously unnatural in production, but necessary to get it there.

- [ ] build and load a `universal.js` which has no dependencies and can be loaded with just a `<script>` tag.
- [ ] build a load a `snowflakes.js` which will pack lodash in a way that can be shared.
- [ ] on domready, load `boostraps/app.js` and run its `init` method.
- [ ] `boostraps/app.js`'s `init` should load a remote script and anounce the load from a callback.
- [ ] `boostraps/app.js` should load `modules/box`, which should depend on a sass file. It should paint a red box to the screen.
- [ ] the sass file should be transformed to CSS and be autoprefixed.
- [ ] it should load and run a remote AMD module.

## Setup

`make install`

## Build

`make`

This will create a `build` dir in JSPM/webpack, and report the minifed + gzipped file sizes.