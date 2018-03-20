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
      searchURL += "&end_date=" + endYear.trim() + "1231";
    }

    return axios.get(searchURL);
  },
  addArticle: function(articleData) {

    const article = {
      title: articleData.headline.main,
      byline: articleData.byline ? articleData.byline.original : null,
      pubdate: articleData.pub_date,
      thumbnail: articleData.multimedia.find(image => image.subtype === 'thumbnail') ? ("https://www.nytimes.com/" + articleData.multimedia.find(image => image.subtype === 'thumbnail').url) : null,
      url: articleData.web_url,
      snippet: articleData.snippet
    };

    return axios.post("/api/articles", article);
  },
  getArticles: function() {
    return axios.get("/api/articles");
  },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
};