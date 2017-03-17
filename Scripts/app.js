/**
 * Created by Admin on 3/9/2017.
 */

const happyData = {
            continent:"",
            rangeBegin:"",
            rangeEnd:"",
            sunniness:""
        }


var happyMap ={};
var happyGeography = {};




 $("#landing-page-form" ).on("submit", function(event){
        event.preventDefault();
        
        happyData.continent=$("select#continent-selection").find(':selected').data('continent');
        happyData.rangeBegin=$("select#temp-selection").find(':selected' ).data('rangeBegin');
        happyData.rangeEnd=$("select#temp-selection").find(':selected').data('rangeEnd');
        happyData.sunniness=$("select#sunniness-selection").find(':selected').data('sunniness');
        happyGeography = Geography (happyData.continent);
        happyMap = new Map (happyGeography, "map");
        happyMap.initialize();
        
        console.log(happyGeography);
        console.log(happyMap.initialize());
        console.log(happyMap);
    });

$("#js-start-over-button").click(function(event){
    location.reload();
});
