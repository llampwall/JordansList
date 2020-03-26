import React, { Component } from "react";
import axios from "axios";
import qs from "query-string";
import { Link } from "react-router-dom";

// this is for showing all listings
// ex. url: 'la/for-sale' or '/la/for-sale/cars-and-trucks'

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      min_price: 0,
      max_price: 10000000,
      select_view: "gallery",
      sort_by: "price-desc",
      itemsData: []
    };
  }

  // figure out what listings we should be displaying client-side
  componentWillMount() {
    // http request spoof
    const { match, location, history } = this.props;
    const self = this;

    // check if :listing is set, and use it if it is
    let listing = "";
    if (match.params.listings != undefined) {
      listing = "/" + match.params.listings;
    }

    // try to parse url query parameters
    const queryParams = qs.parse(this.props.location.search);
    const { min_price, max_price, select_view, sort_by } = queryParams;
    if (min_price != undefined) {
      console.log("willmount queryParams: ");
      console.log(queryParams);
      axios
        .get(
          `/api/${match.params.city}/${match.params.category}${listing}?min_price=${min_price}&max_price=${max_price}&select_view=${select_view}&sort_by=${sort_by}`
        )
        .then(function(response) {
          self.setState(
            {
              itemsData: response.data
            },
            () => {
              // console.log(self.state);
            }
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      // otherwise do a regular request
      axios
        .get(`/api/${match.params.city}/${match.params.category}${listing}`)
        .then(function(response) {
          self.setState(
            {
              itemsData: response.data
            },
            () => {
              // console.log(self.state);
            }
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  // get all the item data and loop through it to display
  loopItems = () => {
    // for formatting currency without decimals
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      minimumFractionDigits: 0,
      currency: "USD"
    });

    var cityTranslator = {
      'la': 'Los Angeles, CA',
      'nyc': 'New York City, NY',
      'mia': 'Miami, FL',
      'bos': 'Boston, MA'
    }

    const match = this.props.match;
    let listing = "";
    if (match.params.listings != undefined) {
      listing = "/" + match.params.listings;
    }
    const addr = `/${match.params.city}/${match.params.category}${listing}`

    return this.state.itemsData.map((item, index) => {
      return (
        <Link to={`${addr}/${item.id}`} className="item" key={item.id}>
          <div
            className="image"
            style={{
              backgroundImage: `url('${item.images}')`
            }}
          >
            <div className="price">{formatter.format(item.price)}</div>
          </div>
          <div className="details">
            <h5>{`${item.year} ${item.make} ${item.model}`}</h5>
            <i className="fa fa-star"></i>
            <h6>{cityTranslator[item.city]}</h6>
          </div>
        </Link>
      );
    });
  };

  // only show make and model selectors if we are in /cars-and-trucks/
  showMakeModel = () => {
    const { match, location, history } = this.props;

    if (match.params.listings == "cars-and-trucks") {
      return (
        <div
          style={{
            display: "flex"
          }}
        >
          <div className="form-group make">
            <label>Make</label>
            <select
              name="make"
              className="make-select"
              onChange={this.handleChange}
            >
              <option value="Audi">Audi</option>
              <option value="BMW">BMW</option>
              <option value="Porsche">Porsche</option>
            </select>
          </div>
          <div className="form-group model">
            <label>Model</label>
            <select
              name="model"
              className="model-select"
              onChange={this.handleChange}
            >
              <option value="325i">325i</option>
              <option value="A3">A3</option>
              <option value="A8">A8</option>
              <option value="Taycan">Taycan</option>
            </select>
          </div>
        </div>
      );
    }
  };

  // handler for filter changes
  handleChange = event => {
    const name = event.target.name;
    const value =
      event.target.type == "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
      }
    );
  };

  // handle update button click
  submitFilters = () => {
    const self = this;
    let { match, location, history } = this.props;
    const { min_price, max_price, select_view, sort_by } = this.state;

    // check if :listing is set, and use it if it is
    let listing = "";
    if (match.params.listings != undefined) {
      listing = "/" + match.params.listings;
    }

    // document.location.href = `/${match.params.city}/${match.params.category}${listing}?min_price=${min_price}&max_price=${max_price}&select_view=${select_view}&sort_by=${sort_by}`;

    let newSearch = `min_price=${min_price}&max_price=${max_price}&select_view=${select_view}&sort_by=${sort_by}`;

    history.push(
      `/${match.params.city}/${match.params.category}${listing}?min_price=${min_price}&max_price=${max_price}&select_view=${select_view}&sort_by=${sort_by}`
    );

    location = this.props.location;
    console.log(newSearch);

    let queryParams = qs.parse(newSearch);

    if (queryParams.min_price != undefined) {
      axios
        .get(
          `/api/${match.params.city}/${match.params.category}${listing}?min_price=${queryParams.min_price}&max_price=${queryParams.max_price}&select_view=${queryParams.select_view}&sort_by=${queryParams.sort_by}`
        )
        .then(function(response) {
          self.setState(
            {
              itemsData: response.data
            },
            () => {
              console.log(self.state);
            }
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  render() {

    if (this.state.itemsData.length == 0) {
      return (
        <div className="oops">
          <h1>
            Sorry, no results found.
          </h1>
        </div>
      );
    }

    return (
      <div className="listings">
        <div className="container">
          <section id="filter">
            <div className="form-group price">
              <label>Price</label>
              <div className="minmax">
                <select
                  name="min_price"
                  className="min-price"
                  value={this.state.min_price}
                  onChange={this.handleChange}
                >
                  <option value="0">min</option>
                  <option value="10000">10,000</option>
                  <option value="50000">50,000</option>
                  <option value="100000">100,000</option>
                </select>
                <select
                  name="max_price"
                  className="max-price"
                  value={this.state.max_price}
                  onChange={this.handleChange}
                >
                  <option value="10000">10,000</option>
                  <option value="50000">50,000</option>
                  <option value="100000">100,000</option>
                  <option value="10000000">max</option>
                </select>
              </div>
            </div>
            {this.showMakeModel()}
            <div className="form-group button">
              <div className="primary-btn" onClick={this.submitFilters}>
                Update
              </div>
              <div className="clear-btn">Clear</div>
            </div>
          </section>
        </div>

        <section id="content">
          <div className="container">
            <div className="whitebox">
              <section id="options">
                <div className="form-group view-dropdown">
                  <select
                    name="select_view"
                    className="select-view"
                    value={this.state.select_view}
                    onChange={this.handleChange}
                  >
                    <option value="gallery">Gallery</option>
                    <option value="list">List</option>
                  </select>
                </div>
                <div className="form-group sort">
                  <select
                    name="sort_by"
                    className="sort-by"
                    value={this.state.sort_by}
                    onChange={this.handleChange}
                  >
                    <option value="price-dsc">Price - Highest</option>
                    <option value="price-asc">Price - Lowest</option>
                    <option value="date-dsc">Newest</option>
                    <option value="date-asc">Oldest</option>
                  </select>
                </div>
              </section>

              <section id="results">{this.loopItems()}</section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
