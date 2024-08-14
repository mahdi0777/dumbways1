function isPayDebt (isPay) {
    return new Promise ((resolve, reject) => {
        if (!isPay) return reject ("your debt is fail")
            resolve ("your debt is pay")
    })
}
    
async function IsPayDebt () {
    try { console.log (await isPaydebt (false))

    } catch (error) {
    console.log (error)
    }
}

isPayDebt ()