
// JavaScript code to update the year and date dynamically
document.addEventListener('DOMContentLoaded', function () {
  // Get the current date
  var currentDate = new Date().toLocaleDateString();
  // Display the current date in the 'date' div
  document.getElementById('date').textContent = currentDate + ' LoftHouse';
});

/*
function initMap() {
  // Specify the coordinates for the center of the map
  var center = { lat: 37.7749, lng: -122.4194 };

  // Create a new map and set the center and zoom level
  var map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 12
  });

  // You can add markers, polygons, etc., to the map as needed
  // Example: var marker = new google.maps.Marker({ position: center, map: map });
}
*/

/*
function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('map'), {
        credentials: 'AqGg-B4GE3wiHJRRk-vxD1VkTnckS5z_4pvISESbAGzMMuu-21HwS4UI000ad_af'
    });
}
*/
/*
function loadMapScenario() {
  var map = new Microsoft.Maps.Map(document.getElementById('map'), {
      credentials: 'AqGg-B4GE3wiHJRRk-vxD1VkTnckS5z_4pvISESbAGzMMuu-21HwS4UI000ad_af',
      center: new Microsoft.Maps.Location(49.588052, 34.550443),
      zoom: 16 // You can adjust the zoom level as needed
  });

  var location = new Microsoft.Maps.Location(49.588052, 34.550443);

  var pin = new Microsoft.Maps.Pushpin(location, {
      title: 'My Location',
      subTitle: 'Coordinates: 49.588052, 34.550443'
  });

  map.entities.push(pin);
}
*/

function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('map'), {
        credentials: 'AqGg-B4GE3wiHJRRk-vxD1VkTnckS5z_4pvISESbAGzMMuu-21HwS4UI000ad_af',
        center: new Microsoft.Maps.Location(49.588052, 34.550443),
        zoom: 16 // You can adjust the zoom level as needed
    });    

    var location = new Microsoft.Maps.Location(49.588052, 34.550443);

    // Replace 'location-pin.svg' with the correct path to your image
    var pinImage = './img/map/location-pin.svg';

    var pin = new Microsoft.Maps.Pushpin(location, {
        title: 'Жилой комплекс в историческом центре',
        subTitle: 'Bулиця Соборності, 33',
        icon: pinImage
    });

    // Add click event to the pushpin
    Microsoft.Maps.Events.addHandler(pin, 'click', function (e) {
        // Open an infobox or create custom HTML content here
        var infobox = new Microsoft.Maps.Infobox(location, {
            title: pin.getTitle(),
            description: pin.getSubTitle(),
            visible: true
        });

        // Clear any existing infoboxes on the map
        map.entities.clear();
        map.entities.push(pin);
        // Add the new infobox to the map
        map.entities.push(infobox);
    });

    map.entities.push(pin);
}


// {
//   baloonContent: `
//     <div class="baloon">
//       <div class="baloon__address">Bулиця Соборності, 33</div>
//       <div class="baloon__contacts">
//         <a href="tel:+380501234567">+380 (50) 123-45-67</a>
//       </div>
//     </div>    
//   `
// }

const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
}

/* Phone Mask */
mask('[data-tel-input]');

const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input)=>{
  input.addEventListener('input', ()=>{
    if (input.value == '+') input.value = '';
  })  
  input.addEventListener('blur', ()=>{
    if (input.value == '+') input.value = '';
  })
});

