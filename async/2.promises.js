const promise = new Promise ((resolve, reject) => {
    const isPay = false

    if (!isPay == false)
        return reject ("Bayar dulu hutangmu ya adik adik")
    resolve ("Udah bayar hutang lah gua gila")
})

promise.then ((value) => {
    console.log (value)
})

.catch ((value) => {
    console.log (value) })

    