webpackJsonp([0],{

/***/ 245:
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

var _reactRouterDom = __webpack_require__(584);

var _Header = __webpack_require__(267);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(270);

var _Home2 = _interopRequireDefault(_Home);

var _Category = __webpack_require__(269);

var _Category2 = _interopRequireDefault(_Category);

var _Item = __webpack_require__(271);

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
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:cat', component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:cat/:listings', component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:cat/:listings/:item', component: _Item2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 266:
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

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery() {
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
    key: 'componentWillMount',
    value: function componentWillMount() {
      var allImgs = ['/img/car.jpg', '/img/car2.jpg', '/img/car3.gif', '/img/car4.jpg', '/img/car5.jpg', '/img/car6.jpg'];

      this.setState({
        allImgs: allImgs
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;


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

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(23);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(108);

var _axios2 = _interopRequireDefault(_axios);

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
            'li',
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
        var _this$props = _this.props,
            match = _this$props.match,
            history = _this$props.history;

        history.push('/' + city.slug);
      });
    };

    _this.state = {
      cityDropDown: false,
      cities: [],
      selectedCity: 'Los Angeles'
    };
    return _this;
  }

  // fetch the data for the categories from our data before rendering


  _createClass(Header, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var self = this;
      _axios2.default.get('/api/cities').then(function (response) {
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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'div',
            { className: 'left-menu' },
            _react2.default.createElement(
              'a',
              { href: '/', className: 'logo' },
              'Jordan\'sList'
            ),
            _react2.default.createElement(
              'div',
              { className: 'city', onClick: this.clickedCityDropDown },
              this.state.selectedCity,
              _react2.default.createElement('i', { className: 'fa fa-chevron-down ' + (this.state.cityDropDown ? 'active' : '') }),
              _react2.default.createElement(
                'div',
                { className: 'dropdown ' + (this.state.cityDropDown ? 'active' : '') },
                _react2.default.createElement(
                  'ul',
                  null,
                  this.loopCities()
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'right-menu' },
            _react2.default.createElement(
              'div',
              { className: 'user-img' },
              _react2.default.createElement('i', { className: 'fa fa-user' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'user-dropdown' },
              'My Account ',
              _react2.default.createElement('i', { className: 'fa fa-chevron-down' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'post-btn' },
              'Post to Classifieds'
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

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(23);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(83);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(245);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

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

var _axios = __webpack_require__(108);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        minimumFractionDigits: 0,
        currency: 'USD'
      });

      return _this.state.itemsData.map(function (item, index) {
        return _react2.default.createElement(
          'div',
          { className: 'item', key: (item, index) },
          _react2.default.createElement(
            'div',
            { className: 'image', style: {
                "backgroundImage": 'url(\'' + item.images[0] + '\')'
              } },
            _react2.default.createElement(
              'div',
              { className: 'price' },
              formatter.format(item.price)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'details' },
            _react2.default.createElement(
              'h5',
              null,
              item.year + ' ' + item.details.make + ' ' + item.details.model
            ),
            _react2.default.createElement('i', { className: 'fa fa-star' }),
            _react2.default.createElement(
              'h6',
              null,
              'Beverly Hills'
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

      console.log(match);

      if (match.params.listings == 'cars-and-trucks') {
        return _react2.default.createElement(
          'div',
          { style: {
              "display": "flex"
            } },
          _react2.default.createElement(
            'div',
            { className: 'form-group make' },
            _react2.default.createElement(
              'label',
              null,
              'Make'
            ),
            _react2.default.createElement(
              'select',
              { name: 'make', className: 'make-select' },
              _react2.default.createElement(
                'option',
                { value: 'Audi' },
                'Audi'
              ),
              _react2.default.createElement(
                'option',
                { value: 'BMW' },
                'BMW'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Porsche' },
                'Porsche'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group model' },
            _react2.default.createElement(
              'label',
              null,
              'Model'
            ),
            _react2.default.createElement(
              'select',
              { name: 'model', className: 'model-select' },
              _react2.default.createElement(
                'option',
                { value: 'a3' },
                'A3'
              ),
              _react2.default.createElement(
                'option',
                { value: 'a4' },
                'A4'
              ),
              _react2.default.createElement(
                'option',
                { value: 'a8' },
                'A8'
              )
            )
          )
        );
      }
    };

    _this.state = {
      itemsData: []
    };
    return _this;
  }

  _createClass(Category, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      // http request spoof
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      var self = this;
      _axios2.default.get('/api/' + match.params.city + '/' + match.params.category).then(function (response) {
        self.setState({
          itemsData: response.data
        }, function () {
          console.log(self.state);
        });
      }).catch(function (error) {
        console.log(error);
      }).then(function () {});
    }

    // get all the item data and loop through it to display


    // only show make and model selectors if we are in /cars-and-trucks/

  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          match = _props2.match,
          location = _props2.location,
          history = _props2.history;


      return _react2.default.createElement(
        'div',
        { className: 'listings' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'section',
            { id: 'filter' },
            _react2.default.createElement(
              'div',
              { className: 'form-group price' },
              _react2.default.createElement(
                'label',
                null,
                'Price'
              ),
              _react2.default.createElement(
                'div',
                { className: 'minmax' },
                _react2.default.createElement(
                  'select',
                  { name: 'min-price', className: 'min-price' },
                  _react2.default.createElement(
                    'option',
                    { value: '1000' },
                    '1000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '2000' },
                    '2000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '3000' },
                    '3000'
                  )
                ),
                _react2.default.createElement(
                  'select',
                  { name: 'max-price', className: 'max-price' },
                  _react2.default.createElement(
                    'option',
                    { value: '1000' },
                    '1000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '2000' },
                    '2000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '3000' },
                    '3000'
                  )
                )
              )
            ),
            this.showMakeModel(),
            _react2.default.createElement(
              'div',
              { className: 'form-group button' },
              _react2.default.createElement(
                'div',
                { className: 'primary-btn' },
                'Update'
              ),
              _react2.default.createElement(
                'div',
                { className: 'clear-btn' },
                'Clear'
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'whitebox' },
              _react2.default.createElement(
                'section',
                { id: 'options' },
                _react2.default.createElement(
                  'div',
                  { className: 'form-group view-dropdown' },
                  _react2.default.createElement(
                    'select',
                    { name: 'select-view', className: 'select-view' },
                    _react2.default.createElement(
                      'option',
                      { value: 'list' },
                      'List'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'gallery' },
                      'Gallery'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group sort' },
                  _react2.default.createElement(
                    'select',
                    { name: 'sort-by', className: 'sort-by' },
                    _react2.default.createElement(
                      'option',
                      { value: 'price-desc' },
                      'Price - Highest'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'price-asc' },
                      'Price - Lowest'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'date-desc' },
                      'Newest'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'date-asc' },
                      'Oldest'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'section',
                { id: 'results' },
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

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(23);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(108);

var _axios2 = _interopRequireDefault(_axios);

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
          'div',
          { className: 'category', key: i },
          _react2.default.createElement(
            'a',
            { href: '/' + match.params.city + '/' + item.title, className: 'title' },
            item.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'link-section' },
            _this.loopGroups(item)
          )
        );
      });
    };

    _this.loopGroups = function (category) {
      var match = _this.props.match;
      return category.listings.map(function (item, i) {
        return _react2.default.createElement(
          'a',
          { href: '/' + match.params.city + '/' + category.title + '/' + item.slug, key: i, className: 'link' },
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
    key: 'componentDidMount',
    value: function componentDidMount() {

      // default to LA
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      if (match.params.city == undefined) {
        history.push('/la');
      }

      // http request spoof
      var self = this;
      _axios2.default.get('/api/' + match.params.city).then(function (response) {
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
    key: 'render',


    // render the main page
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'h1',
            null,
            'Connecting People',
            _react2.default.createElement('br', null),
            'Everywhere'
          ),
          _react2.default.createElement(
            'section',
            { className: 'categories' },
            this.loopCategories()
          ),
          _react2.default.createElement(
            'section',
            { className: 'trending' },
            _react2.default.createElement('input', { type: 'text', name: 'search', className: 'search', placeholder: 'Search Classifieds, Jobs, Housing, Discussions, Personals...' }),
            _react2.default.createElement(
              'div',
              { className: 'title' },
              _react2.default.createElement('i', { className: 'far fa-clock' }),
              'Trending Now'
            ),
            _react2.default.createElement(
              'div',
              { className: 'trending-tags' },
              _react2.default.createElement(
                'div',
                { className: 'tag' },
                'Apple Macbook'
              ),
              _react2.default.createElement(
                'div',
                { className: 'tag' },
                'Sony XBR900'
              ),
              _react2.default.createElement(
                'div',
                { className: 'tag' },
                'Pioneer XDJ'
              ),
              _react2.default.createElement(
                'div',
                { className: 'tag' },
                'Sculpting Classes'
              ),
              _react2.default.createElement(
                'div',
                { className: 'tag' },
                'Apartments'
              ),
              _react2.default.createElement(
                'div',
                { className: 'tag' },
                'Home Repair'
              ),
              _react2.default.createElement(
                'div',
                { className: 'tag' },
                'Masseuse'
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

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(23);

var _react2 = _interopRequireDefault(_react);

var _Gallery = __webpack_require__(266);

var _Gallery2 = _interopRequireDefault(_Gallery);

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

    _this.state = {};
    return _this;
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;


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
                _react2.default.createElement(_Gallery2.default, null)
              ),
              _react2.default.createElement(
                'div',
                { className: 'details-col' },
                _react2.default.createElement('i', { className: 'fa fa-star' }),
                _react2.default.createElement(
                  'div',
                  { className: 'date' },
                  'posted Feb 2, 2020'
                ),
                _react2.default.createElement(
                  'h3',
                  { className: 'title' },
                  'White 2020 Porsche Taycan Coupe'
                ),
                _react2.default.createElement(
                  'h4',
                  { className: 'price' },
                  '$132,000'
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
                      'SDAK234HFCKF284NF'
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
                      '22.4 MPG'
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
                      '6 Speed Manual'
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
                      '47,664 Miles'
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
                      'White / Grey'
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
                      '573 HP'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'description' },
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum justo ante, ornare eget ultricies eu, sodales ut massa. Aliquam porttitor ex eu enim commodo, sit amet feugiat elit pretium. Aliquam erat volutpat. Vivamus vitae dolor nibh. Aenean faucibus magna at urna facilisis, eu lacinia odio aliquam. Nunc fermentum mi sem, nec bibendum nulla auctor nec. Praesent rutrum urna quis risus maximus, tincidunt cursus orci sagittis. Nunc imperdiet tellus ut consectetur bibendum. Nunc hendrerit malesuada finibus. Nam quis libero nisl. Nullam posuere dolor quis augue commodo consectetur id quis dui. Sed euismod nulla at egestas pellentesque.'
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

},[268]);