
export const fetchPhotosApi = (q = 'mars') => {
    return fetch(`https://images-api.nasa.gov/search?q=${q}`)
        .then(res => res.json())
        .then(json => json.collection.items)
        .catch(console.log)
}

fetchPhotosApi()
