new User({
    name: 'User',
    username: 'user'
}).save((u) => {
    console.log(u)
    new Userfile({
        name: 'Test',
        type: 'txt',
        owner: u,
        text: ''
    }).save((t) => {
        console.log(t)
    })
})