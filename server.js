const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const categoriesData = require("./data/categories.js");
const citiesData = require("./data/cities.js");
const itemsData = require("./data/1000cars.js");

//create express app
const app = express();

//create middleware to handle serving the app
app.use("/", serveStatic(path.join(__dirname, "/public")));

//api calls
app.get("/api/cities", function(req, res) {
  res.json(citiesData);
});

app.get("/api/:city", function(req, res) {
  res.json(categoriesData);
});

// la/for-sale
app.get("/api/:city/:category", function(req, res) {
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
    if (req.query.sort_by == 'price-dsc') {
      newData.sort((a,b) => {
        return b.price - a.price
      })
    } else if (req.query.sort_by == 'price-asc') {
      newData.sort((a,b) => {
        return a.price - b.price
      })
    }
  } else {
    newData = itemsData.filter(item => {
      return (
        item.city == req.params.city && item.category == req.params.category
      );
    });
  }
  res.json(newData);
});

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
    if (req.query.sort_by == 'price-dsc') {
      newData.sort((a,b) => {
        return b.price - a.price
      })
    } else if (req.query.sort_by == 'price-asc') {
      newData.sort((a,b) => {
        return a.price - b.price
      })
    }
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

// everything else
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

//create default port to serve app
const port = process.env.PORT || 5000;
app.listen(port);

console.log("server started on port " + port);
