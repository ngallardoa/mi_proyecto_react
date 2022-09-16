export const customFetch = (products) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
            reject(console.log(""))
        }, 2000)
    })
}