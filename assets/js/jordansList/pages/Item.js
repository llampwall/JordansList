import React, { Component } from 'react'
import Gallery from '../components/Gallery.js'
import axios from "axios";

// the component for looking at a specific item
// ex. url: '/la/for-sale/2020-Porsche-Taycan'


export default class Item extends Component {
  constructor () {
    super()
    this.state = {
      itemData: {}
    }
  }

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

  render () {
    const item = this.state.itemData

    const image = item.images


    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      minimumFractionDigits: 0,
      currency: "USD"
    });

    return (
      <div className='item-page'>
        <div className='container'>
          <div className='whitebox'>
            <section id='submenu'>
              <div className="nav">
                <a href='#' className='prev'>prev</a>
                <a href='#' className='next'>next</a>
              </div>
              <nav className='sublinks'>
                <a href='#'>More Ads by User</a>
                <a href='#'>Print</a>
                <a href='#'>Share</a>
                <a href='#'>Contact Seller</a>
              </nav>
            </section>

            <section id='item-content'>

              <div className='media-col'>
                <Gallery image={image}/>
              </div>

              <div className='details-col'>
                <i className='fa fa-star'></i>
                <div className='date'>Listed on {item.uploaded}</div>
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
                  </div>
                  <div className='info'>
                    <label>Transmission</label>
                    <h5>{item.trans}</h5>
                  </div>
                  <div className='info'>
                    <label>Odometer</label>
                    <h5>{`${item.miles} Miles`}</h5>
                  </div>
                  <div className='info'>
                    <label>Color</label>
                    <h5>{item.color}</h5>
                  </div>
                  <div className='info'>
                    <label>Horsepower</label>
                    <h5>{item.hp}</h5>
                  </div>
                </div>

                <div className="description">
                  <p>{item.desc}</p>
                </div>
              </div>

            </section>
          </div>
        </div>
      </div>
    )
  }
}
