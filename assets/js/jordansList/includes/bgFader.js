
class bgFader {

  // handle background changing
  changeBackground(city) {
    if (city == 'mia') {
      document.getElementsByClassName('la')[0].classList.remove('opaque')
      document.getElementsByClassName('nyc')[0].classList.remove('opaque')
      document.getElementsByClassName('bos')[0].classList.remove('opaque')
      document.getElementsByClassName('mia')[0].classList.add('opaque')
    } else if (city == 'nyc') {
      document.getElementsByClassName('la')[0].classList.remove('opaque')
      document.getElementsByClassName('nyc')[0].classList.add('opaque')
      document.getElementsByClassName('bos')[0].classList.remove('opaque')
      document.getElementsByClassName('mia')[0].classList.remove('opaque')
    } else if (city == 'bos') {
      document.getElementsByClassName('la')[0].classList.remove('opaque')
      document.getElementsByClassName('nyc')[0].classList.remove('opaque')
      document.getElementsByClassName('bos')[0].classList.add('opaque')
      document.getElementsByClassName('mia')[0].classList.remove('opaque')
    } else {
      document.getElementsByClassName('la')[0].classList.add('opaque')
      document.getElementsByClassName('nyc')[0].classList.remove('opaque')
      document.getElementsByClassName('bos')[0].classList.remove('opaque')
      document.getElementsByClassName('mia')[0].classList.remove('opaque')
    }
  }
}

export const {changeBackground} = new bgFader();
