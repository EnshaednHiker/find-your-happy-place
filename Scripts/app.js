/**
 * Created by Admin on 3/9/2017.
 */

const happyData = {
            continent:"",
            rangeBegin:"",
            rangeEnd:"",
            sunniness:""
        }


var newGeography ={};
console.log(newGeography);




 $("#landing-page-form" ).on("submit", function(event){
        event.preventDefault();
        
        happyData.continent=$("select#continent-selection").find(':selected').data('continent');
        happyData.rangeBegin=$("select#temp-selection").find(':selected' ).data('rangeBegin');
        happyData.rangeEnd=$("select#temp-selection").find(':selected').data('rangeEnd');
        happyData.sunniness=$("select#sunniness-selection").find(':selected').data('sunniness');
        newGeography = Geography (happyData.continent);
        console.log(newGeography);
    });

$("#js-start-over-button").click(function(event){
    location.reload();
});
