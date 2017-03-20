var Ranking = function (geo,data)  {

    return{
        initialize: function(){

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
                    "weatherLabel": "Acts of God (Tornado,Hurricane,Tropical Storm"
                },
                "7": {
                    "yahooWeatherCodes": [25, 36, 3200],
                    "weatherLabel": "Ignore"
                }
            };

            var bandDifferenceTemp;
            var bandDifferenceTempAbs;
            var bandDifferenceSun;
            var selectedBandTemp = data.bandTemp;
            var selectedWeather = data.bandWeather;
            var bandTempForecast;
            var weatherForecast;
           
            //an object map settomg what is the min and max of each temp band
            var tempRanges = { //tempRanges //refact toDo: add tempLabel to form HTML
                "0":{"min": -200, "max": 19},
                "1":{"min": 20, "max": 32},
                "2":{"min": 33, "max": 40},
                "3":{"min": 41, "max": 50},
                "4":{"min": 51, "max": 60},
                "5":{"min": 61, "max": 70},
                "6":{"min": 71, "max": 85},
                "7":{"min": 86, "max": 95},
                "8":{"min": 96, "max": 200}
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
                "present":{"points": 10},
                "absent":{"points": 0}
            }
            
            // var ranking = {
            //      "total": tempScores[0] * geo[0].forecast.length,
            //      "score": 0,
            //      "happyRanking": 0 
            // }

            var keyedRanges = Object.keys(tempRanges);
            //var selectedRange = Object.keys(tempRanges[bandTempHappy]);
            var forecastRangeBand;
            
            geo.forEach(function(e){
                e["ranking"] = {
                 "total": tempScores[0] * geo[0].forecast.length,
                 "score": 0,
                 "matchPercentage": 0,
                 "rank" : 0 
            }
                
                bandTempForecast = 0;
                weatherForecast = 0;
                bandDifferenceTemp = 0;
                bandDifferenceSun = 0;
                bandDifferenceTempAbs = 0;
                
                
                e.forecast.forEach(function(f){
                    
                    //how do we calc band of current forecast and difference with what they chose, probably a one liner
                    forecastRangeBand = keyedRanges.filter(function(range){
                        //tempRanges[range]
                        //this is where we would return a condintional where if true we would get that range i.e. confirms f.high and f.low is within the ranges
                        //have a onliner cond. return true if it's in the tempRanges' range
                        return f.high <= tempRanges[range].max && f.high >= tempRanges[range].min;
                    })[0];
                
                    bandDifferenceTemp = forecastRangeBand - selectedBandTemp;
                    //console.log(bandDifferenceTemp);
                    bandDifferenceTempAbs = Math.abs(bandDifferenceTemp);
                    //console.log(bandDifferenceTempAbs);
                    e.ranking.score += tempScores[bandDifferenceTempAbs];
                    console.log (e.ranking.score);
                    
                    


                    //  "forecast": [{
                    //         "code": "39",
                    //         "date": "18 Mar 2017",
                    //         "day": "Sat",
                    //         "high": "56",
                    //         "low": "52",
                    //         "text": "Scattered Showers"
                    //     },
                    

                 
                    
                });
                e.ranking.happyRanking = e.ranking.score/e.ranking.total;
            });
            console.log(geo);
        }
    }
}

//                                                                  If band 0 (freezing) is chosen, these are worth:
// data-band-temp="0" data-range-begin="-200" data-range-end="19"   10 points
// data-band-temp="1" data-range-begin="20" data-range-end="32"     9 points
// data-band-temp="2" data-range-begin="33" data-range-end="40"     8 points
// data-band-temp="3" data-range-begin="41" data-range-end="50"     7 points
// data-band-temp="4" data-range-begin="51" data-range-end="60"     6 points
// data-band-temp="5" data-range-begin="61" data-range-end="70"     5 points
// data-band-temp="6" data-range-begin="71" data-range-end="85"     4 points
// data-band-temp="7" data-range-begin="86" data-range-end="95"     3 points
// data-band-temp="8" data-range-begin="96" data-range-end="200"    2 points

//                                                              If band 0 (sunny) is chosen, these are worth:
// data-band-sunniness="0" data-sunniness="32">Sunny            5 points
// data-band-sunniness="1" data-sunniness="30">Partly Cloudy    4 points
// data-band-sunniness="2" data-sunniness="28">Mostly Cloudy    3 points
// data-band-sunniness="3" data-sunniness="26">Cloudy           2 points

//Each day has a max of 15 points
//Each forecast includes 10 days of data
//Each city (geo.e) has max of 150 points

//Each calculation is based upon how big of a difference there is between the chosed happyData and the projected data from forecast
//Say a band of 2 is projected for one day and happyData is a 2 as well, then there is no difference between the two, a difference of 0

//Is it worth making the forecasted days later in the week be worth less since the later forecasted days are less accurate?

//a new development is that the more that i look into the returned codes, for forecast
//days, the more I see that 

// const happyData = {
//             continent:"",
//             rangeBegin:"",
//             rangeEnd:"",
//             bandTemp:"",
//             sunniness:"",
//             bandSunniness:"" 
//         }


                    // if (f.high >= tempRangeBeginArctic && f.high <= tempRangeEndArctic){
                    //     bandTempForecast = 0;
                    // }
                    // else if (f.high >= tempRangeBeginFreezing && f.high <= tempRangeEndFreezing){
                    //     bandTempForecast = 1;
                    // }
                    // else if (f.high >= tempRangeBeginCold && f.high <= tempRangeEndCold){
                    //     bandTempForecast = 2;
                    // }
                    // else if (f.high >= tempRangeBeginCool && f.high <= tempRangeEndCool){
                    //     bandTempForecast = 3;
                    // }
                    // else if (f.high >= tempRangeBeginBrisk && f.high <= tempRangeEndBrisk){
                    //     bandTempForecast = 4;
                    // }
                    // else if (f.high >= tempRangeBeginWarm && f.high <= tempRangeEndWarm){
                    //     bandTempForecast = 5;
                    // }
                    // else if (f.high >= tempRangeBeginHot && f.high <= tempRangeEndHot){
                    //     bandTempForecast = 6;
                    // }
                    // else if (f.high >= tempRangeBeginStifling && f.high <= tempRangeEndStifling){
                    //     bandTempForecast = 7;
                    // }
                    // else {
                    //     bandTempForecast = 8;
                    // }

        


                    
                    // bandDifferenceSun = weatherForecast - selectedWeather;
                    // Math.abs(bandDifferenceSun);
                    
                //     switch (bandDifferenceTemp) {
                //         case 0:
                //             score += 10;
                //             break;
                //         case 1:
                //             score += 9;
                //             break;
                //         case 2:
                //             score += 8;
                //             break;
                //         case 3:
                //             score += 7;
                //             break;
                //         case 4:
                //             score += 6;
                //             break;
                //         case 5:
                //             score += 5;
                //             break;
                //         case 6:
                //             score += 4;
                //             break;
                //         case 7:
                //             score += 3;
                //             break;
                //         case 8:
                //             score += 2;
                //             break;
                //     }    
                //      switch (bandDifferenceSun) {
                //         case 0:
                //             score += 5;
                //             break;
                //         case 1:
                //             score += 4;
                //             break;
                //         case 2:
                //             score += 3;
                //             break;
                //         case 3:
                //             score += 2;
                //             break;
                //     }