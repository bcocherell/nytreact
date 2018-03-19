import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";

import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";

import {Grid, Row, Col, Panel, FormGroup, ControlLabel, FormControl, Button, Media} from 'react-bootstrap';
import "./Articles.css";

// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {
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

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

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
                    <i className="fa fa-search"></i> Search
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
                        <p><small><em>{article.byline.original}</em></small></p>
                        <p>{article.snippet}</p>
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

//  <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>What Books Should I Read?</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 value={this.state.title}
//                 onChange={this.handleInputChange}
//                 name="title"
//                 placeholder="Title (required)"
//               />
//               <Input
//                 value={this.state.author}
//                 onChange={this.handleInputChange}
//                 name="author"
//                 placeholder="Author (required)"
//               />
//               <TextArea
//                 value={this.state.synopsis}
//                 onChange={this.handleInputChange}
//                 name="synopsis"
//                 placeholder="Synopsis (Optional)"
//               />
//               <FormBtn
//                 disabled={!(this.state.author && this.state.title)}
//                 onClick={this.handleFormSubmit}
//               >
//                 Submit Book
//               </FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Books On My List</h1>
//             </Jumbotron>
//             {this.state.books.length ? (
//               <List>
//                 {this.state.books.map(book => (
//                   <ListItem key={book._id}>
//                     <Link to={"/books/" + book._id}>
//                       <strong>
//                         {book.title} by {book.author}
//                       </strong>
//                     </Link>
//                     <DeleteBtn onClick={() => this.deleteBook(book._id)} />
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>

export default Articles;
