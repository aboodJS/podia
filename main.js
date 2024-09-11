const nav = document.querySelector('nav')

window.onscroll = () => {
    let yaxis = window.scrollY
    if ( yaxis >= 100) {
        nav.style.boxShadow = '0 2px 10px 0px black'
        nav.style.transitionDuration = '200ms'
    }else {
        nav.style.boxShadow = 'none'

    }
    console.log(yaxis)
}