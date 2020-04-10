webpackJsonp([0],{

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bgFader = function () {
  function bgFader() {
    _classCallCheck(this, bgFader);
  }

  _createClass(bgFader, [{
    key: 'changeBackground',


    // handle background changing
    value: function changeBackground(city) {
      if (city == 'mia') {
        document.getElementsByClassName('la')[0].classList.remove('opaque');
        document.getElementsByClassName('nyc')[0].classList.remove('opaque');
        document.getElementsByClassName('bos')[0].classList.remove('opaque');
        document.getElementsByClassName('mia')[0].classList.add('opaque');
      } else if (city == 'nyc') {
        document.getElementsByClassName('la')[0].classList.remove('opaque');
        document.getElementsByClassName('nyc')[0].classList.add('opaque');
        document.getElementsByClassName('bos')[0].classList.remove('opaque');
        document.getElementsByClassName('mia')[0].classList.remove('opaque');
      } else if (city == 'bos') {
        document.getElementsByClassName('la')[0].classList.remove('opaque');
        document.getElementsByClassName('nyc')[0].classList.remove('opaque');
        document.getElementsByClassName('bos')[0].classList.add('opaque');
        document.getElementsByClassName('mia')[0].classList.remove('opaque');
      } else {
        document.getElementsByClassName('la')[0].classList.add('opaque');
        document.getElementsByClassName('nyc')[0].classList.remove('opaque');
        document.getElementsByClassName('bos')[0].classList.remove('opaque');
        document.getElementsByClassName('mia')[0].classList.remove('opaque');
      }
    }
  }]);

  return bgFader;
}();

var _ref = new bgFader();

var changeBackground = _ref.changeBackground;
exports.changeBackground = changeBackground;

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(23);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(83);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(107);

var _Header = __webpack_require__(269);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(272);

var _Home2 = _interopRequireDefault(_Home);

var _Category = __webpack_require__(271);

var _Category2 = _interopRequireDefault(_Category);

var _Item = __webpack_require__(273);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Listings from './pages/Listings.js'


var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_reactRouterDom.Route, { path: '/:city', component: _Header2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category', component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings', component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings/:item', component: _Item2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(23);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// custom modular gallery component

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery(props) {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this));

    _this.prevBtn = function () {
      _this.setState({
        currIndex: _this.state.currIndex - 1
      });
    };

    _this.nextBtn = function () {
      _this.setState({
        currIndex: _this.state.currIndex + 1
      });
    };

    _this.clickedThumb = function (index) {
      _this.setState({
        currIndex: index
      });
    };

    _this.loopImages = function () {
      return _this.state.allImgs.map(function (img, i) {
        return _react2.default.createElement('div', { className: 'thumb ' + (_this.state.currIndex == i ? 'active' : ''), key: i, onClick: _this.clickedThumb.bind(null, i), style: {
            "backgroundImage": 'url(\'' + img + '\')' } });
      });
    };

    _this.state = {
      allImgs: [],
      currIndex: 0
    };
    return _this;
  }

  _createClass(Gallery, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var allImgs = [this.state.image, '/img/car3.jpg', '/img/car8.jpg', '/img/car17.jpg', '/img/car5.jpg', '/img/car21.jpg'];

      this.setState({
        allImgs: allImgs
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // update the state and rerender when we get props
      if (nextProps.image !== this.props.image) {
        var img = nextProps.image;
        this.setState({
          allImgs: [nextProps.image, '/img/car3.jpg', '/img/car8.jpg', '/img/car17.jpg', '/img/car5.jpg', '/img/car21.jpg']
        });
      }

      console.log(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      console.log(this.props);

      return _react2.default.createElement(
        'div',
        { className: 'gallery' },
        _react2.default.createElement(
          'div',
          { className: 'slider' },
          _react2.default.createElement(
            'div',
            { className: 'main-img', style: {
                "backgroundImage": 'url(\'' + this.state.allImgs[this.state.currIndex] + '\')'
              } },
            _react2.default.createElement(
              'div',
              { className: 'arrows' },
              _react2.default.createElement(
                'div',
                { className: 'left-arrow ' + (this.state.currIndex == 0 ? 'disabled' : ''), onClick: this.prevBtn },
                _react2.default.createElement('i', { className: 'fa fa-arrow-left' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'right-arrow ' + (this.state.currIndex == this.state.allImgs.length - 1 ? 'disabled' : ''), onClick: this.nextBtn },
                _react2.default.createElement('i', { className: 'fa fa-arrow-right' })
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'thumbs' },
          this.loopImages()
        )
      );
    }
  }]);

  return Gallery;
}(_react.Component);

exports.default = Gallery;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(23);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(107);

var _axios = __webpack_require__(85);

var _axios2 = _interopRequireDefault(_axios);

var _bgFader = __webpack_require__(166);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.loopCities = function () {
      var self = _this;
      return _this.state.cities.map(function (city, i) {
        if (city.title != _this.state.selectedCity) {
          return _react2.default.createElement(
            "li",
            { key: i, onClick: _this.selectCity.bind(null, city) },
            city.title
          );
        }
      });
    };

    _this.clickedCityDropDown = function () {
      _this.setState({
        cityDropDown: !_this.state.cityDropDown
      });
    };

    _this.selectCity = function (city) {
      _this.setState({
        selectedCity: city.title
      }, function () {
        (0, _bgFader.changeBackground)(city.slug);
        var _this$props = _this.props,
            match = _this$props.match,
            history = _this$props.history;

        history.push("/" + city.slug);
      });
    };

    _this.state = {
      cityDropDown: false,
      cities: [],
      selectedCity: "Los Angeles"
    };
    return _this;
  }

  // fetch the data for the categories from our data before rendering


  _createClass(Header, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var self = this;
      _axios2.default.get("/api/cities").then(function (response) {
        var _self$props = self.props,
            match = _self$props.match,
            history = _self$props.history;

        var city = response.data.filter(function (item) {
          return item.slug == match.params.city;
        });
        self.setState({
          cities: response.data,
          selectedCity: city[0].title
        }, function () {
          console.log(self.state);
        });
      }).catch(function (error) {
        console.log(error);
      }).then(function () {});
    }

    // get all the cities for the dropdown from data


    // display the dropdown


    // change the active city and refresh the page accordingly

  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      return _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "header",
          null,
          _react2.default.createElement(
            "div",
            { className: "left-menu" },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/" + match.params.city, className: "logo" },
              "Jordan'sList"
            ),
            _react2.default.createElement(
              "div",
              { className: "city", onClick: this.clickedCityDropDown },
              this.state.selectedCity,
              _react2.default.createElement("i", {
                className: "fa fa-chevron-down " + (this.state.cityDropDown ? "active" : "")
              }),
              _react2.default.createElement(
                "div",
                {
                  className: "dropdown " + (this.state.cityDropDown ? "active" : "")
                },
                _react2.default.createElement(
                  "ul",
                  null,
                  this.loopCities()
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "right-menu" },
            _react2.default.createElement(
              "div",
              { className: "user-img" },
              _react2.default.createElement("i", { className: "fa fa-user" })
            ),
            _react2.default.createElement(
              "div",
              { className: "user-dropdown" },
              "My Account ",
              _react2.default.createElement("i", { className: "fa fa-chevron-down" })
            ),
            _react2.default.createElement(
              "div",
              { className: "post-btn" },
              "Post to Classifieds"
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(23);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(83);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(247);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(23);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(85);

var _axios2 = _interopRequireDefault(_axios);

var _queryString = __webpack_require__(505);

var _queryString2 = _interopRequireDefault(_queryString);

var _reactRouterDom = __webpack_require__(107);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// this is for showing all listings
// ex. url: 'la/for-sale' or '/la/for-sale/cars-and-trucks'

var Category = function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    _classCallCheck(this, Category);

    var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this));

    _this.loopItems = function () {
      // for formatting currency without decimals
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        minimumFractionDigits: 2,
        currency: "USD"
      });

      var cityTranslator = {
        'la': 'Los Angeles, CA',
        'nyc': 'New York City, NY',
        'mia': 'Miami, FL',
        'bos': 'Boston, MA'
      };

      var match = _this.props.match;
      var listing = "";
      if (match.params.listings != undefined) {
        listing = "/" + match.params.listings;
      }
      var addr = "/" + match.params.city + "/" + match.params.category + listing;

      return _this.state.itemsData.map(function (item, index) {
        return _react2.default.createElement(
          _reactRouterDom.Link,
          { to: addr + "/" + item.id, className: "item", key: item.id },
          _react2.default.createElement(
            "div",
            {
              className: "image",
              style: {
                backgroundImage: "url('" + item.images + "')"
              }
            },
            _react2.default.createElement(
              "div",
              { className: "price" },
              formatter.format(item.price)
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "details" },
            _react2.default.createElement(
              "h5",
              null,
              "" + item.title
            ),
            _react2.default.createElement("i", { className: "fa fa-star" }),
            _react2.default.createElement(
              "h6",
              null,
              cityTranslator[item.city]
            )
          )
        );
      });
    };

    _this.showMakeModel = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;


      if (match.params.listings == "cars-and-trucks") {
        return _react2.default.createElement(
          "div",
          {
            style: {
              display: "flex"
            }
          },
          _react2.default.createElement(
            "div",
            { className: "form-group make" },
            _react2.default.createElement(
              "label",
              null,
              "Make"
            ),
            _react2.default.createElement(
              "select",
              {
                name: "make",
                className: "make-select",
                onChange: _this.handleChange
              },
              _react2.default.createElement(
                "option",
                { value: "all" },
                "All"
              ),
              _this.displayMakeOptions()
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "form-group model" },
            _react2.default.createElement(
              "label",
              null,
              "Model"
            ),
            _react2.default.createElement(
              "select",
              {
                name: "model",
                className: "model-select",
                onChange: _this.handleChange
              },
              _react2.default.createElement(
                "option",
                { value: "all" },
                "All"
              ),
              _this.displayModelOptions()
            )
          )
        );
      }
    };

    _this.handleChange = function (event) {
      var name = event.target.name;
      var value = event.target.type == "checkbox" ? event.target.checked : event.target.value;
      _this.setState(_defineProperty({}, name, value), function () {
        console.log(_this.state);
        if (name == 'make') {
          _this.getModelOptions();
        }
      });
    };

    _this.submitFilters = function () {
      var self = _this;
      var _this$props2 = _this.props,
          match = _this$props2.match,
          location = _this$props2.location,
          history = _this$props2.history;
      var _this$state = _this.state,
          min_price = _this$state.min_price,
          max_price = _this$state.max_price,
          select_view = _this$state.select_view,
          sort_by = _this$state.sort_by,
          make = _this$state.make,
          model = _this$state.model;

      // check if :listing is set, and use it if it is

      var listing = "";
      if (match.params.listings != undefined) {
        listing = "/" + match.params.listings;
      }

      // this is the old way that refreshes the page
      // document.location.href = `/${match.params.city}/${match.params.category}${listing}?min_price=${min_price}&max_price=${max_price}&select_view=${select_view}&sort_by=${sort_by}`;

      var newSearch = "min_price=" + min_price + "&max_price=" + max_price + "&select_view=" + select_view + "&sort_by=" + sort_by + "&make=" + make + "&model=" + model;

      history.push("/" + match.params.city + "/" + match.params.category + listing + "?min_price=" + min_price + "&max_price=" + max_price + "&select_view=" + select_view + "&sort_by=" + sort_by + "&make=" + make + "&model=" + model);

      location = _this.props.location;
      console.log(newSearch);

      var queryParams = _queryString2.default.parse(newSearch);

      if (queryParams.min_price != undefined) {
        _axios2.default.get("/api/" + match.params.city + "/" + match.params.category + listing + "?min_price=" + queryParams.min_price + "&max_price=" + queryParams.max_price + "&select_view=" + queryParams.select_view + "&sort_by=" + queryParams.sort_by + "&make=" + queryParams.make + "&model=" + queryParams.model).then(function (response) {
          self.setState({
            itemsData: response.data
          }, function () {
            console.log(self.state);
          });
        }).catch(function (error) {
          console.log(error);
        });
      }
    };

    _this.displayMakeOptions = function () {
      var makes = _this.state.itemsData.map(function (item) {
        return item.make;
      });
      makes = [].concat(_toConsumableArray(new Set(makes)));
      makes.sort();

      return makes.map(function (item, i) {
        return _react2.default.createElement(
          "option",
          { value: item, key: i },
          item
        );
      });
    };

    _this.getModelOptions = function () {
      var newmodels = _this.state.itemsData;

      console.log(_this.state.make);
      if (_this.state.make != 'all') {
        newmodels = newmodels.filter(function (item) {
          return item.make == _this.state.make;
        });
      }
      newmodels = newmodels.map(function (item) {
        return item.model;
      });
      newmodels = [].concat(_toConsumableArray(new Set(newmodels)));
      newmodels = newmodels.sort();
      return newmodels;
    };

    _this.displayModelOptions = function () {
      var models = _this.getModelOptions();
      return models.map(function (item, i) {
        return _react2.default.createElement(
          "option",
          { value: item, key: i },
          item
        );
      });
    };

    _this.state = {
      min_price: 0,
      max_price: 10000000,
      select_view: "gallery",
      sort_by: "price-desc",
      itemsData: [],
      make: 'all',
      model: 'all'
    };
    return _this;
  }

  // figure out what listings we should be displaying client-side


  _createClass(Category, [{
    key: "componentWillMount",
    value: function componentWillMount() {

      // http request spoof
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      var self = this;

      // check if :listing is set, and use it if it is
      var listing = "";
      if (match.params.listings != undefined) {
        listing = "/" + match.params.listings;
      }

      // try to parse url query parameters
      var queryParams = _queryString2.default.parse(this.props.location.search);
      var min_price = queryParams.min_price,
          max_price = queryParams.max_price,
          select_view = queryParams.select_view,
          sort_by = queryParams.sort_by;

      if (min_price != undefined) {
        console.log("willmount queryParams: ");
        console.log(queryParams);
        _axios2.default.get("/api/" + match.params.city + "/" + match.params.category + listing + "?min_price=" + min_price + "&max_price=" + max_price + "&select_view=" + select_view + "&sort_by=" + sort_by).then(function (response) {
          self.setState({
            itemsData: response.data
          }, function () {
            // console.log(self.state);
          });
        }).catch(function (error) {
          console.log(error);
        });
      } else {
        // otherwise do a regular request
        _axios2.default.get("/api/" + match.params.city + "/" + match.params.category + listing).then(function (response) {
          self.setState({
            itemsData: response.data
          }, function () {
            // console.log(self.state);
          });
        }).catch(function (error) {
          console.log(error);
        });
      }
    }

    // get all the item data and loop through it to display


    // only show make and model selectors if we are in /cars-and-trucks/


    // handler for filter changes


    // handle update button click


    // get the car make options from data
    // works, but it's options are restricted to the results given the first time,
    // so you have to click back to All after to switch makes


    // get the car model options from data and filter by make if set


    // display the model selector options

  }, {
    key: "render",
    value: function render() {

      // no results
      if (this.state.itemsData.length == 0) {
        return _react2.default.createElement(
          "div",
          { className: "oops" },
          _react2.default.createElement(
            "h1",
            null,
            "Sorry, no results found."
          )
        );
      }

      var gallery = this.state.select_view == "gallery";

      return _react2.default.createElement(
        "div",
        { className: "listings" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "section",
            { id: "filter" },
            _react2.default.createElement(
              "div",
              { className: "form-group price" },
              _react2.default.createElement(
                "label",
                null,
                "Price"
              ),
              _react2.default.createElement(
                "div",
                { className: "minmax" },
                _react2.default.createElement(
                  "select",
                  {
                    name: "min_price",
                    className: "min-price",
                    value: this.state.min_price,
                    onChange: this.handleChange
                  },
                  _react2.default.createElement(
                    "option",
                    { value: "0" },
                    "min"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "10000" },
                    "10,000"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "50000" },
                    "50,000"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "100000" },
                    "100,000"
                  )
                ),
                _react2.default.createElement(
                  "select",
                  {
                    name: "max_price",
                    className: "max-price",
                    value: this.state.max_price,
                    onChange: this.handleChange
                  },
                  _react2.default.createElement(
                    "option",
                    { value: "10000" },
                    "10,000"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "50000" },
                    "50,000"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "100000" },
                    "100,000"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "10000000" },
                    "max"
                  )
                )
              )
            ),
            this.showMakeModel(),
            _react2.default.createElement(
              "div",
              { className: "form-group button" },
              _react2.default.createElement(
                "div",
                { className: "primary-btn", onClick: this.submitFilters },
                "Update"
              ),
              _react2.default.createElement(
                "div",
                { className: "clear-btn" },
                "Clear"
              )
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { id: "content" },
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
              "div",
              { className: "whitebox" },
              _react2.default.createElement(
                "section",
                { id: "options" },
                _react2.default.createElement(
                  "div",
                  { className: "form-group view-dropdown" },
                  _react2.default.createElement(
                    "select",
                    {
                      name: "select_view",
                      className: "select-view",
                      value: this.state.select_view,
                      onChange: this.handleChange
                    },
                    _react2.default.createElement(
                      "option",
                      { value: "gallery" },
                      "Gallery"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "list" },
                      "List"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "form-group sort" },
                  _react2.default.createElement(
                    "select",
                    {
                      name: "sort_by",
                      className: "sort-by",
                      value: this.state.sort_by,
                      onChange: this.handleChange
                    },
                    _react2.default.createElement(
                      "option",
                      { value: "price-dsc" },
                      "Price - Highest"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "price-asc" },
                      "Price - Lowest"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "date-dsc" },
                      "Newest"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "date-asc" },
                      "Oldest"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "section",
                { id: "results", className: "" + (gallery ? '' : 'listview') },
                this.loopItems()
              )
            )
          )
        )
      );
    }
  }]);

  return Category;
}(_react.Component);

exports.default = Category;

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(23);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(107);

var _axios = __webpack_require__(85);

var _axios2 = _interopRequireDefault(_axios);

var _bgFader = __webpack_require__(166);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.loopCategories = function () {
      var match = _this.props.match;
      return _this.state.categoriesData.map(function (item, i) {
        return _react2.default.createElement(
          "div",
          { className: "category", key: i },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/" + match.params.city + "/" + item.title, className: "title" },
            item.title
          ),
          _react2.default.createElement(
            "div",
            { className: "link-section" },
            _this.loopGroups(item)
          )
        );
      });
    };

    _this.loopGroups = function (category) {
      var match = _this.props.match;
      return category.listings.map(function (item, i) {
        return _react2.default.createElement(
          _reactRouterDom.Link,
          {
            to: "/" + match.params.city + "/" + category.title + "/" + item.slug,
            key: i,
            className: "link"
          },
          item.name
        );
      });
    };

    _this.state = {
      categoriesData: []
    };
    return _this;
  }

  // fetch the data for the categories from our data before rendering


  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // default to LA
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      if (match.params.city == undefined) {
        history.push("/la");
        return;
      }

      (0, _bgFader.changeBackground)(match.params.city);

      // http request spoof
      var self = this;
      _axios2.default.get("/api/" + match.params.city).then(function (response) {
        self.setState({
          categoriesData: response.data
        }, function () {
          console.log(self.state);
        });
      }).catch(function (error) {
        console.log(error);
      }).then(function () {});
    }

    // loop through data to get categories


    // loop through the groups within each category

  }, {
    key: "render",


    // render the main page
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "home" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "h1",
            null,
            "Connecting People",
            _react2.default.createElement("br", null),
            "Everywhere"
          ),
          _react2.default.createElement(
            "section",
            { className: "categories" },
            this.loopCategories()
          ),
          _react2.default.createElement(
            "section",
            { className: "trending" },
            _react2.default.createElement("input", {
              type: "text",
              name: "search",
              className: "search",
              placeholder: "Search Classifieds, Jobs, Housing, Discussions, Personals..."
            }),
            _react2.default.createElement(
              "div",
              { className: "title" },
              _react2.default.createElement("i", { className: "far fa-clock" }),
              "Trending Now"
            ),
            _react2.default.createElement(
              "div",
              { className: "trending-tags" },
              _react2.default.createElement(
                "div",
                { className: "tag" },
                "Apple Macbook"
              ),
              _react2.default.createElement(
                "div",
                { className: "tag" },
                "Sony XBR900"
              ),
              _react2.default.createElement(
                "div",
                { className: "tag" },
                "Pioneer XDJ"
              ),
              _react2.default.createElement(
                "div",
                { className: "tag" },
                "Sculpting Classes"
              ),
              _react2.default.createElement(
                "div",
                { className: "tag" },
                "Apartments"
              ),
              _react2.default.createElement(
                "div",
                { className: "tag" },
                "Home Repair"
              ),
              _react2.default.createElement(
                "div",
                { className: "tag" },
                "Masseuse"
              )
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(23);

var _react2 = _interopRequireDefault(_react);

var _Gallery = __webpack_require__(268);

var _Gallery2 = _interopRequireDefault(_Gallery);

var _axios = __webpack_require__(85);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// the component for looking at a specific item
// ex. url: '/la/for-sale/2020-Porsche-Taycan'


var Item = function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));

    _this.state = {
      itemData: {}
    };
    return _this;
  }

  _createClass(Item, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      // temp fix for not having :listings set

      var listings = match.params.listings;
      var item = match.params.listings;
      if (match.params.item == undefined) {
        listings = 'cars-and-trucks';
      } else {
        item = match.params.item;
      }

      // http request spoof
      var self = this;
      _axios2.default.get('/api/' + match.params.city + '/' + match.params.category + '/' + listings + '/' + item).then(function (response) {
        self.setState({
          itemData: response.data
        }, function () {
          console.log(self.state);
        });
      }).catch(function (error) {
        console.log(error);
      }).then(function () {});
    }
  }, {
    key: 'render',
    value: function render() {
      var item = this.state.itemData;
      var image = item.images; // fix this later

      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        minimumFractionDigits: 0,
        currency: "USD"
      });

      return _react2.default.createElement(
        'div',
        { className: 'item-page' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'whitebox' },
            _react2.default.createElement(
              'section',
              { id: 'submenu' },
              _react2.default.createElement(
                'div',
                { className: 'nav' },
                _react2.default.createElement(
                  'a',
                  { href: '#', className: 'prev' },
                  'prev'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#', className: 'next' },
                  'next'
                )
              ),
              _react2.default.createElement(
                'nav',
                { className: 'sublinks' },
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'More Ads by User'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Print'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Share'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Contact Seller'
                )
              )
            ),
            _react2.default.createElement(
              'section',
              { id: 'item-content' },
              _react2.default.createElement(
                'div',
                { className: 'media-col' },
                _react2.default.createElement(_Gallery2.default, { image: image })
              ),
              _react2.default.createElement(
                'div',
                { className: 'details-col' },
                _react2.default.createElement('i', { className: 'fa fa-star' }),
                _react2.default.createElement(
                  'div',
                  { className: 'date' },
                  'Listed on ',
                  item.uploaded
                ),
                _react2.default.createElement(
                  'h3',
                  { className: 'title' },
                  item.title
                ),
                _react2.default.createElement(
                  'h4',
                  { className: 'price' },
                  formatter.format(item.price)
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'specs' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'VIN'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      item.vin
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Mileage'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      item.mpg
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Transmission'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      item.trans
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Odometer'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      item.miles + ' Miles'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Color'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      item.color
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Horsepower'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      item.hp
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'description' },
                  _react2.default.createElement(
                    'p',
                    null,
                    item.desc
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Item;
}(_react.Component);

exports.default = Item;

/***/ })

},[270]);