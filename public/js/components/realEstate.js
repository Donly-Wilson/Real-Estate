webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

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
    return _this;
  }

  _createClass(Filter, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.populateAction();
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
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "filter" },
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
            { htmlFor: "city" },
            "Home Type"
          ),
          _react2.default.createElement(
            "select",
            {
              name: "homeType",
              className: "filters homeType",
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
            "label",
            { htmlFor: "city" },
            "Bedrooms"
          ),
          _react2.default.createElement(
            "select",
            {
              name: "bedrooms",
              className: "filters bedrooms",
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
              type: "text",
              name: "min_price",
              className: "min-price",
              onChange: this.props.change,
              value: this.props.globalState.min_price
            }),
            _react2.default.createElement("input", {
              type: "text",
              name: "max_price",
              className: "max-price",
              onChange: this.props.change,
              value: this.props.globalState.max_price
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters floor-space" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Floor Space"
            ),
            _react2.default.createElement("input", {
              type: "text",
              name: "min_floor_space",
              className: "min-floor-space",
              onChange: this.props.change,
              value: this.props.globalState.min_floor_space
            }),
            _react2.default.createElement("input", {
              type: "text",
              name: "max_floor_space",
              className: "max-floor-space",
              onChange: this.props.change,
              value: this.props.globalState.max_floor_space
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
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Elevators"
              ),
              _react2.default.createElement("input", {
                type: "checkbox",
                name: "elevator",
                value: "elevator",
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Swimming Pool"
              ),
              _react2.default.createElement("input", {
                type: "checkbox",
                name: "swimming_pool",
                value: "swimming_pool",
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Finished Basement"
              ),
              _react2.default.createElement("input", {
                type: "checkbox",
                name: "finished_basement",
                value: "finished_basement",
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Gym"
              ),
              _react2.default.createElement("input", {
                type: "checkbox",
                name: "gym",
                value: "gym",
                onChange: this.props.change
              })
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

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

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
        _react2.default.createElement(
          "div",
          { className: "logo" },
          "M\xE1s Casas"
        ),
        _react2.default.createElement(
          "nav",
          null,
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Create Ads"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "About us"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Log In"
          ),
          _react2.default.createElement(
            "a",
            { href: "#", className: "register-btn" },
            "Register"
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _Pagination = __webpack_require__(237);

var _Pagination2 = _interopRequireDefault(_Pagination);

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
      postPerPage: 8,
      currentView: ""
    };
    _this.loopListing = _this.loopListing.bind(_this);
    _this.paginate = _this.paginate.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: "paginate",
    value: function paginate(pageNumber) {
      this.setState({ currentPage: pageNumber });
    }
  }, {
    key: "loopListing",
    value: function loopListing() {
      var _this2 = this;

      // Search through all Listing Data which is newly filtered Data
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
            { className: "col-md-3", key: index },
            _react2.default.createElement(
              "div",
              { className: "listing" },
              _react2.default.createElement(
                "div",
                {
                  className: "listing-img",
                  style: {
                    background: "url(\"" + listing.image + "\")\n          no-repeat center center"
                  }
                },
                _react2.default.createElement(
                  "span",
                  { className: "address" },
                  listing.address
                ),
                _react2.default.createElement(
                  "div",
                  { className: "details" },
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-3" },
                    _react2.default.createElement("div", { className: "user-img" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-9" },
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
                      { className: "listing-details" },
                      _react2.default.createElement(
                        "div",
                        { className: "floor-space" },
                        _react2.default.createElement("i", { className: "fa fa-square-o", "aria-hidden": "true" }),
                        _react2.default.createElement(
                          "span",
                          null,
                          listing.floorSpace,
                          " ft\xB2"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "bedrooms" },
                        _react2.default.createElement("i", { className: "fa fa-bed", "aria-hidden": "true" }),
                        _react2.default.createElement(
                          "span",
                          null,
                          listing.bedrooms,
                          " bedroom"
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "view-btn", onClick: function onClick() {
                          return _this2.state.currentView = "viewListing";
                        } },
                      "View Listing"
                    ),
                    currentView === "viewListing" && _react2.default.createElement(CurrentListing, null)
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
                  " "
                ),
                _react2.default.createElement(
                  "span",
                  { className: "location" },
                  " ",
                  _react2.default.createElement("i", { className: "fa fa-map-marker", "aria-hidden": "true" }),
                  listing.city,
                  ",",
                  listing.state
                )
              )
            )
          );
        } else {
          //THIS IS THE LONG VIEW
          return _react2.default.createElement(
            "div",
            { className: "col-md-12 col-lg-6", key: index },
            _react2.default.createElement(
              "div",
              { className: "listing" },
              _react2.default.createElement(
                "div",
                {
                  className: "listing-img",
                  style: {
                    background: "url(\"" + listing.image + "\")\n          no-repeat center center"
                  }
                },
                _react2.default.createElement(
                  "span",
                  { className: "address" },
                  listing.address
                ),
                _react2.default.createElement(
                  "div",
                  { className: "details" },
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-3" },
                    _react2.default.createElement("div", { className: "user-img" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-9" },
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
                      { className: "listing-details" },
                      _react2.default.createElement(
                        "div",
                        { className: "floor-space" },
                        _react2.default.createElement("i", { className: "fa fa-square-o", "aria-hidden": "true" }),
                        _react2.default.createElement(
                          "span",
                          null,
                          listing.floorSpace,
                          " ft\xB2"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "bedrooms" },
                        _react2.default.createElement("i", { className: "fa fa-bed", "aria-hidden": "true" }),
                        _react2.default.createElement(
                          "span",
                          null,
                          listing.bedrooms,
                          " bedroom"
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "view-btn" },
                      "View Listing"
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
                  " "
                ),
                _react2.default.createElement(
                  "span",
                  { className: "location" },
                  " ",
                  _react2.default.createElement("i", { className: "fa fa-map-marker", "aria-hidden": "true" }),
                  listing.city,
                  ",",
                  listing.state
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
          _react2.default.createElement("input", { type: "text", name: "search", onChange: this.props.change })
        ),
        _react2.default.createElement(
          "section",
          { className: "sortby-area" },
          _react2.default.createElement(
            "div",
            { className: "results" },
            this.props.globalState.filteredData.length,
            " results found"
          ),
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
                className: "fa fa-th-list",
                "aria-hidden": "true",
                onClick: this.props.changeView.bind(null, "long")
              }),
              _react2.default.createElement("i", {
                className: "fa fa-th",
                "aria-hidden": "true",
                onClick: this.props.changeView.bind(null, "box")
              })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "raw" },
          _react2.default.createElement(
            "section",
            { className: "listings-results" },
            this.loopListing()
          )
        ),
        _react2.default.createElement(_Pagination2.default, {
          postPerPage: this.state.postPerPage,
          totalPost: this.props.listingData.length,
          paginate: this.paginate
        })
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingData = [{
  address: "Grand Riviere",
  city: "Castries",
  state: "SLU",
  bedrooms: 1,
  price: 2100,
  floorSpace: 2000,
  extra: ["elevator", "gym"],
  homeType: "Apartment",
  image: "https://passiveincomemd.com/wp-content/uploads/2017/06/Front-Back-Building.jpg"
}, {
  address: "Cap Estate",
  city: "Gros Islet",
  state: "SLU",
  bedrooms: 3,
  price: 241000,
  floorSpace: 22000,
  extra: ["elevator", "gym"],
  homeType: "Duplex",
  image: "https://q-xx.bstatic.com/images/hotel/max1024x768/100/10016411.jpg"
}, {
  address: "Black Bay",
  city: "Vieux Fort",
  state: "SLU",
  bedrooms: 5,
  price: 10000,
  floorSpace: 10000,
  extra: ["elevator", "gym", "swimming_pool"],
  homeType: "Apartment",
  image: "https://idesign161.files.wordpress.com/2017/09/gorgeous-evening-view-of-russet-residence-1025x450.jpg?w=739"
}, {
  address: "Lime Stone",
  city: "Dennery",
  state: "SLU",
  bedrooms: 4,
  price: 400000,
  floorSpace: 7000,
  extra: ["elevator", "Garage"],
  homeType: "Studio",
  image: "https://images.squarespace-cdn.com/content/5abbea6fc258b4f56d09219e/1524087111985-FMCVW3XY42FBBRZEC5Z5/greenfab.jpeg?content-type=image%2Fjpeg"
}, {
  address: "25th main street",
  city: "Laborie",
  state: "SLU",
  bedrooms: 1,
  price: 230000,
  floorSpace: 8000,
  extra: ["beach"],
  homeType: "Room",
  image: "https://rentivo.imagekit.io/cdn/tr:n-max/http://dujlrb80v4oq5.cloudfront.net/578/83959073_gw1418680.jpg"
}, {
  address: "Beach Pavillion",
  city: "Soufriere",
  state: "SLU",
  bedrooms: 6,
  price: 400000,
  floorSpace: 7000,
  extra: ["elevator", "swimming_pool"],
  homeType: "Hotel",
  image: "https://cdn.villa-bali.com/cache/fullSize/villas/noku-beach-house/noku-beach-house-noku-beach-house-exquisite-villa-feature-5b8f4a6f08970.jpg"
}, {
  address: "Beach Pavillion",
  city: "Soufriere",
  state: "SLU",
  bedrooms: 6,
  price: 400000,
  floorSpace: 7000,
  extra: ["elevator", "swimming_pool"],
  homeType: "Hotel",
  image: "https://cdn.villa-bali.com/cache/fullSize/villas/noku-beach-house/noku-beach-house-noku-beach-house-exquisite-villa-feature-5b8f4a6f08970.jpg"
}, {
  address: "Beach Pavillion",
  city: "Soufriere",
  state: "SLU",
  bedrooms: 6,
  price: 400000,
  floorSpace: 7000,
  extra: ["elevator", "swimming_pool"],
  homeType: "Hotel",
  image: "https://cdn.villa-bali.com/cache/fullSize/villas/noku-beach-house/noku-beach-house-noku-beach-house-exquisite-villa-feature-5b8f4a6f08970.jpg"
}, {
  address: "Beach Pavillion",
  city: "Soufriere",
  state: "SLU",
  bedrooms: 6,
  price: 400000,
  floorSpace: 7000,
  extra: ["elevator", "swimming_pool"],
  homeType: "Hotel",
  image: "https://cdn.villa-bali.com/cache/fullSize/villas/noku-beach-house/noku-beach-house-noku-beach-house-exquisite-villa-feature-5b8f4a6f08970.jpg"
}, {
  address: "Beach Pavillion",
  city: "Soufriere",
  state: "SLU",
  bedrooms: 6,
  price: 400000,
  floorSpace: 7000,
  extra: ["elevator", "swimming_pool"],
  homeType: "Hotel",
  image: "https://cdn.villa-bali.com/cache/fullSize/villas/noku-beach-house/noku-beach-house-noku-beach-house-exquisite-villa-feature-5b8f4a6f08970.jpg"
}];

exports.default = listingData;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _immutabilityHelper = __webpack_require__(456);

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
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.props.totalPost);
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
              null,
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
              null,
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

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(231);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(232);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingData = __webpack_require__(233);

var _listingData2 = _interopRequireDefault(_listingData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: "Donly",
      listingData: _listingData2.default,
      city: "All",
      homeType: "All",
      bedrooms: "0",
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
      search: ""
    };
    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    _this.changeView = _this.changeView.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var listingData = this.state.listingData.sort(function (a, b) {
        a.price - b.price;
      });

      this.setState({
        listingData: listingData
      });
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
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.bedrooms >= _this3.state.bedrooms;
      });
      console.log(newData);
      if (this.state.city != "All") {
        // console.log(newData);
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

      this.setState({
        populateFormsData: {
          cities: cities,
          homeTypes: homeTypes,
          bedrooms: bedrooms
        }
        // () => console.log(this.state)
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        " ",
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          "section",
          { id: "content-area" },
          _react2.default.createElement(_Filter2.default, {
            change: this.change,
            globalState: this.state,
            populateAction: this.populateForms
          }),
          _react2.default.createElement(_Listings2.default, {
            globalState: this.state,
            listingData: this.state.filteredData,
            change: this.change,
            changeView: this.changeView
          })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[238]);