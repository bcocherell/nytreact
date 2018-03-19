import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="
const APIKEY = "f6009463b5b54235b7198f5bcc9f1dc0";

// Export an object with a "search" method that searches the NYT API for the passed query
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
  },
  addArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};