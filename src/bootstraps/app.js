import _ from 'lodash';
import $script from 'scriptjs';

function init() {
    console.log('app is loaded');
    console.log('lodash is available in app.js (but was bundled in core.js): ', _.map);

    console.log('attempting to load krux from external source with script.js');
    $script('http://beacon.krxd.net/optout_check', () => {
        console.log('loaded krux')
    });

    console.log('waiting 2 seconds to load a module that includes auto-prefixed sass');
    setTimeout(function () {
        require(['modules/box'], (box) => {
            box();
        });
    }, 2000)
}

export {init};