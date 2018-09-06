class WikiSearch {

    static get = (url) => {
        return fetch(url,{
            method: 'GET'
        });
    }

    static getJSON = (url) => {
        return WikiSearch.get(url).then( (response) => response.json())
    }


    static getInfoWindowsSummary = (markerTitle) => {

                const url=`https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${markerTitle}`;
                return WikiSearch.getJSON(url)
                .then(data => {
                    const object = data.query.pages;
                    for (let i in object) {
                        for (let j in object[i]) {
                            if(j === "extract") {

                                return object[i][j];

                            }
                        }
                    }

                })
                .catch(e => {
                    console.log('error fetching data:', e)
                    return e;
                })



    }

}

export default WikiSearch;
