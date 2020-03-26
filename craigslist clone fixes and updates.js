1. Make it so requests with ':listings' set also work:

a. add this to the proper api call in server.js
// la/for-sale/cars-and-trucks
app.get("/api/:city/:category/:listings", function(req, res) {
  console.log(req.params);
  let newData;

  if (req.query.min_price != undefined) {
    console.log(req.query);
    newData = itemsData.filter(item => {
      return (
        item.city == req.params.city &&
        item.category == req.params.category &&
        item.price >= req.query.min_price &&
        item.price <= req.query.max_price
      );
    });
  } else {
    newData = itemsData.filter(item => {
      return (
        item.city == req.params.city &&
        item.category == req.params.category &&
        item.listing == req.params.listings
      );
    });
  }
  res.json(newData);
});

b. in Category.js add this to the beginning of componentWillMount() and submitFilters():
// check if :listing is set, and use it if it is
let listing = "";
if (match.params.listings != undefined) {
  listing = "/" + match.params.listings;
}

//add the listing variable into the url
`/${match.params.city}/${match.params.category}${listing}?min_price=${min_price}&max_price=${max_price}&select_view=${select_view}&sort_by=${sort_by}`;




2. Fix the search page updating - important and took me forever to figure out.
this makes it so we dont have to refresh the page to update our search results
the problem with the old way of using history.push was that this.props.location.search
does not change just because you did history.push. change the document.href page reload
in submitFilters to this:

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



3. Make listing items into Links

a. import { Link } from 'react-router-dom' in Category.js

b. you can either add an 'id' property to each item, or you can just treat
the :item prop as an array index for finding the specific item, or both like
i did

c. get the current {match}, and change the <div> tag surrounding each item in
loopItems() to <Link>:

const match = this.props.match;
let listing = "";
if (match.params.listings != undefined) {
  listing = "/" + match.params.listings;
}
const addr = `/${match.params.city}/${match.params.category}${listing}`

return this.state.itemsData.map((item, index) => {
  return (
    <Link to={`${addr}/${item.id}`} className="item" key={(item, item.id)}>
    ...
    </Link>
  )
}

4. make the details page display the correct item

a. update server.js to handle the request correctly:
// get a specific listing
app.get("/api/:city/:category/:listings/:item", function(req, res) {
  console.log(req.params);
  let newData;

  if (req.params.item != undefined) {
    let item = parseInt(req.params.item)

    if (item > 0 && item < itemsData.length) {
      console.log(item);
      res.json(itemsData[item-1]);
    } else {
      console.log("404");
    }
  }
});

b. in item.js: import axios from "axios"

c. add a componentDidMount() function for details.js
componentDidMount() {
  const { match, history } = this.props;

  // temp fix for not having :listings set
  let listings = match.params.listings
  let item = match.params.listings
  if (match.params.item == undefined) {
    listings = 'cars-and-trucks'
  } else {
    item = match.params.item
  }

  // http request spoof
  const self = this;
  axios
    .get(`/api/${match.params.city}/${match.params.category}/${listings}/${item}`)
    .then(function(response) {
      self.setState(
        {
          itemData: response.data
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

d. adjust the render() function accordingly, including passing the <Gallery> the images
from the item as a prop
...
<div className='media-col'>
  <Gallery images={item.images}/>
</div>

<div className='details-col'>
  <i className='fa fa-star'></i>
  <div className='date'>{item.uploaded}</div>
  <h3 className='title'>{item.title}</h3>
  <h4 className='price'>{formatter.format(item.price)}</h4>

  <div className='specs'>
    <div className='info'>
      <label>VIN</label>
      <h5>{item.vin}</h5>
    </div>
    <div className='info'>
      <label>Mileage</label>
      <h5>{item.mpg}</h5>
      ...

e. add a componentWillReceiveProps() function to Gallery.js to ensure
that it rerenders correctly
componentWillReceiveProps(nextProps) {
  // update the state and rerender when we get props
  if (nextProps.images !== this.props.images) {
    this.setState({
      allImgs: nextProps.images
    });
  }

5. make the sort function work by adding a small amount of code in server.js
if (req.query.sort_by == 'price-dsc') {
  newData.sort((a,b) => {
    return b.price - a.price
  })
} else if (req.query.sort_by == 'price-asc') {
  newData.sort((a,b) => {
    return a.price - b.price
  })
}

5. a couple helper devices to clean up displaying the car city and price in Categories,
and also to handle zero results.
// cityTranslator['bos'] = 'Boston, MA'
var cityTranslator = {
  'la': 'Los Angeles, CA',
  'nyc': 'New York City, NY',
  'mia': 'Miami, FL',
  'bos': 'Boston, MA'
}
// formatter.format(139884) = $139,884
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  minimumFractionDigits: 0,
  currency: "USD"
});
// add to beginning of render()
if (this.state.itemsData.length == 0) {
  return (
    <div className="oops">
      <h1>
        Sorry, no results found.
      </h1>
    </div>
  );
}

TODO:
prev/next buttons on item page?
fix hack for GET /la/for-sale/id case
make / model selectors
populate selectors with data
list view
page max and pagination

populate with more data
get a lot more images
general styling

search bar / trending now
post item view
favorites
