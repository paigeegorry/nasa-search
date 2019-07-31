export const fetchPhotosApi = (q = 'mars') => {
    return fetch(`https://images-api.nasa.gov/search?q=${q}`)
        .then(res => res.json())
        .then(json => {
            let obj = {};
            // eslint-disable-next-line
            json.collection.items.map(item => {
                if(item.data[0].keywords) {
                    // eslint-disable-next-line
                    return item.data[0].keywords.map(keyword => {
                        if(obj[keyword] >= 1) obj[keyword] +=1;
                        else obj[keyword] = 1;
                    });
                }
            });
            return {
                items: json.collection.items,
                keywords: obj
            };   
        })
        .catch(console.log)
}


fetchPhotosApi()
