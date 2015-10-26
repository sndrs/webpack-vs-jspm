// ensure external AMD modules can be loaded
import 'script!curl-amd/dist/curl/curl';

// front-load the dependency, even though it's not used in this module
import 'lodash';

import domready from 'domready';
import $script from 'scriptjs';

console.log('snowflakes is loaded');

domready(function () {
    console.log('dom is ready, so loading app.js');

    // this is a webpack code split
    // http://webpack.github.io/docs/code-splitting.html
    require(['bootstraps/app'], (app) => {
        app.init();
    });

    // fake an interactive page
    if (window.config.page === 'interactive') {
        // this curl's require
        window.require(['./dummy-interactive'], function (interactive) {
            console.log('interactive', interactive);
        });
    }
})
