export function searchQueryParams(url) {
    let query = null
    let baseUrl = null

    for(let i = 0; i < url.length; i++) {
        if (url[i] === "?"){
            // console.log('indexOf',url.indexOf(url[i]))
            query = url.slice(url.indexOf(url[i]), url.length)
            baseUrl = url.slice(0, url.indexOf(url[i]))
            // console.log('query',query)
            break
        }
    }
    return {query, baseUrl}
}

export function objToArray(obj){
    return Object.keys(obj).map(key => {
        return  { key: (key && key), value: (obj[key] && obj[key]) , desc: ''}
    })

}

export function getNewParams(e, params) {
    const newParams = []
    params.forEach((item, id) => {
        if(id === Number(e.target.getAttribute('uniqueid'))) {
            return newParams.push({key: e.target.attributes.linkto.value === 'key' ? e.target.value : item.key, value: e.target.attributes.linkto.value === 'value' ? e.target.value : item.value, desc: ''})
        }else {
            return newParams.push(item)
        }
        // return setParams([...params, ...params[id]])

    })
    return newParams
}

export function arrToQueryString(arr){
    const newArr = arr.map(el => `${el.key}=${el.value}`).join('&')
    return `?${newArr}`
}