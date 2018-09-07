/**
 * Utility class to make fetch through the wikipedia api
 */
class WikiSearch {

    static get = (url) => {
        return fetch(url,{
            method: 'GET'
        });
    }

    static getJSON = (url) => {
        return WikiSearch.get(url).then( (response) => response.json())
    }

    /**
     * Gets the wikipedia summary of a string passed to this method
     * It uses origin=* according to the cors policy of wikipedia
     * @type {string} title to look for in wikipedia url
     */
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
