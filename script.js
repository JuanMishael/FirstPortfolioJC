// For loading screen
window.addEventListener("load", function() {
    // this event listener trigger when the entire page, including all the assets is loaded
    const loader = document.querySelector('.loader');
    const contentWrapper = document.querySelector('.contentWrapper');

    // this will hide the loading screen and shot the content
    loader.style.display = 'none';
    contentWrapper.style.display = 'block';
})