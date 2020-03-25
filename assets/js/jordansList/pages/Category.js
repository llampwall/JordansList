import React, { Component } from 'react'
import axios from 'axios'

// this is for showing all listings
// ex. url: 'la/for-sale' or '/la/for-sale/cars-and-trucks'

export default class Category extends Component {
  constructor () {
    super()
    this.state = {
      itemsData: []
    }
  }

  componentWillMount() {

    // http request spoof
    const {match, location, history} = this.props;
    const self = this;
    axios.get(`/api/${match.params.city}/${match.params.category}`)
    .then(function (response) {
      self.setState({
        itemsData: response.data
      }, () => {
        console.log(self.state)
      })
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {

    });
  }

  // get all the item data and loop through it to display
  loopItems = () => {

    // for formatting currency without decimals
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      minimumFractionDigits: 0,
      currency: 'USD',
    });

    return this.state.itemsData.map((item, index) => {
      return (
        <div className='item' key={item, index}>
          <div className='image' style={{
            "backgroundImage": `url('${item.images[0]}')`
          }}>
            <div className='price'>
              {formatter.format(item.price)}
            </div>
          </div>
          <div className='details'>
            <h5>{`${item.year} ${item.details.make} ${item.details.model}`}</h5>
            <i className='fa fa-star'></i>
            <h6>Beverly Hills</h6>
          </div>
        </div>
      )
    })
  }

  // only show make and model selectors if we are in /cars-and-trucks/
  showMakeModel = () => {
    const {match, location, history} = this.props;
    console.log(match)

    if (match.params.listings == 'cars-and-trucks') {
      return (
        <div style={{
          "display": "flex"
        }}>
          <div className='form-group make'>
            <label>Make</label>
            <select name='make' className='make-select'>
              <option value='Audi'>Audi</option>
              <option value='BMW'>BMW</option>
              <option value='Porsche'>Porsche</option>
            </select>
          </div>
          <div className='form-group model'>
            <label>Model</label>
            <select name='model' className='model-select'>
              <option value='a3'>A3</option>
              <option value='a4'>A4</option>
              <option value='a8'>A8</option>
            </select>
          </div>
        </div>
      )
    }
  }

  render () {
    const {match, location, history} = this.props;

    return (
      <div className='listings'>
        <div className='container'>
          <section id='filter'>

            <div className='form-group price'>
              <label>Price</label>
              <div className='minmax'>
                <select name='min-price' className='min-price'>
                  <option value='1000'>1000</option>
                  <option value='2000'>2000</option>
                  <option value='3000'>3000</option>
                </select>
                <select name='max-price' className='max-price'>
                  <option value='1000'>1000</option>
                  <option value='2000'>2000</option>
                  <option value='3000'>3000</option>
                </select>
              </div>
            </div>
            {this.showMakeModel()}
            <div className='form-group button'>
              <div className='primary-btn'>Update</div>
              <div className='clear-btn'>Clear</div>
            </div>
          </section>
        </div>

        <section id='content'>
          <div className='container'>
            <div className='whitebox'>
              <section id='options'>
                <div className='form-group view-dropdown'>
                  <select name='select-view' className='select-view'>
                    <option value='list'>List</option>
                    <option value='gallery'>Gallery</option>
                  </select>
                </div>
                <div className='form-group sort'>
                  <select name='sort-by' className='sort-by'>
                    <option value='price-desc'>Price - Highest</option>
                    <option value='price-asc'>Price - Lowest</option>
                    <option value='date-desc'>Newest</option>
                    <option value='date-asc'>Oldest</option>
                  </select>
                </div>
              </section>

              <section id='results'>

                {this.loopItems()}

              </section>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
