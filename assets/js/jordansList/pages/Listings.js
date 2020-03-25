import React, { Component } from 'react'

// this is no longer used

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {}
  }

  // get all the item data and loop through it to display
  loopItems = () => {
    let testArray = [...Array(12).keys()]
    return testArray.map((item) => {
      return (
        <div className='item' key={item}>
          <div className='image'>
            <div className='price'>
              $132,000
            </div>
          </div>
          <div className='details'>
            <h5>2020 Porsche Taycan</h5>
            <i className='fa fa-star'></i>
            <h6>Beverly Hills</h6>
          </div>
        </div>
      )
    })
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
