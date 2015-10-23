import "lodash";

import domready from 'domready';

console.log('snowflakes is loaded');

domready(function () {
    console.log('dom is ready, so loading app.js');
    require(['bootstraps/app'], (app) => {
        app.init();
    });
})
