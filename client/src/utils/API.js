import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="
const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {

    const {searchTerm, startYear, endYear} = query;

    let searchURL = BASEURL + APIKEY + "&q=" + searchTerm.trim();

    if (parseInt(startYear, 10)) {
      searchURL += "&begin_date=" + startYear.trim() + "0101";
    }
    
    if (parseInt(endYear, 10)) {
      searchURL += "&end_date=" + endYear.trim() + "0101";
    }

    console.log(searchURL);

    return axios.get(searchURL);
  }
};