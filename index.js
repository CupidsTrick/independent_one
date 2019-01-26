$('.carousel').carousel({
    interval: 3000
})

function initMap() {
    // Map options
    var options = {
        zoom: 7,
        center: {
            lat: 46.2276,
            lng: 2.2137
        }
    }
    // New Map
    var map = new google.maps.Map(document.getElementById("map"), options);
}