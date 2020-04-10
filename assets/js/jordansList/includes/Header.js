import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { changeBackground } from "./bgFader.js"

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      cityDropDown: false,
      cities: [],
      selectedCity: "Los Angeles"
    };
  }

  // fetch the data for the categories from our data before rendering
  componentWillMount() {
    const self = this;
    axios
      .get(`/api/cities`)
      .then(function(response) {
        const { match, history } = self.props;
        const city = response.data.filter(item => {
          return item.slug == match.params.city;
        });
        self.setState(
          {
            cities: response.data,
            selectedCity: city[0].title
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

  // get all the cities for the dropdown from data
  loopCities = () => {
    const self = this;
    return this.state.cities.map((city, i) => {
      if (city.title != this.state.selectedCity) {
        return (
          <li key={i} onClick={this.selectCity.bind(null, city)}>
            {city.title}
          </li>
        );
      }
    });
  };

  // display the dropdown
  clickedCityDropDown = () => {
    this.setState({
      cityDropDown: !this.state.cityDropDown
    });
  };

  // change the active city and refresh the page accordingly
  selectCity = city => {
    this.setState(
      {
        selectedCity: city.title
      },
      () => {
        changeBackground(city.slug)
        const { match, history } = this.props;
        history.push(`/${city.slug}`);
      }
    );
  };

  render() {
    const { match, history } = this.props;
    return (
      <div className="container">
        <header>
          <div className="left-menu">
            <Link to={`/${match.params.city}`} className="logo">
              Jordan'sList
            </Link>
            <div className="city" onClick={this.clickedCityDropDown}>
              {this.state.selectedCity}
              <i
                className={`fa fa-chevron-down ${
                  this.state.cityDropDown ? "active" : ""
                }`}
              ></i>
              <div
                className={`dropdown ${
                  this.state.cityDropDown ? "active" : ""
                }`}
              >
                <ul>{this.loopCities()}</ul>
              </div>
            </div>
          </div>
          <div className="right-menu">
            <div className="user-img">
              <i className="fa fa-user"></i>
            </div>
            <div className="user-dropdown">
              My Account <i className="fa fa-chevron-down"></i>
            </div>
            <div className="post-btn">Post to Classifieds</div>
          </div>
        </header>
      </div>
    );
  }
}
