toggle = document.getElementById('toggle')
open = document.getElementById('open')
modal = document.getElementById('modal')
close = document.getElementById('close')

// Toggle Nav
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

//Show Modal
open.addEventListener('click', () => {
    modal.classList.add('show-modal')
})

//Hide Modal
close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})

//Hide Modal on outside click
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show-modal')
    }
})