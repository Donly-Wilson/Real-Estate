webpackJsonp([0],{

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _MobileNavigation = __webpack_require__(186);

var _MobileNavigation2 = _interopRequireDefault(_MobileNavigation);

var _Navigation = __webpack_require__(187);

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "header",
        null,
        _react2.default.createElement(_Navigation2.default, null),
        _react2.default.createElement(_MobileNavigation2.default, null)
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateAds = function (_Component) {
  _inherits(CreateAds, _Component);

  function CreateAds() {
    _classCallCheck(this, CreateAds);

    var _this = _possibleConstructorReturn(this, (CreateAds.__proto__ || Object.getPrototypeOf(CreateAds)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(CreateAds, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        "create ads section"
      );
    }
  }]);

  return CreateAds;
}(_react.Component);

exports.default = CreateAds;

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _Filter = __webpack_require__(188);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(189);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingData = __webpack_require__(191);

var _listingData2 = _interopRequireDefault(_listingData);

var _reactRouterDom = __webpack_require__(38);

var _reactTransitionGroup = __webpack_require__(446);

var _reactCssTransitionReplace = __webpack_require__(110);

var _reactCssTransitionReplace2 = _interopRequireDefault(_reactCssTransitionReplace);

var _ListingDetails = __webpack_require__(192);

var _ListingDetails2 = _interopRequireDefault(_ListingDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (./homes) hyperlink or page

// import ReactDOM from "react-dom";
// import Header from "./Header";


// import { FALSE } from "node-sass";

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

    _this.state = {
      name: "Donly",
      listingData: _listingData2.default,
      city: "All",
      homeType: "All",
      bedrooms: "0",
      bathrooms: "0",
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      filteredData: _listingData2.default,
      populateFormsData: "",
      sortby: "price-dsc",
      view: "box",
      search: "",
      showFilter: window.innerWidth > 991 ? true : _this.generateFilter()
    };
    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    _this.changeView = _this.changeView.bind(_this);
    _this.toggleShowFilter = _this.toggleShowFilter.bind(_this);
    _this.generateFilter = _this.generateFilter.bind(_this);
    return _this;
  }

  _createClass(HomePage, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // This organise/sorts data by price filter btn
      var listingData = this.state.listingData.sort(function (a, b) {
        a.price - b.price;
      });

      this.setState({
        listingData: listingData
      });

      this.generateFilter();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.generateFilter);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.generateFilter);
    }
  }, {
    key: "generateFilter",
    value: function generateFilter() {
      var windowWidth = window.innerWidth;
      //Checks if windows size is desktop or tablet and display filter accordingly
      window.addEventListener('resize', function resizeScreen() {
        //This ignores height, only resize on width change
        if (window.innerWidth != windowWidth) {

          windowWidth = window.innerWidth;
          if (windowWidth > 991) {
            this.setState({
              showFilter: true
            });
            document.body.style.overflow = "auto";
          } else if (windowWidth < 991) {
            this.setState({
              showFilter: false
            });
          }
        }
      }.bind(this));
    }
  }, {
    key: "change",
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
      this.setState(_defineProperty({}, name, value), function () {
        _this2.filteredData();
        console.log(_this2.state);
      });
      console.log(event.target.name);
    }
  }, {
    key: "changeView",
    value: function changeView(viewName) {
      this.setState({
        view: viewName
      });
    }
  }, {
    key: "filteredData",
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.bedrooms >= _this3.state.bedrooms && item.bathrooms >= _this3.state.bathrooms;
      });
      console.log(newData);
      if (this.state.city != "All") {
        // console.log(newData);
        console.log(this.state);
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }

      if (this.state.homeType != "All") {
        newData = newData.filter(function (item) {
          return item.homeType == _this3.state.homeType;
        });
      }

      if (this.state.sortby == "price-dsc") {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      if (this.state.sortby == "price-asc") {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      if (this.state.search != "") {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var currentlySearching = city.match(searchText);

          if (currentlySearching != null) {
            return true;
          }
        });
      }

      // if elevator is true then i will return all the listing with elevators with in thier extras
      if (this.state.elevator == true) {
        newData = newData.filter(function (item) {
          return item.extra.includes("elevator");
        });
      }

      if (this.state.gym == true) {
        newData = newData.filter(function (item) {
          return item.extra.includes("gym");
        });
      }

      if (this.state.swimming_pool == true) {
        newData = newData.filter(function (item) {
          return item.extra.includes("swimming_pool");
        });
      }

      if (this.state.finished_basement == true) {
        newData = newData.filter(function (item) {
          return item.extra.includes("finished_basement");
        });
      }
      this.setState({ filteredData: newData });
    }
  }, {
    key: "populateForms",
    value: function populateForms() {
      // city
      var cities = this.state.listingData.map(function (item) {
        return item.city;
      });
      cities = new Set(cities);
      cities = [].concat(_toConsumableArray(cities));
      cities = cities.sort();

      // homeType
      var homeTypes = this.state.listingData.map(function (item) {
        return item.homeType;
      });
      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes));
      homeTypes = homeTypes.sort();

      // bedrooms
      var bedrooms = this.state.listingData.map(function (item) {
        return item.bedrooms;
      });
      bedrooms = new Set(bedrooms);
      bedrooms = [].concat(_toConsumableArray(bedrooms));
      bedrooms = bedrooms.sort();

      // bathrooms
      var bathrooms = this.state.listingData.map(function (item) {
        return item.bathrooms;
      });
      bathrooms = new Set(bathrooms);
      bathrooms = [].concat(_toConsumableArray(bathrooms));
      bathrooms = bathrooms.sort();

      this.setState({
        populateFormsData: {
          cities: cities,
          homeTypes: homeTypes,
          bedrooms: bedrooms,
          bathrooms: bathrooms
        }
        // () => console.log(this.state)
      });
    }

    //Function to toggle 'showFilter' state to 'true' or 'false'

  }, {
    key: "toggleShowFilter",
    value: function toggleShowFilter() {
      this.setState(function (prevState) {
        return { showFilter: !prevState.showFilter };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var match = this.props.match;
      var location = this.props.location;
      // console.log(match);

      return _react2.default.createElement(
        "div",
        null,
        " ",
        _react2.default.createElement(
          "section",
          { id: "content-area" },
          _react2.default.createElement(_Filter2.default, {
            change: this.change,
            globalState: this.state,
            populateAction: this.populateForms,
            showFilter: this.toggleShowFilter,
            filterData: this.filteredData
          }),
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(
              _reactRouterDom.Route,
              { path: match.url, exact: true },
              _react2.default.createElement(_Listings2.default, {
                globalState: this.state,
                listingData: this.state.filteredData,
                change: this.change,
                changeView: this.changeView,
                currentView: this.state.view,
                showFilter: this.toggleShowFilter
              })
            ),
            _react2.default.createElement(_reactRouterDom.Route, { path: match.url + "/listing/:id", exact: true
              //This will remount the entire page instead of updating info(not recommended)
              , render: function render(props) {
                return _react2.default.createElement(_ListingDetails2.default, _extends({}, props, {
                  listingData: _this4.state.filteredData }));
              }
            })
          )
        )
      );
    }
  }]);

  return HomePage;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(HomePage);
// const app = document.getElementById("app");
// ReactDOM.render(<App />, app);

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LandingPage = function (_Component) {
    _inherits(LandingPage, _Component);

    function LandingPage() {
        _classCallCheck(this, LandingPage);

        return _possibleConstructorReturn(this, (LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).apply(this, arguments));
    }

    _createClass(LandingPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'jumbo' },
                _react2.default.createElement(
                    'div',
                    { className: 'jumbo__background' },
                    _react2.default.createElement(
                        'div',
                        { className: 'jumbo__background__image' },
                        _react2.default.createElement(
                            'picture',
                            null,
                            _react2.default.createElement('source', { srcset: '/img/apartment.webp', type: 'image/webp' }),
                            _react2.default.createElement('source', { srcset: '/img/apartment.jpg', type: 'image/jpeg' }),
                            _react2.default.createElement('img', { src: '/img/apartment.jpg', alt: 'apartment' })
                        )
                    ),
                    _react2.default.createElement('div', { className: 'jumbo__background__overlay' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'jumbo__info' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'p',
                            { className: 'jumbo__info__intro' },
                            'We will help you find your ',
                            _react2.default.createElement(
                                'span',
                                null,
                                'wonderful'
                            ),
                            ' home'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'jumbo__info__search' },
                            _react2.default.createElement(
                                'div',
                                { className: '' },
                                _react2.default.createElement(
                                    'select',
                                    { className: 'property__select__picker', 'data-style': 'btn-info' },
                                    _react2.default.createElement(
                                        'option',
                                        null,
                                        'New Constraction Property'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        null,
                                        'Old Constraction Property'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        null,
                                        'All Constraction Property'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: '' },
                                _react2.default.createElement(
                                    'select',
                                    { className: 'option__select__picker', 'data-style': 'btn-info' },
                                    _react2.default.createElement(
                                        'option',
                                        null,
                                        'Buy(590)'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        null,
                                        'Rent(203)'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        null,
                                        'Sell(1)'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'search__field' },
                                _react2.default.createElement(
                                    'svg',
                                    { className: 'search__field__icon', width: '24', height: '24', fill: 'none', viewBox: '0 0 24 24' },
                                    _react2.default.createElement('circle', { cx: '11', cy: '11', r: '6.25', stroke: 'currentColor', strokeLinecap: 'round',
                                        strokeLinejoin: 'round', strokeWidth: '1.5' }),
                                    _react2.default.createElement('path', { fill: 'currentColor',
                                        d: 'M18.7197 19.7803C19.0126 20.0732 19.4874 20.0732 19.7803 19.7803C20.0732 19.4874 20.0732 19.0126 19.7803 18.7197L18.7197 19.7803ZM14.9697 16.0303L18.7197 19.7803L19.7803 18.7197L16.0303 14.9697L14.9697 16.0303Z' })
                                ),
                                _react2.default.createElement('input', { placeholder: 'Enter city,street,zip code', type: 'text' })
                            ),
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/homes' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'jumbo__info__search__button' },
                                    '535 properties found',
                                    _react2.default.createElement(
                                        'svg',
                                        { width: '24', height: '24', fill: 'none', viewBox: '0 0 24 24' },
                                        _react2.default.createElement('path', { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round',
                                            strokeWidth: '1.5', d: 'M13.75 6.75L19.25 12L13.75 17.25' }),
                                        _react2.default.createElement('path', { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round',
                                            strokeWidth: '1.5', d: 'M19 12H4.75' })
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'jumbo__info__requests' },
                            _react2.default.createElement(
                                'div',
                                { className: 'jumbo__info__requests__one' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'jumbo__info__requests__one-icon' },
                                    _react2.default.createElement(
                                        'svg',
                                        { width: '24', height: '24', fill: 'none', viewBox: '0 0 24 24' },
                                        _react2.default.createElement('circle', { cx: '12', cy: '8', r: '3.25', stroke: 'currentColor', strokeLinecap: 'round',
                                            strokeLinejoin: 'round', strokeWidth: '1.5' }),
                                        _react2.default.createElement('path', { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round',
                                            strokeWidth: '1.5',
                                            d: 'M6.8475 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6408 17.2584C17.8563 15.7731 16.068 14 12 14C7.93201 14 6.14367 15.7731 5.35924 17.2584C4.82597 18.2681 5.70558 19.25 6.8475 19.25Z' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'jumbo__info__requests__one-largeText' },
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Want to sell a house in St.Lucia?'
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        null,
                                        _react2.default.createElement(
                                            'svg',
                                            { width: '24', height: '24', fill: 'none', viewBox: '0 0 24 24' },
                                            _react2.default.createElement('path', { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round',
                                                strokeWidth: '1.5', d: 'M13.75 6.75L19.25 12L13.75 17.25' }),
                                            _react2.default.createElement('path', { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round',
                                                strokeWidth: '1.5', d: 'M19 12H4.75' })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'jumbo__info__requests__one-miniText' },
                                    'Call the broker for a quote!'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'jumbo__info__requests__two' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'jumbo__info__requests__one-icon' },
                                    _react2.default.createElement(
                                        'svg',
                                        { width: '24', height: '24', fill: 'none', viewBox: '0 0 24 24' },
                                        _react2.default.createElement('path', { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round',
                                            strokeWidth: '1.5',
                                            d: 'M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z' }),
                                        _react2.default.createElement('path', { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round',
                                            strokeWidth: '1.5',
                                            d: 'M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'jumbo__info__requests__one-largeText' },
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'What is the value of your home?'
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        null,
                                        _react2.default.createElement(
                                            'svg',
                                            { width: '24', height: '24', fill: 'none', viewBox: '0 0 24 24' },
                                            _react2.default.createElement('path', { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round',
                                                strokeWidth: '1.5', d: 'M13.75 6.75L19.25 12L13.75 17.25' }),
                                            _react2.default.createElement('path', { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round',
                                                strokeWidth: '1.5', d: 'M19 12H4.75' })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'jumbo__info__requests__one-miniText' },
                                    ' Calculate the estimated value!'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LandingPage;
}(_react.Component);

exports.default = LandingPage;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(39);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(38);

var _Header = __webpack_require__(178);

var _Header2 = _interopRequireDefault(_Header);

var _HomePage = __webpack_require__(180);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _CreateAds = __webpack_require__(179);

var _CreateAds2 = _interopRequireDefault(_CreateAds);

var _LandingPage = __webpack_require__(181);

var _LandingPage2 = _interopRequireDefault(_LandingPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import {HashRouter as Router, Route, Switch} from 'react-router-dom'; maybe for netlify


var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _reactRouterDom.BrowserRouter,
                null,
                _react2.default.createElement(
                    "div",
                    null,
                    " ",
                    _react2.default.createElement(_Header2.default, null),
                    _react2.default.createElement(
                        _reactRouterDom.Switch,
                        null,
                        _react2.default.createElement(
                            _reactRouterDom.Route,
                            { path: "/homes" },
                            _react2.default.createElement(_HomePage2.default, null)
                        ),
                        _react2.default.createElement(
                            _reactRouterDom.Route,
                            { path: "/createads" },
                            _react2.default.createElement(_CreateAds2.default, null)
                        ),
                        _react2.default.createElement(_LandingPage2.default, null)
                    )
                )
            );
        }
    }]);

    return App;
}(_react.Component);

var app = document.getElementById("app");
_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mobileNavigation = function (_Component) {
    _inherits(mobileNavigation, _Component);

    function mobileNavigation() {
        _classCallCheck(this, mobileNavigation);

        var _this = _possibleConstructorReturn(this, (mobileNavigation.__proto__ || Object.getPrototypeOf(mobileNavigation)).call(this));

        _this.toggleMenu = function () {
            _this.setState(function (prevState) {
                return { openMenu: !prevState.openMenu };
            });
        };

        _this.state = {
            openMenu: false
        };
        return _this;
    }

    // This function toggles menu when it is triggered


    _createClass(mobileNavigation, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            console.log(this.state);
            return _react2.default.createElement(
                "section",
                { className: "mobileNav" },
                _react2.default.createElement(
                    "div",
                    { className: "mobileNav__hamburger-menu", onClick: function onClick() {
                            return _this2.toggleMenu();
                        } },
                    _react2.default.createElement("i", { className: "fa fa-bars", "aria-hidden": "true" })
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: "/" },
                    _react2.default.createElement(
                        "div",
                        { className: "logo" },
                        _react2.default.createElement("img", { className: "logo__icon", src: "../../img/address.svg" }),
                        "M\xE1s Casas"
                    )
                ),
                _react2.default.createElement(
                    "nav",
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: "/homes", className: "homes" },
                        "Homes"
                    )
                ),
                this.state.openMenu && _react2.default.createElement(
                    "div",
                    { className: "mobileNav__menu" },
                    _react2.default.createElement(
                        "div",
                        { className: "mobileNav__hamburger-menu", onClick: function onClick() {
                                return _this2.toggleMenu();
                            } },
                        _react2.default.createElement("i", { className: "fa fa-times", "aria-hidden": "true" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "logo" },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: "/" },
                            _react2.default.createElement("img", { className: "logo__icon", src: "../../img/address.svg" }),
                            "M\xE1s Casas"
                        )
                    ),
                    _react2.default.createElement(
                        "ul",
                        { className: "mobileNav__menu__nav" },
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "#" },
                                "Create Ads"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "#" },
                                "About us"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            { onClick: function onClick() {
                                    return _this2.toggleMenu();
                                } },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "/homes", className: "homes" },
                                "Homes"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "a",
                                { href: "#", className: "register-btn" },
                                "Register"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return mobileNavigation;
}(_react.Component);

exports.default = mobileNavigation;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Navigation;

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navigation() {
    return _react2.default.createElement(
        'section',
        { className: 'navigation' },
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            _react2.default.createElement(
                'div',
                { className: 'logo' },
                _react2.default.createElement('img', { className: 'logo__icon', src: '../../img/address.svg' }),
                'M\xE1s Casas'
            )
        ),
        _react2.default.createElement(
            'nav',
            null,
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/homes', className: 'homes' },
                'Homes'
            ),
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '#', className: 'createads' },
                'Create Ads'
            ),
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '#', className: 'aboutus' },
                'About us'
            ),
            _react2.default.createElement(
                'a',
                { href: '#', className: 'register-btn' },
                'Register'
            )
        )
    );
}

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: "Donly"
    };
    _this.cities = _this.cities.bind(_this);
    _this.homeTypes = _this.homeTypes.bind(_this);
    _this.bedrooms = _this.bedrooms.bind(_this);
    _this.scrollAndCloseFilter = _this.scrollAndCloseFilter.bind(_this);
    _this.resetFilter = _this.resetFilter.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.populateAction();
      console.log(this.props);
    }
  }, {
    key: "cities",
    value: function cities() {
      if (this.props.globalState.populateFormsData.cities != undefined) {
        var cities = this.props.globalState.populateFormsData.cities;
        // console.log(cities);

        return cities.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "homeTypes",
    value: function homeTypes() {
      if (this.props.globalState.populateFormsData.homeTypes != undefined) {
        var homeTypes = this.props.globalState.populateFormsData.homeTypes;
        // console.log(homeTypes);

        return homeTypes.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "bedrooms",
    value: function bedrooms() {
      if (this.props.globalState.populateFormsData.bedrooms != undefined) {
        var bedrooms = this.props.globalState.populateFormsData.bedrooms;
        // console.log(bedrooms);

        return bedrooms.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item,
            "+ BR"
          );
        });
      }
    }

    //This function closes filter and resets scroll position to top

  }, {
    key: "scrollAndCloseFilter",
    value: function scrollAndCloseFilter() {
      var filterSection = document.querySelector('#filter');
      //prop called to close filter
      this.props.showFilter.call(this);
      //function to push element to top after closing
      filterSection.scrollTo(0, 0);
      document.body.style.overflow = "auto";
    }

    //This function resets filter to default values

  }, {
    key: "resetFilter",
    value: function resetFilter() {
      var _this2 = this;

      //All input and selects avalible
      var formInputs = document.querySelectorAll('select,input');

      formInputs.forEach(function (element) {
        console.log(_this2);
        var type = element.type;
        var name = element.name;
        var tag = element.tagName.toLowerCase(); // normalize case
        // it's ok to reset the value attr of text inputs, 
        // password inputs, and textareas
        // type == 'text' is left out ignoring search the input
        if (type == 'number' || type == 'password' || tag == 'textarea') {
          element.defaultValue = element.dataset.originalValue;
          _this2.props.globalState[name] = element.defaultValue;

          // checkboxes and radios need to have their checked state cleared 
          // but should *not* have their 'value' changed
        } else if (type == 'checkbox' || type == 'radio') {
          element.checked = false;
          _this2.props.globalState[name] = element.checked;

          // select elements need to have their 'selectedIndex' property set to -1
          // (this works for both single and multiple select elements)
        } else if (tag == 'select') {
          element.selectedIndex = 0;
          _this2.props.globalState[name] = element.value;
        }
      });

      // Rerender or Recall filter data after all value have been reset in "globalState"
      this.props.filterData();
    }
    // bathrooms() {
    //   if (this.props.globalState.populateFormsData.bedrooms != undefined) {
    //     var { bedrooms } = this.props.globalState.populateFormsData;
    //     // console.log(bedrooms);
    //     return bedrooms.map((item) => {
    //       return (
    //         <option key={item} value={item}>
    //           {item}+ BR
    //         </option>
    //       );
    //     });
    //   }
    // }

  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "filter", style: { display: this.props.globalState.showFilter ? 'block' : 'none' } },
        _react2.default.createElement(
          "div",
          { className: "inside" },
          _react2.default.createElement(
            "h4",
            null,
            "Filter"
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "city" },
            "City"
          ),
          _react2.default.createElement(
            "select",
            {
              name: "city",
              className: " filters city",
              onChange: this.props.change
            },
            _react2.default.createElement(
              "option",
              { value: "All" },
              " All"
            ),
            this.cities()
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "homeType" },
            "Home Type"
          ),
          _react2.default.createElement(
            "select",
            {
              name: "homeType",
              className: "filters homeType threeRem",
              onChange: this.props.change
            },
            _react2.default.createElement(
              "option",
              { value: "All" },
              " All Homes"
            ),
            this.homeTypes()
          ),
          _react2.default.createElement(
            "div",
            { className: "filters bathrooms" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Bathrooms"
            ),
            _react2.default.createElement("input", { type: "radio", id: "bathroom1", value: "1", name: "bathrooms", onChange: this.props.change }),
            _react2.default.createElement(
              "label",
              { htmlFor: "bathroom1" },
              "1+"
            ),
            _react2.default.createElement("input", { type: "radio", id: "bathroom2", value: "2", name: "bathrooms", onChange: this.props.change }),
            _react2.default.createElement(
              "label",
              { htmlFor: "bathroom2" },
              "2+"
            ),
            _react2.default.createElement("input", { type: "radio", id: "bathroom3", value: "3", name: "bathrooms", onChange: this.props.change }),
            _react2.default.createElement(
              "label",
              { htmlFor: "bathroom3" },
              "3+"
            ),
            _react2.default.createElement("input", { type: "radio", id: "bathroom4", value: "4", name: "bathrooms", onChange: this.props.change }),
            _react2.default.createElement(
              "label",
              { htmlFor: "bathroom4" },
              "4+"
            ),
            _react2.default.createElement("input", { type: "radio", id: "bathroom5", value: "5+", name: "bathrooms", onChange: this.props.change }),
            _react2.default.createElement(
              "label",
              { htmlFor: "bathroom5" },
              "5+"
            )
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "bedrooms" },
            "Bedrooms"
          ),
          _react2.default.createElement(
            "select",
            {
              name: "bedrooms",
              className: "filters bedrooms threeRem",
              onChange: this.props.change
            },
            this.bedrooms()
          ),
          _react2.default.createElement(
            "div",
            { className: "filters price" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Price"
            ),
            _react2.default.createElement("input", {
              type: "number",
              name: "min_price",
              className: "min-price",
              onChange: this.props.change,
              value: this.props.globalState.min_price,
              "data-original-value": "0"
            }),
            _react2.default.createElement("input", {
              type: "number",
              name: "max_price",
              className: "max-price",
              onChange: this.props.change,
              value: this.props.globalState.max_price,
              "data-original-value": "10000000"
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters floor-space threeRem" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Floor Space"
            ),
            _react2.default.createElement("input", {
              type: "number",
              name: "min_floor_space",
              className: "min-floor-space",
              onChange: this.props.change,
              value: this.props.globalState.min_floor_space,
              "data-original-value": "0"
            }),
            _react2.default.createElement("input", {
              type: "number",
              name: "max_floor_space",
              className: "max-floor-space",
              onChange: this.props.change,
              value: this.props.globalState.max_floor_space,
              "data-original-value": "50000"
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters extras" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Extras"
            ),
            _react2.default.createElement(
              "label",
              { className: "extras__checkbox__label" },
              "Elevators",
              _react2.default.createElement("input", {
                type: "checkbox",
                name: "elevator",
                value: "elevator",
                onChange: this.props.change
              }),
              _react2.default.createElement(
                "span",
                { className: "extras__custom__checkbox" },
                _react2.default.createElement(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    focusable: "false"
                  },
                  _react2.default.createElement("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "3",
                    d: "M1.73 12.91l6.37 6.37L22.79 4.59"
                  })
                )
              )
            ),
            _react2.default.createElement(
              "label",
              { className: "extras__checkbox__label" },
              "Swimming Pool",
              _react2.default.createElement("input", {
                type: "checkbox",
                name: "swimming_pool",
                value: "swimming_pool",
                onChange: this.props.change
              }),
              _react2.default.createElement(
                "span",
                { className: "extras__custom__checkbox" },
                _react2.default.createElement(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    focusable: "false"
                  },
                  _react2.default.createElement("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "3",
                    d: "M1.73 12.91l6.37 6.37L22.79 4.59"
                  })
                )
              )
            ),
            _react2.default.createElement(
              "label",
              { className: "extras__checkbox__label" },
              "Finished Basement",
              _react2.default.createElement("input", {
                type: "checkbox",
                name: "finished_basement",
                value: "finished_basement",
                onChange: this.props.change
              }),
              _react2.default.createElement(
                "span",
                { className: "extras__custom__checkbox" },
                _react2.default.createElement(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    focusable: "false"
                  },
                  _react2.default.createElement("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "3",
                    d: "M1.73 12.91l6.37 6.37L22.79 4.59"
                  })
                )
              )
            ),
            _react2.default.createElement(
              "label",
              { className: "extras__checkbox__label" },
              "Gym",
              _react2.default.createElement("input", {
                type: "checkbox",
                name: "gym",
                value: "gym",
                onChange: this.props.change
              }),
              _react2.default.createElement(
                "span",
                { className: "extras__custom__checkbox" },
                _react2.default.createElement(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    focusable: "false"
                  },
                  _react2.default.createElement("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "3",
                    d: "M1.73 12.91l6.37 6.37L22.79 4.59"
                  })
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "filter__footer" },
            _react2.default.createElement(
              "button",
              { className: "filter__footer__reset-btn", onClick: this.resetFilter },
              "Reset"
            ),
            _react2.default.createElement(
              "button",
              { className: "filter__footer__done-btn", onClick: this.scrollAndCloseFilter },
              "Done"
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _Pagination = __webpack_require__(190);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _reactRouterDom = __webpack_require__(38);

var _reactCssTransitionReplace = __webpack_require__(110);

var _reactCssTransitionReplace2 = _interopRequireDefault(_reactCssTransitionReplace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      currentPage: 1,
      postPerPage: 9
    };
    _this.loopListing = _this.loopListing.bind(_this);
    _this.paginate = _this.paginate.bind(_this);
    _this.openFilter = _this.openFilter.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: "isActiveClass",
    value: function isActiveClass(value) {
      return value === this.props.changeView ? 'active' : '';
    }
  }, {
    key: "openFilter",
    value: function openFilter() {
      this.props.showFilter.call(this);
      document.body.style.overflow = "hidden";
    }
  }, {
    key: "paginate",
    value: function paginate(pageNumber) {
      this.setState({ currentPage: pageNumber });
    }
  }, {
    key: "loopListing",
    value: function loopListing() {
      var _this2 = this;

      // Search through all Listing Data from homepage which is newly filtered Data
      var listingData = this.props.listingData;


      if (listingData == undefined || listingData.length == 0) {
        return "Sorry your filter did not match any listing";
      }

      // ShowCase Fixed amount of listing for current page (postPerPage holds this amount)
      var indexOFLastPost = this.state.currentPage * this.state.postPerPage; //1*8=8
      var indexOfFirstPage = indexOFLastPost - this.state.postPerPage; //8-8=0
      var currentPost = listingData.slice(indexOfFirstPage, indexOFLastPost); //(0,8)

      return currentPost.map(function (listing, index) {
        if (_this2.props.globalState.view == "box") {
          //THIS IS THE BOX VIEW
          return _react2.default.createElement(
            "div",
            { className: "col-md-4 col-xxl-3", key: index },
            _react2.default.createElement(
              "div",
              { className: "listing" },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: {
                    pathname: _this2.props.match.url + "/listing/" + index,
                    state: listing
                  } },
                _react2.default.createElement(
                  "div",
                  {
                    className: "listing-img"
                    // style={{
                    //   background: `url("${listing.image}")
                    //   no-repeat center center`,
                    //   backgroundSize: 'cover'
                    // }}
                  },
                  _react2.default.createElement(
                    "picture",
                    null,
                    _react2.default.createElement("source", { srcSet: "" + listing.thumbnailImg.webp, type: "image/webp" }),
                    _react2.default.createElement("source", { srcSet: "" + listing.thumbnailImg.jpg, type: "image/jpeg" }),
                    _react2.default.createElement("img", { src: "" + listing.thumbnailImg.jpg, alt: "apartment" })
                  ),
                  _react2.default.createElement(
                    "span",
                    { className: "furnished" },
                    "Furnished"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "details" },
                    _react2.default.createElement(
                      "div",
                      { className: "user__img" },
                      _react2.default.createElement("div", { className: "user__img__icon" })
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "detail-info" },
                      _react2.default.createElement(
                        "div",
                        { className: "user-details" },
                        _react2.default.createElement(
                          "span",
                          { className: "user-name" },
                          "Nina Smith"
                        ),
                        _react2.default.createElement(
                          "span",
                          { className: "post-date" },
                          "05/05/2020"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "favorite-btn" },
                        _react2.default.createElement("i", { className: "fa fa-heart-o", "aria-hidden": "true" })
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "bottom-info" },
                  _react2.default.createElement(
                    "span",
                    { className: "price" },
                    "$",
                    listing.price,
                    " /month "
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "rooms" },
                    _react2.default.createElement(
                      "span",
                      null,
                      listing.bedrooms,
                      " Beds, ",
                      listing.bathrooms,
                      " Baths, ",
                      listing.floorSpace,
                      " ft\xB2"
                    )
                  ),
                  _react2.default.createElement(
                    "span",
                    { className: "location" },
                    " ",
                    listing.address,
                    ", ",
                    listing.city,
                    ", ",
                    listing.state
                  )
                )
              )
            )
          );
        } else {
          //THIS IS THE LONG VIEW
          return _react2.default.createElement(
            "div",
            { className: "col-md-12 col-lg-12 col-xxl-6", key: index },
            _react2.default.createElement(
              "div",
              { className: "listing", id: "listing__long__view" },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: {
                    pathname: _this2.props.match.url + "/listing/" + index,
                    state: listing
                  } },
                _react2.default.createElement(
                  "div",
                  {
                    className: "listing-img"
                    // style={{
                    //   background: `url("${listing.image}")
                    //   no-repeat center center`,
                    //   backgroundSize: 'cover'
                    // }}
                  },
                  _react2.default.createElement(
                    "picture",
                    null,
                    _react2.default.createElement("source", { srcSet: "" + listing.thumbnailImg.webp, type: "image/webp" }),
                    _react2.default.createElement("source", { srcSet: "" + listing.thumbnailImg.jpg, type: "image/jpeg" }),
                    _react2.default.createElement("img", { src: "" + listing.thumbnailImg.jpg, alt: "apartment" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "details" },
                    _react2.default.createElement(
                      "div",
                      { className: "user__img" },
                      _react2.default.createElement("div", { className: "user__img__icon" })
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "detail-info" },
                      _react2.default.createElement(
                        "div",
                        { className: "user-details" },
                        _react2.default.createElement(
                          "span",
                          { className: "user-name" },
                          "Nina Smith"
                        ),
                        _react2.default.createElement(
                          "span",
                          { className: "post-date" },
                          "05/05/2020"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "favorite-btn" },
                        _react2.default.createElement("i", { className: "fa fa-heart-o", "aria-hidden": "true" })
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "bottom-info" },
                  _react2.default.createElement(
                    "div",
                    { className: "listing__details__top" },
                    _react2.default.createElement(
                      "div",
                      { className: "house__info" },
                      _react2.default.createElement(
                        "span",
                        { className: "house__info__sell-option" },
                        "For Sale"
                      ),
                      _react2.default.createElement(
                        "span",
                        { className: "house__info__location" },
                        listing.address
                      ),
                      _react2.default.createElement(
                        "span",
                        { className: "house__info__address" },
                        listing.city,
                        ", ",
                        listing.state
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "house__info__type" },
                      "Apartment"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "house__info__amount-section" },
                      _react2.default.createElement(
                        "span",
                        { className: "house__info__availability" },
                        "New"
                      ),
                      _react2.default.createElement(
                        "span",
                        { className: "house__info__price" },
                        "$ ",
                        listing.price,
                        " "
                      ),
                      _react2.default.createElement(
                        "span",
                        { className: "house__info__original-price" },
                        "$ ",
                        listing.price,
                        " "
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "listing__details__bottom" },
                    _react2.default.createElement(
                      "div",
                      { className: "floor__area" },
                      _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                          "span",
                          { className: "floor__area__bed" },
                          listing.bedrooms,
                          " ",
                          _react2.default.createElement("i", { className: "fa fa-bed", "aria-hidden": "true" })
                        ),
                        "|",
                        _react2.default.createElement(
                          "span",
                          { className: "floor__area__bath" },
                          " ",
                          listing.bathrooms,
                          " ",
                          _react2.default.createElement("i", { className: "fa fa-bath", "aria-hidden": "true" })
                        ),
                        "|",
                        _react2.default.createElement(
                          "span",
                          { className: "floor__area__squarefoot" },
                          listing.floorSpace,
                          " ft\xB2 ",
                          _react2.default.createElement("i", { className: "fa fa fa-object-ungroup", "aria-hidden": "true" })
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "house__details" },
                      _react2.default.createElement(
                        "span",
                        { className: "house__details__parking" },
                        "Parking:"
                      ),
                      _react2.default.createElement(
                        "span",
                        { className: "house__details__parking-area" },
                        "Yard"
                      ),
                      _react2.default.createElement(
                        "span",
                        { className: "house__details__furnished" },
                        "Furnished"
                      )
                    )
                  )
                )
              )
            )
          );
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "listings" },
        _react2.default.createElement(
          "section",
          { className: "search-area" },
          _react2.default.createElement(
            "button",
            { className: "filter-btn", onClick: this.openFilter },
            _react2.default.createElement("i", { className: "fa fa-sliders", "aria-hidden": "true" })
          ),
          _react2.default.createElement("input", { type: "text", name: "search", onChange: this.props.change, placeholder: "Search..." }),
          _react2.default.createElement(
            "div",
            { className: "sort-options" },
            _react2.default.createElement(
              "select",
              {
                name: "sortby",
                className: "sortby",
                onChange: this.props.change
              },
              _react2.default.createElement(
                "option",
                { value: "price-dsc" },
                " Lowest Price"
              ),
              _react2.default.createElement(
                "option",
                { value: "price-asc" },
                " Highest Price"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "view" },
              _react2.default.createElement("i", {
                className: "fa fa-th-list " + (this.props.globalState.view === 'long' ? 'active' : ''),
                "aria-hidden": "true",
                onClick: this.props.changeView.bind(console.log(this.props.globalState.view), "long")
              }),
              _react2.default.createElement("i", {
                className: "fa fa-th " + (this.props.globalState.view === 'box' ? 'active' : ''),
                "aria-hidden": "true",
                onClick: this.props.changeView.bind(console.log(this.props.globalState.view), "box")
              })
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { className: "sortby-area" },
          _react2.default.createElement(
            "div",
            { className: "results" },
            this.props.globalState.filteredData.length,
            " results found"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            _reactCssTransitionReplace2.default,
            { transitionName: "fade-wait",
              transitionEnterTimeout: 700, transitionLeaveTimeout: 300 },
            _react2.default.createElement(
              "section",
              { key: this.props.currentView || this.state.currentPage, className: "listings-results" },
              this.loopListing()
            )
          )
        ),
        _react2.default.createElement(_Pagination2.default, {
          postPerPage: this.state.postPerPage,
          totalPost: this.props.listingData.length,
          currentPage: this.state.currentPage,
          paginate: this.paginate
        })
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Listings);

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _immutabilityHelper = __webpack_require__(413);

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this));

    _this.calcPagination = function () {
      // Calculate correct amt of pagination number
      var newArray = []; //Array that holds numberes beinga pushed

      for (var i = 1; i <= Math.ceil(_this.props.totalPost / _this.props.postPerPage); i++) {
        //pushes each index into array outside of loop
        newArray.push(i);
      }

      // Variable that pushes new array into pageNumbers using immutability
      var newState = (0, _immutabilityHelper2.default)(_this.state.pageNumbers, {
        // $push: newArray, //Push workes here as well but creates a but when reRendering...doesnt reSet the entire array, just  adds
        $set: newArray
      });

      //Sets the new state for "pageNumbers" by passing the variable instructs pushing numbers
      _this.setState({ pageNumbers: newState });
    };

    _this.state = {
      pageNumbers: []
    };
    return _this;
  }

  _createClass(Pagination, [{
    key: "componentDidMount",


    //Loads entire pagination based on full listing data
    value: function componentDidMount() {
      this.calcPagination();
    }

    //Rerenders pagination based on currently filtered data

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.totalPost !== prevProps.totalPost) {
        this.calcPagination();
      }
    }

    //increments current page by one

  }, {
    key: "calcNextPage",
    value: function calcNextPage() {
      //Selects last Page number
      var _state$pageNumbers$sl = this.state.pageNumbers.slice(-1),
          _state$pageNumbers$sl2 = _slicedToArray(_state$pageNumbers$sl, 1),
          lastItem = _state$pageNumbers$sl2[0];
      // only increments if last page number is larger


      if (lastItem > this.props.currentPage) {
        var nextPage = this.props.currentPage + 1;
        // this changes current page to nextPage
        this.props.paginate(nextPage);
      }
    }

    //decrements current page by one

  }, {
    key: "calcPrevPage",
    value: function calcPrevPage() {
      //Selects first Page number
      var _state$pageNumbers$sl3 = this.state.pageNumbers.slice(0),
          _state$pageNumbers$sl4 = _slicedToArray(_state$pageNumbers$sl3, 1),
          firstItem = _state$pageNumbers$sl4[0];
      // only decrements if fast page number is smaller


      if (firstItem < this.props.currentPage) {
        var prevPage = this.props.currentPage - 1;
        console.log(this.props.currentPage);
        // this changes current page to prevPage
        this.props.paginate(prevPage);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // console.log(this.props.totalPost);
      console.log(this.state.pageNumbers);
      return _react2.default.createElement(
        "section",
        { id: "pagination" },
        _react2.default.createElement(
          "div",
          { className: "raw" },
          _react2.default.createElement(
            "ul",
            { className: "pagination-nums" },
            _react2.default.createElement(
              "li",
              { onClick: function onClick() {
                  return _this2.calcPrevPage();
                } },
              "Prev"
            ),
            this.state.pageNumbers.map(function (number, index) {
              return _react2.default.createElement(
                "li",
                {
                  // key={number + 1}
                  key: index,
                  onClick: function onClick() {
                    return _this2.props.paginate(number);
                  }
                },
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  " ",
                  number,
                  " "
                )
              );
            }),
            _react2.default.createElement(
              "li",
              { onClick: function onClick() {
                  return _this2.calcNextPage();
                } },
              "Next"
            )
          )
        )
      );
    }
  }]);

  return Pagination;
}(_react.Component);

exports.default = Pagination;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingData = [{
  id: 0,
  address: "Grand Riviere",
  city: "Castries",
  state: "SLU",
  bedrooms: 6,
  bathrooms: 3,
  price: 2100,
  floorSpace: 2000,
  extra: ["elevator", "gym"],
  homeType: "Apartment",
  description: "This is a 6 bedrooms, 3 full baths single-Family Home. Located in the Central Sunset. It features 4 bonus bedrooms, with 2 baths (built to code). 1-car garage with plenty of street parking. View of Golden gate. Walking distance to Corinth Secondary School. Fantastic opportunity to move into a turn-key, move-in ready home or use as a rental investment.",
  thumbnailImg: {
    webp: "/img/thumbnails/house_id_1.webp",
    jpg: "/img/thumbnails/house_id_1.jpg",
    // jpg:"https://passiveincomemd.com/wp-content/uploads/2017/06/Front-Back-Building.jpg",
    alt: ''
  },
  detailImg: [{
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }, {
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }, {
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }]
}, {
  id: 1,
  address: "Cap Estate",
  city: "Gros Islet",
  state: "SLU",
  bedrooms: 3,
  bathrooms: 4,
  price: 241000,
  floorSpace: 22000,
  extra: ["elevator", "gym"],
  homeType: "Duplex",
  description: "This one-of-a-kind Cap Estate property has gorgeous mid-century bones with stunning city and Bay views. The expansive multi-level home is the perfect blank slate to add your personal touches and upgrades. The home welcomes you with a foyer and dining room then leads to the mezzanine overlooking the dramatic living room with soaring beamed ceilings and ...",
  // image: "https://q-xx.bstatic.com/images/hotel/max1024x768/100/10016411.jpg",
  thumbnailImg: {
    webp: "https://q-xx.bstatic.com/images/hotel/max1024x768/100/10016411.webp",
    jpg: "https://q-xx.bstatic.com/images/hotel/max1024x768/100/10016411.jpg",
    alt: ''
  },
  detailImg: [{
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }, {
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }, {
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }]
}, {
  id: 2,
  address: "Black Bay",
  city: "Vieux Fort",
  state: "SLU",
  bedrooms: 5,
  bathrooms: 3,
  price: 10000,
  floorSpace: 10000,
  extra: ["elevator", "gym", "swimming_pool"],
  homeType: "Apartment",
  description: "Sweeping View home from 3 levels! Fully renovated Mid-Century Home atop GG Heights with light filled gated entry & skylight. Enter the main level which offers 2 bedrooms, 1 bathroom w/skylight. The open living/dining, and kitchen w/island area with view balcony allow for entertainer's dream!",
  // image:
  //   "https://idesign161.files.wordpress.com/2017/09/gorgeous-evening-view-of-russet-residence-1025x450.jpg?w=739",
  thumbnailImg: {
    webp: "/img/thumbnails/house_id_2.webp",
    jpg: "/img/thumbnails/house_id_2.jpg",
    alt: ''
  },
  detailImg: [{
    webp: "/img/listingDetails/home-display2.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }, {
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }, {
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }]
}, {
  id: 3,
  address: "Lime Stone",
  city: "Dennery",
  state: "SLU",
  bedrooms: 4,
  bathrooms: 2,
  price: 400000,
  floorSpace: 7000,
  extra: ["elevator", "Garage"],
  homeType: "Studio",
  description: "Panoramic Lime Stone Views will immediately greet you from the zen garden entry of this spacious remodeled home. Dramatic vaulted ceilings in the open living area make this a perfect space for entertaining or cozy nights with the family. The renovated showcase kitchen with a grand quartz island and stainless steel appliances opens to the living and dining areas and is surrounded by multiple outdoor spaces and views. Stairs down lead to the large primary bedroom with ensuite bath, second bedroom, full bath, laundry and storage room.",
  // image:
  //   "https://images.squarespace-cdn.com/content/5abbea6fc258b4f56d09219e/1524087111985-FMCVW3XY42FBBRZEC5Z5/greenfab.jpeg?content-type=image%2Fjpeg",
  thumbnailImg: {
    webp: "/img/thumbnails/house_id_3.webp",
    jpg: "/img/thumbnails/house_id_3.jpg",
    alt: ''
  },
  detailImg: [{
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }, {
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }, {
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }]
}, {
  id: 4,
  address: "25th main street",
  city: "Laborie",
  state: "SLU",
  bedrooms: 1,
  bathrooms: 1,
  price: 230000,
  floorSpace: 8000,
  extra: ["beach"],
  homeType: "Room",
  description: "Welcome to this gorgeous 1 Bed 1 Bath CORNER UNIT with impressive sea view, 2 balconies and parking. Getting this room include a Heated Pool, Beach, Landscaped Courtyard with Furniture, Onsite Management. Close to Grace Cathedral, Union Square and the Street corridor - Enjoy living in the heart of the Laborie!",
  // image:
  //   "https://rentivo.imagekit.io/cdn/tr:n-max/http://dujlrb80v4oq5.cloudfront.net/578/83959073_gw1418680.jpg",
  thumbnailImg: {
    webp: "/img/thumbnails/house_id_4.webp",
    jpg: "/img/thumbnails/house_id_4.jpg",
    alt: ''
  },
  detailImg: [{
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }, {
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }, {
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }]
}, {
  id: 5,
  address: "Beach Pavillion",
  city: "Soufriere",
  state: "SLU",
  bedrooms: 6,
  bathrooms: 6,
  price: 400000,
  floorSpace: 7000,
  extra: ["elevator", "swimming_pool"],
  homeType: "Hotel",
  description: "Flooded with light, inspired by nature, and crafted with Troon Pacific's unmatched expertise, Residence 2582 demonstrates the best of modern Beach Pavillion architecture rarely seen in the heart of Soufriere. Generous terraces on each floor and an outdoor garden oasis with 72' lap pool offer enticing reasons to spend more time outside.",
  // image:
  //   "https://cdn.villa-bali.com/cache/fullSize/villas/noku-beach-house/noku-beach-house-noku-beach-house-exquisite-villa-feature-5b8f4a6f08970.jpg",
  thumbnailImg: {
    webp: "/img/thumbnails/house_id_5.webp",
    jpg: "/img/thumbnails/house_id_5.jpg",
    alt: ''
  },
  detailImg: [{
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }, {
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }, {
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }]
}, {
  id: 6,
  address: "Beach Pavillion",
  city: "Soufriere",
  state: "SLU",
  bedrooms: 6,
  bathrooms: 3,
  price: 400000,
  floorSpace: 7000,
  extra: ["elevator", "swimming_pool"],
  homeType: "Hotel",
  description: "This 2 level beautifully renovated Penthouse at the Beach Pavillion showcases sweeping views from the sea to Piton Mountain. Sophistication is found at every moment, from the prominent entry hall with sweeping stair and fireplace, to the nearly 50' long grand gallery framing Bay views.",
  // image:
  //   "https://cdn.villa-bali.com/cache/fullSize/villas/noku-beach-house/noku-beach-house-noku-beach-house-exquisite-villa-feature-5b8f4a6f08970.jpg",
  thumbnailImg: {
    webp: "/img/thumbnails/house_id_6.webp",
    jpg: "/img/thumbnails/house_id_6.jpg",
    alt: ''
  },
  detailImg: [{
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }, {
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }, {
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }]
}, {
  id: 7,
  address: "Beach Pavillion",
  city: "Soufriere",
  state: "SLU",
  bedrooms: 6,
  bathrooms: 2,
  price: 400000,
  floorSpace: 7000,
  extra: ["elevator", "swimming_pool"],
  homeType: "Hotel",
  description: "This 2 level beautifully renovated Penthouse at the Beach Pavillion showcases sweeping views from the sea to Piton Mountain. Sophistication is found at every moment, from the prominent entry hall with sweeping stair and fireplace, to the nearly 50' long grand gallery framing Bay views.",
  // image:
  //   "https://cdn.villa-bali.com/cache/fullSize/villas/noku-beach-house/noku-beach-house-noku-beach-house-exquisite-villa-feature-5b8f4a6f08970.jpg",
  thumbnailImg: {
    webp: "/img/thumbnails/house_id_7.webp",
    jpg: "/img/thumbnails/house_id_7.jpg",
    alt: ''
  },
  detailImg: [{
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg"
  }, {
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }, {
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }]
}, {
  id: 8,
  address: "Beach Pavillion",
  city: "Soufriere",
  state: "SLU",
  bedrooms: 6,
  bathrooms: 5,
  price: 400000,
  floorSpace: 7000,
  extra: ["elevator", "swimming_pool"],
  homeType: "Hotel",
  description: "This 2 level beautifully renovated Penthouse at the Beach Pavillion showcases sweeping views from the sea to Piton Mountain. Sophistication is found at every moment, from the prominent entry hall with sweeping stair and fireplace, to the nearly 50' long grand gallery framing Bay views.",
  // image:
  //   "https://cdn.villa-bali.com/cache/fullSize/villas/noku-beach-house/noku-beach-house-noku-beach-house-exquisite-villa-feature-5b8f4a6f08970.jpg",
  thumbnailImg: {
    webp: "/img/thumbnails/house_id_8.webp",
    jpg: "/img/thumbnails/house_id_8.jpg",
    alt: ''
  },
  detailImg: [{
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg"
  }, {
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }, {
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }]
}, {
  id: 9,
  address: "Beach Pavillion",
  city: "Soufriere",
  state: "SLU",
  bedrooms: 6,
  bathrooms: 2,
  price: 400000,
  floorSpace: 7000,
  extra: ["elevator", "swimming_pool"],
  homeType: "Hotel",
  description: "This 2 level beautifully renovated Penthouse at the Beach Pavillion showcases sweeping views from the sea to Piton Mountain. Sophistication is found at every moment, from the prominent entry hall with sweeping stair and fireplace, to the nearly 50' long grand gallery framing Bay views.",
  // image:
  //   "https://cdn.villa-bali.com/cache/fullSize/villas/noku-beach-house/noku-beach-house-noku-beach-house-exquisite-villa-feature-5b8f4a6f08970.jpg",
  thumbnailImg: {
    webp: "/img/thumbnails/house_id_9.webp",
    jpg: "/img/thumbnails/house_id_9.jpg",
    alt: ''
  },
  detailImg: [{
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }, {
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }, {
    webp: "/img/apartment.webp",
    jpg: "/img/apartment.jpg",
    alt: ''
  }]
}];

exports.default = listingData;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(38);

var _reactCssTransitionReplace = __webpack_require__(110);

var _reactCssTransitionReplace2 = _interopRequireDefault(_reactCssTransitionReplace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListingDetails = function (_Component) {
  _inherits(ListingDetails, _Component);

  function ListingDetails(props) {
    _classCallCheck(this, ListingDetails);

    var _this = _possibleConstructorReturn(this, (ListingDetails.__proto__ || Object.getPrototypeOf(ListingDetails)).call(this, props));

    _this.checkListingResult = function () {
      var listingResult = (_this.props.location.state && _this.props.location.state.listing) != undefined ? _this.props.location.state.listing : _this.props.listingData[_this.props.match.params.id];
      return listingResult;
    };

    _this.propertyID = 0;

    _this.state = {
      listing: _this.checkListingResult(),
      properties: _this.props.listingData,
      // isLoaded:false,
      // property:this.props.listingData[0],
      propertyIndexNumber: _this.propertyID,
      sliderShift: 0
    };
    return _this;
  }

  _createClass(ListingDetails, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Current listing that is selected to be viewed
      this.initializeComponent();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      //call your listing api through link and update state with new props/new data to displayed
      this.setState({
        listing: nextProps.location.state
      });
    }

    // Use URL id number to fetch data if it can't with location state

  }, {
    key: 'initializeComponent',


    //Function that is ran when component starts
    value: function initializeComponent() {
      //Check if location state is not defined then assign it ':id' slug(This is fixes manually typing url)
      if (this.props.location.state == undefined) {
        this.props.location.state = this.state.properties[this.props.match.params.id];
      }

      // This sets state listing to location.state
      this.state.listing = this.props.location.state;
      // this.state.listing = this.state.properties[this.props.match.params.id];

      //This sets the slider listing to width to the variable
      var listingCardWidth = document.querySelector('.col-md-4').clientWidth;
      this.setState({ listingCardWidth: listingCardWidth });

      //On window resize update state('listingCardWidth' & 'sliderShift') to new value
      window.addEventListener('resize', function resizeScreen() {
        var newWidth = document.querySelector('.col-md-4').clientWidth;
        var newSliderShift = this.state.propertyIndexNumber * newWidth;

        this.setState({
          listingCardWidth: newWidth,
          sliderShift: newSliderShift
        });
      }.bind(this));
    }
  }, {
    key: 'loopListing',
    value: function loopListing() {
      var _this2 = this;

      // Search through all Listing Data from homepage which is newly filtered Data
      var listingData = this.props.listingData;


      if (listingData == undefined || listingData.length == 0) {
        return "Sorry your filter did not match any listing";
      }

      // ShowCase Fixed amount of listing for current page (postPerPage holds this amount)
      return listingData.map(function (listing, index) {
        return _react2.default.createElement(
          'div',
          { className: 'col-md-4', key: index },
          _react2.default.createElement(
            'div',
            { className: 'listing' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: {
                  pathname: '' + (_this2.props.location.pathname.split('/').slice(0, -1).join('/') + '/' + index),
                  state: listing
                } },
              _react2.default.createElement(
                'div',
                {
                  className: 'listing-img'
                  // style={{
                  //   background: `url("${listing.image}")
                  //   no-repeat center center`,
                  //   backgroundSize: 'cover'
                  // }}
                },
                _react2.default.createElement(
                  'picture',
                  null,
                  _react2.default.createElement('source', { srcSet: '' + listing.thumbnailImg.webp, type: 'image/webp' }),
                  _react2.default.createElement('source', { srcSet: '../../img/home-display1.png', type: 'image/png' }),
                  _react2.default.createElement('img', { src: '../../img/home-display2.png', alt: 'apartment' })
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'furnished' },
                  'Furnished'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'user__img' },
                    _react2.default.createElement('div', { className: 'user__img__icon' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'detail-info' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        'Nina Smith'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        '05/05/2020'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'favorite-btn' },
                      _react2.default.createElement('i', { className: 'fa fa-heart-o', 'aria-hidden': 'true' })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  listing.price,
                  ' /month '
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'rooms' },
                  _react2.default.createElement(
                    'span',
                    null,
                    listing.bedrooms,
                    ' Beds, 2 Baths, ',
                    listing.floorSpace,
                    ' ft\xB2'
                  )
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  " ",
                  listing.address,
                  ', ',
                  listing.city,
                  ', ',
                  listing.state
                )
              )
            )
          )
        );
      });
    }

    //Variable that contains property link url id/index
    // propertyID = parseInt(this.props.match.params.id);

  }, {
    key: 'switchProperty',


    //Function to either add or subtract to the current id/index number and 
    value: function switchProperty(value) {
      //Increment and Decrement propertyID based on value
      var num = value == "previous_Property" ? --this.propertyID : ++this.propertyID;
      //Update SliderShift based on value passed
      var sliderShift = value == "previous_Property" ? this.state.sliderShift -= this.state.listingCardWidth : this.state.sliderShift += this.state.listingCardWidth;

      this.setState({
        // property: this.state.properties[num],
        propertyIndexNumber: num,
        sliderShift: sliderShift
      });
    }

    // componentWillUnmount() {
    //   this.initializeComponent();
    // }


  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      // console.log(this.state.properties[this.props.match.params.id]);
      // console.log(this.props.location);
      // console.log(this.state.listing.detailImg[0].webp);
      // console.log(this.props.listingData[this.props.match.params.id]);

      return _react2.default.createElement(
        'section',
        { className: 'current__listing' },
        _react2.default.createElement(
          _reactCssTransitionReplace2.default,
          { transitionName: 'fade-wait',
            transitionEnterTimeout: 700, transitionLeaveTimeout: 300 },
          _react2.default.createElement(
            'div',
            { className: 'current__listing__info', key: this.state.listing.id },
            _react2.default.createElement(
              'div',
              { className: 'current__listing__images' },
              _react2.default.createElement(
                'div',
                { className: 'image__main'
                  // style={{
                  //       background: `url('../../img/home-display1.png')
                  //       no-repeat center center`,
                  //       backgroundSize: 'cover'
                  //     }}
                },
                _react2.default.createElement(
                  'picture',
                  null,
                  _react2.default.createElement('source', { srcSet: '' + this.state.listing.detailImg[0].webp, type: 'image/webp' }),
                  _react2.default.createElement('source', { srcSet: '../../img/home-display1.png', type: 'image/png' }),
                  _react2.default.createElement('img', { src: '../../img/home-display2.png', alt: 'apartment' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'image__sub' },
                _react2.default.createElement(
                  'div',
                  { className: 'image__sub__option'
                  },
                  _react2.default.createElement(
                    'picture',
                    null,
                    _react2.default.createElement('source', { srcSet: '/img/listingDetails/home-display2.webp', type: 'image/webp' }),
                    _react2.default.createElement('source', { srcSet: '../../img/listingDetails/home-display2.jpg', type: 'image/jpeg' }),
                    _react2.default.createElement('img', { src: '../../img/listingDetails/home-display2.jpg', alt: 'house_display_2' })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'image__sub__option' },
                  _react2.default.createElement(
                    'picture',
                    null,
                    _react2.default.createElement('source', { srcSet: '/img/apartment.webp', type: 'image/webp' }),
                    _react2.default.createElement('source', { srcSet: '../../img/home-display3.png', type: 'image/png' }),
                    _react2.default.createElement('img', { src: '../../img/home-display2.png', alt: 'apartment' })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'image__sub__option' },
                  _react2.default.createElement(
                    'picture',
                    null,
                    _react2.default.createElement('source', { srcSet: '/img/apartment.webp', type: 'image/webp' }),
                    _react2.default.createElement('source', { srcSet: '../../img/home-display4.png', type: 'image/png' }),
                    _react2.default.createElement('img', { src: '../../img/home-display2.png', alt: 'apartment' })
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'current__listing__details' },
              _react2.default.createElement(
                'div',
                { className: 'details__info' },
                _react2.default.createElement(
                  'span',
                  { className: 'details__info__price' },
                  '$15,000 /Year'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'details__info__location' },
                  this.state.listing.address,
                  ', peachfield, UK'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'details__plan' },
                _react2.default.createElement(
                  'div',
                  { className: 'details__plan__bedroom' },
                  'Bedroom',
                  _react2.default.createElement(
                    'div',
                    { className: 'details__plan__amount' },
                    this.state.listing.bedrooms,
                    ' ',
                    _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details__plan__bathroom' },
                  'Bathroom',
                  _react2.default.createElement(
                    'div',
                    { className: 'details__plan__amount' },
                    '4 ',
                    _react2.default.createElement('i', { className: 'fa fa-bath', 'aria-hidden': 'true' })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details__plan__squarefoot' },
                  'Area',
                  _react2.default.createElement(
                    'div',
                    { className: 'details__plan__amount' },
                    ' 2309ft \xB2'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'details__description' },
                _react2.default.createElement(
                  'span',
                  { className: 'details__description__title' },
                  'Description'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  this.state.listing.description
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'details__nearby' },
                _react2.default.createElement(
                  'span',
                  { className: 'details__nearby__title' },
                  'Close Locations'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details__nearby__spot' },
                  _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement('i', { className: 'fa fa-graduation-cap', 'aria-hidden': 'true' }),
                    ' School'
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'details__nearby__amount' },
                    ' 0.8 miles'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details__nearby__spot' },
                  _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement('i', { className: 'fa fa-university', 'aria-hidden': 'true' }),
                    ' State Banks'
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'details__nearby__amount' },
                    ' 1.5 miles'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'related' },
          _react2.default.createElement(
            'span',
            { className: 'related__amount' },
            '64 Results'
          ),
          _react2.default.createElement(
            'button',
            { className: 'left-btn', value: 'previous_Property', onClick: function onClick() {
                return _this3.switchProperty("previous_Property");
              },
              disabled: this.state.propertyIndexNumber === 0
            },
            '\u279C'
          ),
          _react2.default.createElement(
            'button',
            { className: 'right-btn', value: 'next_Property', onClick: function onClick() {
                return _this3.switchProperty("next_Property");
              },
              disabled: this.state.propertyIndexNumber === this.state.properties.length - 3
            },
            '\u279C'
          ),
          _react2.default.createElement(
            'div',
            { className: 'related__results__slider' },
            _react2.default.createElement(
              'div',
              { className: 'related__results__slider__system', style: {
                  transform: 'translateX(-' + this.state.sliderShift + 'px)'
                } },
              this.loopListing()
            )
          )
        )
      );
    }
  }]);

  return ListingDetails;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(ListingDetails);

/***/ })

},[185]);