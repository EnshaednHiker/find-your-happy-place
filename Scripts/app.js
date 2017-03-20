/**
 * Created by Admin on 3/9/2017.
 */

const happyData = {
            continent:"",
            rangeBegin:"",
            rangeEnd:"",
            bandTemp:"",
            bandWeather:"" 
        }

var happyMap ={};
var happyGeography = {};
var happyWeather = {};
var happyRanking = {};

 $("#landing-page-form" ).on("submit", function(event){
        event.preventDefault();
        happyData.continent=$("select#continent-selection").find(':selected').data('continent');
        happyData.rangeBegin=$("select#temp-selection").find(':selected' ).data('rangeBegin');
        happyData.rangeEnd=$("select#temp-selection").find(':selected').data('rangeEnd');
        happyData.bandTemp=$("select#temp-selection").find(':selected' ).data('bandTemp');
        happyData.sunniness=$("select#sunniness-selection").find(':selected').data('sunniness');
        happyData.bandWeather=$("select#sunniness-selection").find(':selected').data('bandWeather');
        happyGeography = Geography (happyData.continent);
        
        happyWeather = new Weather (happyGeography,function(geo){
            
            happyRanking = new Ranking (geo,happyData);
            happyRanking.initialize();
            happyMap = new Map (/*happyRanking*/geo, "map");
            happyMap.initialize();
            
            $("#js-place-slider").html("<input id='js-map-slider'  type='checkbox'><span></span>");
            $("#landing-page-form").slideToggle("slow");
        });
        happyWeather.initialize();
    });

$("#js-start-over-button").click(function(event){
    location.reload();
});

$("#toggle-div").change(function() {
      $('#js-map-slider').html('Toggle: ' + $(this).prop('checked'))
      $("#landing-page-form").slideToggle("slow");
    })

