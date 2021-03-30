module.exports = {
    specs: [
        './test/spec/*.js'
    ],
    exclude: [
        './test/spec/navigation.spec.js'
    ],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    bail: 0,

    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 1,

    baseUrl: 'https://localcoding.us',

    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    }
}
