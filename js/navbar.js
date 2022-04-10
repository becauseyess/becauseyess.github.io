window.addEventListener('scroll', () => {
    const x = this.scrollX
    const y = this.scrollY

    if (y > 50) {
        $('.navbar-background').css("background-color", 'rgba(0, 0, 0, 0.192)')
        $('.navbar-background').css("transition", 'all 0.3s')
        $('.navbar-background').css('backdrop-filter', 'blur(10px)')
        $('.navbar-background').css('-webkit-backdrop-filter', 'blur(10px)')
    } else {
        $('.navbar-background').css("background-color", 'rgba(0, 0, 0, 0)')
        $('.navbar-background').css("transition", 'all 0.3s')
        $('.navbar-background').css('backdrop-filter', 'blur(0px)')
        $('.navbar-background').css('-webkit-backdrop-filter', 'blur(0px)')
    }
})