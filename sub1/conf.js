var appConfig = {
    front: {},
    back: {
        bwfDomains: ['user', 'userfile'],
        controllers: ['user']
    },
    conf: {
        appName: 'Norse Test',
        dependencies: [
            norse.bwf.full,
            norse.bhdr
        ],
        dataPool: 'Bhdr',
        classLoader: 'Bwf',
        bwfDomain: true,
        bootstrap: false
    }
};