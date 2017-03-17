/**
 * Created by Admin on 3/9/2017.
 */
'use strict';
//play around with dynamically form, hide and show form with a toggle

//talking with weather API, work with weatherAPI

var Map = function (geo, idContainer) {
  return {
    initialize: function () {
      var map;
      var markers;
      var bounds = new google.maps.LatLngBounds();
      var mapOptions = {
        mapTypeId: 'hybrid',
        zoom: 2,
        center: {lat:0,lng:0}
      };

      // Display a map on the page
      map = new google.maps.Map(document.getElementById(idContainer, mapOptions));
      console.log(idContainer);
      
      map.setTilt(90);

      // Multiple Markers passed into the function
      markers = geo;

      // Display multiple markers on a map
        
      var active;
      // Loop through our array of markers & place each one on the map  
      markers.forEach(function (e) {
        bounds.extend(e.latlng);
        e.marker = new google.maps.Marker({
          position: e.latlng,
          map: map,
          title: e.placeName
        });
         e.infoWindow = new google.maps.InfoWindow({
          //consider abstracting the markup generation to its own function because we want to display a lot of stuff
          //happiness ranking, weather icons
          content: generateInfoContent(e)
        });

        // Allow each marker to have an info window    
        e.marker.addListener('click', (function () {         
            if(active){
              active.infoWindow.close();
            }
            //infoWindow.setContent();//e.infoWindowContent);
            e.infoWindow.open(map, e.marker);
            active = e;
        }));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
      });
    }  
  };
  function generateInfoContent (marker){
    return '<div class="info_content">' +
          '<h3>' + marker.placeName + '</h3>' +
          '<p>Content to fill in later</p>' + '</div>'
  }
}
