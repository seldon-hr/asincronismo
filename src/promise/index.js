const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!')
        } else {
            reject ('Upps!')
        }
    })
}

// somethingWillHappen()
//     .then(response => console.log(response))
//     .catch(err => console.error(err))

const vaAPasarAlgo = () => {
    return new Promise((resuelto, rechazado) => {
        if (false) {
            setTimeout(() => {
                resuelto('True')
            }, 2000)
        } else {
            const error = new Error('Upps!')
            rechazado(error)
        }
    })
}

// vaAPasarAlgo()
//     .then(response => console.log(response))
//     .catch(err => console.error(err))

Promise.all([somethingWillHappen(), vaAPasarAlgo()])
    .then(response => {
        console.log('Array of results', response)
    })
    .catch(err => {
       console.error(err) 
    })