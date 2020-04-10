import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { changeBackground } from "../includes/bgFader.js"

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      categoriesData: []
    };
  }

  // fetch the data for the categories from our data before rendering
  componentDidMount() {
    // default to LA
    const { match, history } = this.props;
    if (match.params.city == undefined) {
      history.push("/la");
      return;
    }

    changeBackground(match.params.city)

    // http request spoof
    const self = this;
    axios
      .get(`/api/${match.params.city}`)
      .then(function(response) {
        self.setState(
          {
            categoriesData: response.data
          },
          () => {
            console.log(self.state);
          }
        );
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});
  }

  // loop through data to get categories
  loopCategories = () => {
    const match = this.props.match;
    return this.state.categoriesData.map((item, i) => {
      return (
        <div className="category" key={i}>
          <Link to={`/${match.params.city}/${item.title}`} className="title">
            {item.title}
          </Link>
          <div className="link-section">{this.loopGroups(item)}</div>
        </div>
      );
    });
  };

  // loop through the groups within each category
  loopGroups = category => {
    const match = this.props.match;
    return category.listings.map((item, i) => {
      return (
        <Link
          to={`/${match.params.city}/${category.title}/${item.slug}`}
          key={i}
          className="link"
        >
          {item.name}
        </Link>
      );
    });
  };

  // render the main page
  render() {
    return (
      <div className="home">
        <div className="container">
          <h1>
            Connecting People
            <br />
            Everywhere
          </h1>
          <section className="categories">{this.loopCategories()}</section>
          <section className="trending">
            <input
              type="text"
              name="search"
              className="search"
              placeholder="Search Classifieds, Jobs, Housing, Discussions, Personals..."
            />
            <div className="title">
              <i className="far fa-clock"></i>
              Trending Now
            </div>
            <div className="trending-tags">
              <div className="tag">Apple Macbook</div>
              <div className="tag">Sony XBR900</div>
              <div className="tag">Pioneer XDJ</div>
              <div className="tag">Sculpting Classes</div>
              <div className="tag">Apartments</div>
              <div className="tag">Home Repair</div>
              <div className="tag">Masseuse</div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
