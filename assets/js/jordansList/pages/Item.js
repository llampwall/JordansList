import React, { Component } from 'react'
import Gallery from '../components/Gallery.js'

// the component for looking at a specific item
// ex. url: '/la/for-sale/2020-Porsche-Taycan'


export default class Item extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    const {match, location, history} = this.props;

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
                <Gallery />
              </div>

              <div className='details-col'>
                <i className='fa fa-star'></i>
                <div className='date'>posted Feb 2, 2020</div>
                <h3 className='title'>White 2020 Porsche Taycan Coupe</h3>
                <h4 className='price'>$132,000</h4>

                <div className='specs'>
                  <div className='info'>
                    <label>VIN</label>
                    <h5>SDAK234HFCKF284NF</h5>
                  </div>
                  <div className='info'>
                    <label>Mileage</label>
                    <h5>22.4 MPG</h5>
                  </div>
                  <div className='info'>
                    <label>Transmission</label>
                    <h5>6 Speed Manual</h5>
                  </div>
                  <div className='info'>
                    <label>Odometer</label>
                    <h5>47,664 Miles</h5>
                  </div>
                  <div className='info'>
                    <label>Color</label>
                    <h5>White / Grey</h5>
                  </div>
                  <div className='info'>
                    <label>Horsepower</label>
                    <h5>573 HP</h5>
                  </div>
                </div>

                <div className="description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum justo ante, ornare eget ultricies eu, sodales ut massa. Aliquam porttitor ex eu enim commodo, sit amet feugiat elit pretium. Aliquam erat volutpat. Vivamus vitae dolor nibh. Aenean faucibus magna at urna facilisis, eu lacinia odio aliquam. Nunc fermentum mi sem, nec bibendum nulla auctor nec. Praesent rutrum urna quis risus maximus, tincidunt cursus orci sagittis. Nunc imperdiet tellus ut consectetur bibendum. Nunc hendrerit malesuada finibus. Nam quis libero nisl. Nullam posuere dolor quis augue commodo consectetur id quis dui. Sed euismod nulla at egestas pellentesque.</p>
                </div>
              </div>

            </section>
          </div>
        </div>
      </div>
    )
  }
}
