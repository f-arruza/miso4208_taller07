exports.config = {
    host: 'hub',
    port: 4444,

    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        chromeOptions: {
          args: ['--headless', '--disable-gpu', '--window-size=800,600']
        }
    }],

    // ===================
    // Test Configurations
    // ===================
    logLevel: 'verbose',

    coloredLogs: true,

    screenshotPath: './errorShots/',

    baseUrl: 'https://losestudiantes.co',

    waitforTimeout: 100000,

    framework: 'jasmine',

    // reporters: ['mochawesome'],
    //
    // reporterOptions: {
    //     outputDir: '/reports/',
    //     mochawesome_filename: 'webdriverio-headless-testing.json'
    // },

    mochaOpts: {
        ui: 'bdd',
        timeout: 99999999
    },

    onPrepare: function() {
        // do something
    },

    before: function() {
        var chai = require('chai');
        global.expect = chai.expect;
        chai.Should();
    },

    after: function(failures, pid) {
        // do something
    },

    onComplete: function() {
        // do something
    }
};
