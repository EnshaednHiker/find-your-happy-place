/**
 * Number icons sourced from this project:
 * The project "Map Icons Collection" was created by Nicolas Mollet under the Creative Commons Attribution-Share Alike 3.0 Unported license (CC BY SA 3.0 - http://creativecommons.org/licenses/by-sa/3.0/).

This license lets you remix, tweak, and build upon our work even for commercial reasons, as long as you credit the project and license your new creations under the identical terms.

Please credit: Maps Icons Collection https://mapicons.mapsmarker.com
Logo available at https://mapicons.mapsmarker.com/wp-content/uploads/2011/03/miclogo-88x31.gif

Some icons are derived from the project SJJB Map Icons (http://www.sjjb.co.uk/mapicons/) by SJJB Management (http://www.sjjb.co.uk/), licensed under Creative Commons Public Domain Dedication (http://creativecommons.org/licenses/publicdomain/).

Some icons are derived from the project User Interface Design Framework (http://www.webalys.com/design-interface-application-framework.php) by Webalys (http://www.webalys.com/).
 */
'use strict';

//get ranking.js to dynamically fill in html for both temp range and weather select



var Map = function (geo, idContainer) {

  return {
    initialize: function () {
      var map;
      var markers;
      var bounds = new google.maps.LatLngBounds();
      var mapOptions = {
        mapTypeId: 'hybrid',
        zoom: 2,
        center: {
          lat: 0,
          lng: 0
        }
      };

      // Display a map on the page
      map = new google.maps.Map(document.getElementById(idContainer, mapOptions));
      
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
          icon: "icons/number_" + e.ranking.rank + ".png",
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
          if (active) {
            active.infoWindow.close();
          }
          //infoWindow.setContent();//e.infoWindowContent);
          e.infoWindow.open(map, e.marker);
          active = e;
        }));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
      });
      generateAttributionElements();
    }
  };

  function generateInfoContent(marker) {
    
    var counter = 1;
    var content = '<div class="info_content">' +
      '<h3>' + marker.placeName + '</h3>' +
      '<h4>Stats</h4>' +
      '<p>Rank: ' + marker.ranking.rank + '</p>' +
      '<p>Percentage Match: ' + ((marker.ranking.matchPercentage * 100) / 100) * 100 + '%</p>' +
      '<h4>Weather Forecast</h4>';
    marker.forecast.forEach(function (e) {
      content += '<p>Forecast for ' + e.date + ': a high of ' + e.high + 'F degrees and ' + e.text.toLowerCase() + '.</p>';
    });
    content += '</div>';
    return content;
  }

  function generateAttributionElements() {
    //must attribute weather data to yahoo with this:
    var weatherApiAttributionElement = "<a class='attribution' id='yahoo' href='https://www.yahoo.com/?ilc=401' target='_blank'> <img src='https://poweredby.yahoo.com/purple.png' width='134' height='29'/></a>";
    //must attribute icons with this
    var iconAttributionElement = "<a class='attribution' id='icon' href='https://mapicons.mapsmarker.com' target='_blank'> <img src='https://mapicons.mapsmarker.com/wp-content/uploads/2011/03/miclogo-88x31.gif' width='88' height='31'/></a>";
    $("div.attribution").html(weatherApiAttributionElement + iconAttributionElement);
  }
}