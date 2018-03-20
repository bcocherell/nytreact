import React, { Component } from "react";
import Moment from 'react-moment';
import API from "../../utils/API";
import {Grid, Row, Col, Panel, Button, Media, Modal} from 'react-bootstrap';
import "./Articles.css";

class Search extends Component {
  state = {
    articles: [],
    show: false
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data})
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.handleShow())
      .catch(err => console.log(err));
  };
  
  handleClose = () => {
    this.setState({ show: false });
    this.loadArticles();
  }

  handleShow = () => {
    this.setState({ show: true });
  }
  
  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">
                  <strong><i className="fa fa-floppy-o"></i> saved articles</strong>
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                {this.state.articles.length ? (
                  this.state.articles.map(article => (
                    <Media key={article._id}>
                      <Media.Left>
                        <img width={75} height={75} src={
                          article.thumbnail || "https://via.placeholder.com/75x75"
                          } alt="thumbnail" />
                      </Media.Left>
                      <Media.Body>
                        <Media.Heading><a href={article.url} target="_blank">{article.title}</a></Media.Heading>
                        <p><small><em>{article.byline} 
                          &nbsp;(<Moment format="MM/DD/YYYY">{article.pubdate}</Moment>)
                        </em></small></p>
                        <p>{article.snippet}</p>
                        <Button 
                          bsStyle="danger"
                          bsSize="xsmall"
                          onClick={() => this.deleteArticle(article._id)} 
                        >
                          delete
                        </Button>
                      </Media.Body>
                    </Media>
                    ))
                ) : (
                  <div>no articles saved</div>
                )}
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
        <Modal bsSize="small"
          aria-labelledby="contained-modal-title-sm"
          show={this.state.show} 
          onHide={this.handleClose}
        >
          <Modal.Body>
            <h3 className="text-center"><i className="fa fa-trash-o" aria-hidden="true"></i> delete successful :)</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>close</Button>
          </Modal.Footer>
        </Modal>
      </Grid>
    );
  }
}

export default Search;
