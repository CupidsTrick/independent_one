$('.carousel').carousel({
    interval: 3000
})

function initMap() {
    // Map options
    var options = {
        zoom: 7,
        center: {
            lat: 48.8566,
            lng: 2.3522
        }
    }
    // New Map
    var map = new google.maps.Map(document.getElementById("map"), options);