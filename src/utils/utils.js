export function searchQueryParams(url) {
    let query = ''
    for(let i = 0; i < url.length; i++) {
        if (url[i] === "?"){
            // console.log('indexOf',url.indexOf(url[i]))
            query = url.slice(url.indexOf(url[i]), url.length)
            // console.log('query',query)
            break
        }
    }
    return query
}

export function objToArray(obj){
    const arr = Object.keys(obj).map(key => {
        return { key: key, value: obj[key], desc: ''}
    })
    return arr
}