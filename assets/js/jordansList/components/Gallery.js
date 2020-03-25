import React, { Component } from 'react'

export default class Gallery extends Component {
  constructor () {
    super()
    this.state = {
      allImgs: [],
      currIndex: 0
    }
  }

  componentWillMount() {
    const allImgs = ['/img/car.jpg','/img/car2.jpg','/img/car3.gif','/img/car4.jpg','/img/car5.jpg','/img/car6.jpg'];

    this.setState({
      allImgs
    })
  }

  prevBtn = () => {
    this.setState({
      currIndex: this.state.currIndex - 1
    })
  }

  nextBtn = () => {
    this.setState({
      currIndex: this.state.currIndex + 1
    })
  }

  clickedThumb = (index) => {
    this.setState({
      currIndex: index
    })
  }

  loopImages = () => {
    return this.state.allImgs.map((img, i) => {
      return (
        <div className={`thumb ${this.state.currIndex == i ? 'active' : ''}`} key={i} onClick={this.clickedThumb.bind(null, i)} style={{
          "backgroundImage": `url('${img}')`}}></div>
      )
    })
  }


  render () {
    const {match, location, history} = this.props;

    return (
      <div className='gallery'>
        <div className='slider'>
          <div className='main-img' style={{
            "backgroundImage": `url('${this.state.allImgs[this.state.currIndex]}')`
          }}>
            <div className="arrows">
              <div className={`left-arrow ${this.state.currIndex == 0 ? 'disabled' : ''}`} onClick={this.prevBtn}>
                <i className="fa fa-arrow-left"></i>
              </div>
              <div className={`right-arrow ${this.state.currIndex == (this.state.allImgs.length-1) ? 'disabled' : ''}`} onClick={this.nextBtn}>
                <i className="fa fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className='thumbs'>
          {this.loopImages()}
        </div>
      </div>
    )
  }

}
