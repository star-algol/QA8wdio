import hooks from './config/hooks.conf';
import base from './config/base.conf';

exports.config = {

    runner: 'local',

    maxInstances: 1,
    capabilities: [
        {
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['--window-size=1280,720']//fix: sets the certain window size
         },
        }
    ],

    services: ['devtools'],

    ...base,
    ...hooks

}
