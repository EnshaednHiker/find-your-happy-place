/**
 * App.js calls each portion each of the other js files and listens for button clicks on the landing page
 */

const happyData = {
    continent: "",
    rangeBegin: "",
    rangeEnd: "",
    bandTemp: "",
    bandWeather: ""
}

var happyMap = {};
var happyGeography = {};
var happyWeather = {};
var happyRanking = {};

$("#landing-page-form").on("submit", function (event) {
    event.preventDefault();
    happyData.continent = $("select#continent-selection").find(':selected').data('continent');
    happyData.rangeBegin = $("select#temp-selection").find(':selected').data('rangeBegin');
    happyData.rangeEnd = $("select#temp-selection").find(':selected').data('rangeEnd');
    happyData.bandTemp = $("select#temp-selection").find(':selected').data('bandTemp');
    happyData.bandWeather = $("select#weather-selection").find(':selected').data('bandWeather');
    happyGeography = Geography(happyData.continent);

    happyWeather = new Weather(happyGeography, function (geo) {

        happyRanking = new Ranking(geo, happyData);
        happyRanking.initialize();
        happyMap = new Map(geo, "map");
        happyMap.initialize();

        $("#js-place-slider").html("<input id='js-map-slider'  type='checkbox'><span></span>");
        $("#landing-page-form").slideToggle("slow");
    });
    happyWeather.initialize();
});

$("#js-start-over-button").click(function (event) {
    location.reload();
});

$("#toggle-div").change(function () {
    $('#js-map-slider').html('Toggle: ' + $(this).prop('checked'))
    $("#landing-page-form").slideToggle("slow");
})