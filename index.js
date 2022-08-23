const scroller = document.querySelector('.scroller')
let isDown = false
let scrollToLeft, startX

scroller.addEventListener('mousedown', function(e) {
    this.classList.add('active')
    isDown = true
    startX = e.pageX - scroller.offsetLeft
    scrollToLeft = this.scrollLeft

})

scroller.addEventListener('mouseup', function() {
    this.classList.remove('active')
    isDown = false
})

scroller.addEventListener('mouseleave', function() {
    this.classList.remove('active')
    isDown = false
})

scroller.addEventListener('mousemove', function(e) {
    if (!isDown) return
    let distanceX = e.pageX - scroller.offsetLeft - startX
    this.scrollLeft = scrollToLeft - distanceX
})