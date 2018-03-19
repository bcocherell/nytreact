import React, { Component } from "react";
import API from "../../utils/API";
import {Grid, Row, Col, Panel, FormGroup, ControlLabel, FormControl, Button, Media} from 'react-bootstrap';
import "./Search.css";

class Search extends Component {
  state = {
    articles: [],
    searchTerm: "",
    startYear: "",
    endYear: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  addArticle = id => {
    API.addArticle(this.state.articles.find( article => article._id === id ))
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  searchNYT = query => {
    API.search(query)
      .then(res => this.setState({ articles: res.data.response.docs }))
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const {articles, ...query} = this.state;
    this.searchNYT(query);
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">
                  <strong><i className="fa fa-list-alt"></i> search parameters</strong>
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <form>
                  <FormGroup controlId="searchTerm">
                    <ControlLabel>search term:</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.value}
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup controlId="startYear">
                    <ControlLabel>start year (optional):</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.value}
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup controlId="endYear">
                    <ControlLabel>end year (optional):</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.value}
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <Button 
                    bsStyle="default"
                    disabled={!this.state.searchTerm}
                    onClick={this.handleFormSubmit}
                  >
                    <i className="fa fa-search"></i> search
                  </Button>
                </form>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">
                  <strong><i className="fa fa-table"></i> search results</strong>
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                {this.state.articles.length ? (
                  this.state.articles.map(article => (
                    <Media key={article._id}>
                      <Media.Left>
                        <img width={75} height={75} src={
                          article.multimedia.find(image => image.subtype === 'thumbnail') ? (
                              "https://www.nytimes.com/" + article.multimedia.find(image => image.subtype === 'thumbnail').url 
                            ) : (
                              "https://via.placeholder.com/75x75"
                            )
                          } alt="thumbnail" />
                      </Media.Left>
                      <Media.Body>
                        <Media.Heading><a href={article.web_url} target="_blank">{article.headline.main}</a></Media.Heading>
                        <p><small><em>{article.byline ? (article.byline.original) : null}</em></small></p>
                        <p>{article.snippet}</p>
                        <Button 
                          bsStyle="info"
                          bsSize="xsmall"
                          onClick={() => this.addArticle(article._id)} 
                        >
                          save article
                        </Button>
                      </Media.Body>
                    </Media>
                    ))
                ) : (
                  <div>no results to display</div>
                )}
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Search;
