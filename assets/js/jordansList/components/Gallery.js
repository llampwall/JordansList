import React, { Component } from 'react'

// custom modular gallery component

export default class Gallery extends Component {
  constructor (props) {
    super()
    this.state = {
      allImgs: [],
      currIndex: 0,
    }
  }

  componentDidMount() {
    const allImgs = [this.state.image,'/img/car2.jpg','/img/car3.gif','/img/car4.jpg','/img/car5.jpg','/img/car6.jpg'];

    this.setState({
      allImgs
    })
  }

  componentWillReceiveProps(nextProps) {
    // update the state and rerender when we get props
    if (nextProps.image !== this.props.image) {
      let img = nextProps.image
      this.setState({
        allImgs: [img,'/img/car2.jpg','/img/car3.gif','/img/car4.jpg','/img/car5.jpg','/img/car6.jpg']
      });
    }

    console.log(this.state)
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
    console.log(this.props)

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
