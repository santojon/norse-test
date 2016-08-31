var appConfig = {
    front: {},
    back: {
        bwfDomains: ['u']
    },
    conf: {
        appName: 'Norse Test',
        dependencies: [
            norse.bwf + '/bwf.full.js',
            norse.bhdr + '/bhdr.js'
        ],
        dataPool: 'Bhdr',
        classLoader: 'Bwf',
        bwfDomain: true,
        bootstrap: false
    }
};
