const toggleButton = document.getElementsByClassName('toggle_button')[0]
const navbarLinks = document.getElementsByClassName('navigation')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// this  function will make the icon to copyy the address when clicked

function contact(){
    navigator.clipboard.writeText('+639381672656');

    // Alert
    alert('Copied to clipboard')
}