/**
 * Second stop for the data. Here we pick up forecast data from Yahoo Weather.
 */

var Weather = function (geo, callback) {

    return {
        initialize: function () {
            var completions = 0;
            geo.forEach(function (e) {
                $.ajax("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D%22" + e.woeid + "%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", {
                    success: function (data) {
                        console.log(data);
                        if (data.query.results.channel == null) {
                            window.alert("Yahoo Weather didn't return any information. Try to resubmit again.");
                            location.reload();
                        }

                        //adds forecast key with 10-day forecast array value to geo data 
                        e["forecast"] = data.query.results.channel.item.forecast;
                        completions++;
                        if (geo.length === completions) {
                            callback(geo);
                        }
                    },
                    error: function (XHR) {
                        //display message that the user knows something went wrong on Yahoo Weather's end and couldn't return anything
                        console.log(XHR);
                        window.alert("Yahoo Weather didn't return any information. Try to resubmit again.");
                        location.reload();
                    }
                });
            });
        }
    }
}