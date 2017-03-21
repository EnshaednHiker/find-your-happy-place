var Ranking = function (geo, data) {

    return {
        initialize: function () {

            var weatherMap = {
                "0": {
                    "yahooWeatherCodes": [31, 32, 33, 34, 29, 30, 44],
                    "weatherLabel": "Sunny"
                },
                "1": {
                    "yahooWeatherCodes": [5, 6, 7, 8, 10, 13, 14, 15, 16, 17, 18, 41, 42, 43, 46],
                    "weatherLabel": "Snowy"
                },
                "2": {
                    "yahooWeatherCodes": [23, 24],
                    "weatherLabel": "Windy"
                },
                "3": {
                    "yahooWeatherCodes": [3, 4, 9, 11, 12, 35, 37, 38, 39, 40, 45, 47],
                    "weatherLabel": "Rain and/or Thunder"
                },
                "4": {
                    "yahooWeatherCodes": [19, 20, 21, 22],
                    "weatherLabel": "Obscured (Dust/Fog/Haze/Smoke)"
                },
                "5": {
                    "yahooWeatherCodes": [26, 27, 28],
                    "weatherLabel": "Cloudy"
                },
                "6": {
                    "yahooWeatherCodes": [0, 1, 2],
                    "weatherLabel": "Acts of God (Tornado,Hurricane,Tropical Storm)"
                },
                "7": {
                    "yahooWeatherCodes": [25, 36, 3200],
                    "weatherLabel": "Ignore"
                }
            };


            var bandDifferenceTemp;
            var bandDifferenceTempAbs;
            var selectedBandTemp = data.bandTemp;
            var selectedWeather = data.bandWeather;

            var bandTempForecast;
            var weatherForecast;
            //an object settingg what is the min and max of each temp band
            var tempRanges = { //refact toDo: add tempLabel to form HTML
                "0": {
                    "min": -200,
                    "max": 19
                },
                "1": {
                    "min": 20,
                    "max": 32
                },
                "2": {
                    "min": 33,
                    "max": 40
                },
                "3": {
                    "min": 41,
                    "max": 50
                },
                "4": {
                    "min": 51,
                    "max": 60
                },
                "5": {
                    "min": 61,
                    "max": 70
                },
                "6": {
                    "min": 71,
                    "max": 85
                },
                "7": {
                    "min": 86,
                    "max": 95
                },
                "8": {
                    "min": 96,
                    "max": 200
                }
            }

            var tempScores = {
                "0": 10,
                "1": 9,
                "2": 8,
                "3": 7,
                "4": 6,
                "5": 5,
                "6": 4,
                "7": 3,
                "8": 2
            }

            var weatherScores = {
                "presentWeather": 10,
                "absentWeather": 0
            }

            var keyedRanges = Object.keys(tempRanges);
            var forecastRangeBand;
            var keyedWeather = Object.keys(weatherMap);


            geo.forEach(function (e) {
                e["ranking"] = {
                    "total": (tempScores[0] * geo[0].forecast.length) + (weatherScores.presentWeather * geo[0].forecast.length),
                    "score": 0,
                    "matchPercentage": 0,
                    "rank": 0
                }

                bandTempForecast = 0;
                weatherForecast = 0;
                bandDifferenceTemp = 0;
                bandDifferenceTempAbs = 0;

                e.forecast.forEach(function (f) {

                    //how do we calc band of current forecast and difference with what they chose, probably a one liner
                    forecastRangeBand = keyedRanges.filter(function (range) {
                        //tempRanges[range]
                        //this is where we would return a condintional where if true we would get that range i.e. confirms f.high and f.low is within the ranges
                        //have a onliner cond. return true if it's in the tempRanges' range
                        return f.high <= tempRanges[range].max && f.high >= tempRanges[range].min;
                    })[0];

                    weatherForecast = keyedWeather.filter(function (map) {
                        return weatherMap[map].yahooWeatherCodes.includes(parseInt(f.code));
                    })[0];


                    if (weatherForecast == selectedWeather) {
                        e.ranking.score += weatherScores.presentWeather;
                    } else {
                        e.ranking.score += weatherScores.absentWeather;
                    }

                    bandDifferenceTemp = forecastRangeBand - selectedBandTemp;
                    bandDifferenceTempAbs = Math.abs(bandDifferenceTemp);
                    e.ranking.score += tempScores[bandDifferenceTempAbs];
                });

                e.ranking.matchPercentage = e.ranking.score / e.ranking.total;
            });
            var valuesMatchPercentages = geo.map(function (e) {
                return e.ranking.matchPercentage;
            });

            var sortedValuesMatchPercentages = valuesMatchPercentages.sort(function (a, b) {
                return b - a
            });
            geo.forEach(function (e) {
                e.ranking.rank = 1 + sortedValuesMatchPercentages.indexOf(e.ranking.matchPercentage);
            });
            return geo;
        }
    }
}