export function searchQueryParams(url) {
    let query = null
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
    return Object.keys(obj).map(key => {
        return  { key: (key && key), value: (obj[key] && obj[key]) , desc: ''}
    })

}