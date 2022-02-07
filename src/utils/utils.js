export function getNewUrl(url = '') {
    const baseUrl = url.split('?')[0]
    try{
        const queryString = new URL(url)
        return {baseUrl, queryString}
    }catch (e) {
        const queryString = new URL('http://' + url)
        return {baseUrl, queryString}
    }
}

export function getNewParams(e, params) {
    return params.map((item, id) => {
        return id === Number(e.target.getAttribute('uniqueid'))
        ? {...item, [e.target.attributes.linkto.value]: e.target.value}
        : item
    })
}

export function arrToQueryString(arr = []) {
    const newQuery = arr.filter(el => el.key || el.value)
        .map(el => `${el.key || ''}${el.value ? '=' + el.value : ''}`)
        .join('&')
    return `?${newQuery}`
}

export function urlToArrOfParams(value) {
    const {queryString} = getNewUrl(value)
    let arr = []
    for (const pair of queryString.searchParams.entries()) {
        arr.push({key: pair[0] || '', value: pair[1] || '', desc: ''})
    }
    return arr
}