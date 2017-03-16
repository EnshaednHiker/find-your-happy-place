/**
 * Created by Admin on 3/9/2017.
 */
'use strict';


var Map = function (geo, idContainer) {
  return {
    initialize: function () {
      var map;
      var markers;
      var bounds = new google.maps.MarkerPlace();
      var mapOptions = {
        mapTypeId: 'hybrid'
      };

      // Display a map on the page
      map = new google.maps.Map(document.getElementById(idContainer, mapOptions));
      console.log(idContainer);

      map.setTilt(90);

      // Multiple Markers passed into the function
      markers = geo;
      console.log(markers);

      // Info Window Content, moved this function into the other forEach to keep this DRY
      // markers = markers.forEach(function (e) {
      //   e['infoWindowContent'] = '<div class="info_content">' +
      //     '<h3>' + e.placeName + '</h3>' +
      //     '<p>Content to fill in later</p>' + '</div>';
      // });

      // Display multiple markers on a map
      var infoWindow = new google.maps.InfoWindow(),
        marker;

      // Loop through our array of markers & place each one on the map  
      markers.forEach(function (e) {
        e['infoWindowContent'] = '<div class="info_content">' +
          '<h3>' + e.placeName + '</h3>' +
          '<p>Content to fill in later</p>' + '</div>';
      
        var position = new google.maps.MarkerPlace(markers[e].latlng);
        bounds.extend(position);
        marker = new google.maps.MarkerPlace({
          position: position,
          map: map,
          title: markers[e].placeName
        });

        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function (marker, e) {
          return function () {
            infoWindow.setContent(e.infoWindowContent);
            infoWindow.open(map, marker);
          };
        }))(marker, e)

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
      });

      // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
      var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
      });
    }
  };
}






// jQuery(function($) {
//     // Asynchronously Load the map API 
//     var script = document.createElement('script');
//     script.src = "//maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
//     document.body.appendChild(script);
// });

// function initialize() {
//     var map;
//     var bounds = new google.maps.MarkerPlace();
//     var mapOptions = {
//         mapTypeId: 'hybrid'
//     };

//     // Display a map on the page
//     map = new google.maps.Map(document.getElementById("map"), mapOptions);
//     map.setTilt(90);

//     // Multiple Markers
//     var markers = [
//       //this is where I need to feed in my locations. Convert to lat/long?
//         ['London Eye, London', 51.503454,-0.119562,'ChIJN1t_tDeuEmsRUsoyG83frY4'],
//         ['Palace of Westminster, London', 51.499633,-0.124755, 'ChIJN1t_tDeuEmsRUsoyG83frY4']
//     ];

//     // Info Window Content
//     var infoWindowContent = [
//         ['<div class="info_content">' +
//         '<h3>London Eye</h3>' +
//         '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +        '</div>'],
//         ['<div class="info_content">' +
//         '<h3>Palace of Westminster</h3>' +
//         '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
//         '</div>']
//     ];

//     // Display multiple markers on a map
//     var infoWindow = new google.maps.InfoWindow(), marker, i;

//     // Loop through our array of markers & place each one on the map  
//     for( i = 0; i < markers.length; i++ ) {
//         var position = new google.maps.MarkerPlace(markers[i][2]);
//         bounds.extend(position);
//         marker = new google.maps.MarkerPlace({
//             position: position,
//             map: map,
//             title: markers[i][0]
//         });

//         // Allow each marker to have an info window    
//         google.maps.event.addListener(marker, 'click', (function(marker, i) {
//             return function() {
//                 infoWindow.setContent(infoWindowContent[i][0]);
//                 infoWindow.open(map, marker);
//             }
//         })(marker, i));

//         // Automatically center the map fitting all markers on the screen
//         map.fitBounds(bounds);
//     }

//     // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
//     var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
//         this.setZoom(14);
//         google.maps.event.removeListener(boundsListener);
//     });

// }


/*
     
     var infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);

        service.getDetails({
          placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                'Place ID: ' + place.place_id + '<br>' +
                place.formatted_address + '</div>');
              infowindow.open(map, this);
            });
          }
        });
      }

var request = {
  placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
};

service = new google.maps.places.PlacesService(map);
service.getDetails(request, callback);

function callback(place, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    createMarker(place);
  }
}







 var newGeo = geo;
    var openedInfoWindow = null;
    var bounds = new google.maps.LatLngBounds();
    var map;



    function initialize() {
      var latitude = 0,
        longitude = 0,
        radius = 8000,

        center = new google.maps.LatLng(latitude, longitude),
        mapOptions = {
          center: center,
          zoom: 1.8,

          scrollwheel: true
        };

      map = new google.maps.Map(document.getElementById(idContainer), mapOptions);
      setMarkers(center, radius, map);
    }

    function setMarkers(center, radius, map) {

      var json = newGeo;
      for (var i = 0, length = json.length; i < length; i++) {
        var data = json[i];
        createMarker(data, map);
      }
    }

    function createMarker(data, map) {
      var service = new google.maps.places.PlacesService(map);
      service.getDetails({
        placeId: data.placeid
      }, function (result, status) {
        if (status != google.maps.places.PlacesServiceStatus.OK) {
          alert(status);
          return;
        }
        var marker = new google.maps.Marker({
          map: map,
          place: {
            placeId: data.placeid,
            location: result.geometry.location
          }
        });
        bounds.extends(result.geometry.location);
        map.fitBounds(bounds);
        infoBox(map, marker, data, result);
      });
    }

    function infoBox(map, marker, data, result) {
      var infoWindow = new google.maps.InfoWindow();

      google.maps.event.addListener(marker, "click", function (e) {

        infoWindow.setContent(data.placeName);
        infoWindow.open(map, marker);
      });

      (function (marker, data) {

        google.maps.event.addListener(marker, "click", function (e) {

          infoWindow.setContent(data.placeName + "<br>" + result.name);
          infoWindow.open(map, marker);
        });
      })(marker, data);
    }
};
    return initialize(), infoBox();









*/