'use strict';

/**
 *  List of cities taken from: Lonely Planet's 100 Best Cities in the World
 *                             http://www.listchallenges.com/lonelyplanets100bestcitiesintheworld
 *                             Source: https://books.google.com/books?id=wGCGLEOVs8C
 */


/* Create object factory that either takes a continent for an argument 
and returns only locations from that continent or take any argument other than those six inhabitable continents and returns all locations */
var Geography = function (continent) {

        var geographyPlaces = [
            {
                woeid: "615702", //endpoint: https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(615702)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
                placeID: "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
                placeName: "Paris, France",
                continent: "Europe"
            },
            {
                woeid: "2459115",
                placeID: "ChIJOwg_06VPwokRYv534QaPC8g",
                placeName: "New York, NY, USA",
                continent: "North America"
            },
            {
                woeid: "1105779",
                placeID: "ChIJP5iLHkCuEmsRwMwyFmh9AQU",
                placeName: "Sydney, NSW, Australia",
                continent: "Australia"
            },
            {
                woeid: "753692", //
                placeID: "ChIJ5TCOcRaYpBIRCmZHTz37sEQ",
                placeName: "Barcelona, Spain",
                continent: "Europe"
            },
            {
                woeid: "44418",
                placeID: "ChIJdd4hrwug2EcRmSrV3Vo6llI",
                placeName: "London, UK",
                continent: "Europe"
            },
            {
                woeid: "721943",
                placeID: "ChIJw0rXGxGKJRMRAIE4sppPCQM",
                placeName: "Rome, Italy",
                continent: "Europe"
            },
            {
                woeid: "2487956",
                placeID: "ChIJIQBpAG2ahYAR_6128GcTUEo",
                placeName: "San Francisco, CA, USA",
                continent: "North America"
            },
            {
                woeid: "1225448",
                placeID: "ChIJ82ENKDJgHTERIEjiXbIAAQE",
                placeName: "Bangkok, Thailand",
                continent: "Asia"
            },
            {
                woeid: "1591691",
                placeID: "ChIJ1-4miA9QzB0Rh6ooKPzhf2g",
                placeName: "Cape Town, South Africa",
                continent: "Africa"
            },
            {
                woeid: "2344116",
                placeID: "ChIJawhoAASnyhQR0LABvJj-zOE",
                placeName: "Istanbul, Istanbul, Turkey",
                continent: "Asia"
            },
            {
                woeid: "1103816",
                placeID: "ChIJgf0RD69C1moR4OeMIXVWBAU",
                placeName: "Melbourne, Victoria, Australia",
                continent: "Australia"
            },
            {
                woeid: "2165352",
                placeID: "ChIJD5gyo-3iAzQRfMnq27qzivA",
                placeName: "Hong Kong, HK",
                continent: "Asia"
            },
            {
                woeid: "2269179",
                placeID: "ChIJv6p7MIoZ6zkR6rGN8Rt8E7U",
                placeName: "Kathmandu, Nepal",
                continent: "Asia"
            },
            {
                woeid: "796597",
                placeID: "ChIJi3lwCZyTC0cRkEAWZg-vAAQ",
                placeName: "Prague, Czechia",
                continent: "Europe"
            },
            {
                woeid: "9807",
                placeID: "ChIJs0-pQ_FzhlQRi_OBm-qWkbs",
                placeName: "Vancouver, BC, Canada",
                continent: "North America"
            },
            {
                woeid: "468739",
                placeID: "ChIJvQz5TjvKvJURh47oiC6Bs6A",
                placeName: "Buenos Aires, Argentina",
                continent: "South America"
            },
            {
                woeid: "455825",
                placeID: "ChIJW6AIkVXemwARTtIvZ2xC3FA",
                placeName: "Rio de Janeiro, Brazil",
                continent: "South America"
            },
            {
                woeid: "638242",
                placeID: "ChIJAVkDPzdOqEcRcDteW0YgIQQ",
                placeName: "Berlin, Germany",
                continent: "Europe"
            },
            {
                woeid: "1968222",
                placeID: "ChIJS_zBNNbXAhURy-FuRT5ib9k",
                placeName: "Jerusalem, Israel",
                continent: "Asia"
            },
            {
                woeid: "3534",
                placeID: "ChIJDbdkHFQayUwR7-8fITgxTmU",
                placeName: "Montreal, QC, Canada",
                continent: "North America"
            },
            {
                woeid: "19344",
                placeID: "ChIJIyaYpQC4h0gRJxfnfHsU8mQ",
                placeName: "Edinburgh, UK",
                continent: "Europe"
            },
            {
                woeid: "725746",
                placeID: "ChIJKUgTyxaqfkcREH-QFYcJBwM",
                placeName: "Venice, Italy",
                continent: "Europe"
            },
            {
                woeid: "91978586",
                placeID: "ChIJoRyG2ZurNTERqRfKcnt_iOc",
                placeName: "Hanoi, Hoàn Kiếm, Hanoi, Vietnam",
                continent: "Asia"
            },
            {
                woeid: "727232",
                placeID: "ChIJVXealLU_xkcRja_At0z9AGY",
                placeName: "Amsterdam, Netherlands",
                continent: "Europe"
            },
            {
                woeid: "1062617",
                placeID: "ChIJdZOLiiMR2jERxPWrUs9peIg",
                placeName: "Singapore, SG",
                continent: "Asia"
            },
            {
                woeid: "1118370",
                placeID: "ChIJ51cu8IcbXWARiRtXIothAS4",
                placeName: "Tokyo, Japan",
                continent: "Asia"
            },
            {
                woeid: "715496",
                placeID: "ChIJY3a9eKD4KhMRYIDk45AsCAM",
                placeName: "Florence, Italy",
                continent: "Europe"
            },
            {
                woeid: "560743",
                placeID: "ChIJL6wn6oAOZ0gRoHExl6nHAAo",
                placeName: "Dublin, Ireland",
                continent: "Europe"
            },
            {
                woeid: "116545",
                placeID: "ChIJB3UJ2yYAzoURQeheJnYQBlQ",
                placeName: "Mexico City, CDMX, Mexico",
                continent: "North America"
            },
            {
                woeid: "502075",
                placeID: "ChIJ0RhONcBEFkcRv4pHdrW2a7Q",
                placeName: "Kraków, Poland",
                continent: "Europe"
            },
            {
                woeid: "4118",
                placeID: "ChIJpTvG15DL1IkRd8S0KlBVNTI",
                placeName: "Toronto, ON, Canada",
                continent: "North America"
            },
            {
                woeid: "2345233",
                placeID: "ChIJz6gXkZ0QWBQRuaJt4gI9myY",
                placeName: "Cairo Governorate, Egypt",
                continent: "Africa"
            },
            {
                woeid: "804365",
                placeID: "ChIJyc_U0TTDQUcRYBEeDCnEAAQ",
                placeName: "Budapest, Hungary",
                continent: "Europe"
            },
            {
                woeid: "2379574",
                placeID: "ChIJ7cv00DwsDogRAMDACa2m4K8",
                placeName: "Chicago, IL, USA",
                continent: "North America"
            },
            {
                woeid: "63817",
                placeID: "ChIJ4QD2vUx3zYgRYA13Gn5NKU4",
                placeName: "Havana, Cuba",
                continent: "North America"
            },
            {
                woeid: "766273",
                placeID: "ChIJgTwKgJcpQg0RaSKMYcHeNsQ",
                placeName: "Madrid, Spain",
                continent: "Europe"
            },
            {
                woeid: "12596963",
                placeID: "ChIJ2V-Mo_l1nkcRfZixfUq4DAE",
                placeName: "Munich, Germany",
                continent: "Europe"
            },
            {
                woeid: "946738",
                placeID: "ChIJ8UNwBh-9oRQR3Y1mdkU1Nic",
                placeName: "Athens, Greece",
                continent: "Europe"
            },
            {
                woeid: "2458833",
                placeID: "ChIJZYIRslSkIIYRtNMiXuhbBts",
                placeName: "New Orleans, LA, USA",
                continent: "North America"
            },
            {
                woeid: "551801",
                placeID: "ChIJn8o2UZ4HbUcRRluiUYrlwv0",
                placeName: "Vienna, Austria",
                continent: "Europe"
            },
            {
                woeid: "1252431",
                placeID: "ChIJ0T2NLikpdTERKxE8d61aX_E",
                placeName: "Ho Chi Minh City, Ho Chi Minh, Vietnam",
                continent: "Asia"
            },
            {
                woeid: "1537782",
                placeID: "ChIJUZ4Xlo3urw0RuK2HT1O2UFk",
                placeName: "Marrakesh, Morocco",
                continent: "Africa"
            },
            {
                woeid: "943828",
                placeID: "ChIJ0Ztx7bHLWEcRPrOH3qbNLlY",
                placeName: "Sarajevo, Bosnia and Herzegovina",
                continent: "Europe"
            },
            {
                woeid: "774508",
                placeID: "ChIJkWK-FBFsEg0RSFb-HGIY8DQ",
                placeName: "Seville, Sevilla, Spain",
                continent: "Europe"
            },
            {
                woeid: "15015372",
                placeID: "ChIJ8cM8zdaoAWARPR27azYdlsA",
                placeName: "Kyoto, Kyoto Prefecture, Japan",
                continent: "Asia"
            },
            {
                woeid: "2436704",
                placeID: "ChIJ0X31pIK3voARo3mz1ebVzDo",
                placeName: "Las Vegas, NV, USA",
                continent: "North America"
            },
            {
                woeid: "1098081",
                placeID: "ChIJc9U7KdW6MioR4E7fNbXwBAU",
                placeName: "Perth, WA, Australia",
                continent: "Australia"
            },
            {
                woeid: "2151849",
                placeID: "ChIJMzz1sUBwsjURoWTDI5QSlQI",
                placeName: "Shanghai, China",
                continent: "Asia"
            },
            {
                woeid: "2442047",
                placeID: "ChIJE9on3F3HwoAR9AhGJW_fL-I",
                placeName: "Los Angeles, CA, USA",
                continent: "North America"
            },
            {
                woeid: "742676",
                placeID: "ChIJO_PkYRozGQ0R0DaQ5L3rAAQ",
                placeName: "Lisbon, Portugal",
                continent: "Europe"
            },
            {
                woeid: "906057",
                placeID: "ChIJywtkGTF2X0YRZnedZ9MnDag",
                placeName: "Stockholm, Sweden",
                continent: "Europe"
            },
            {
                woeid: "1154781",
                placeID: "ChIJ5-rvAcdJzDERfSgcL1uO2fQ",
                placeName: "Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia",
                continent: "Asia"
            },
            {
                woeid: "1947122",
                placeID: "ChIJp8Y8QdzmGBUR8pTj0etmn2s",
                placeName: "Damascus, Syria",
                continent: "Asia"
            },
            {
                woeid: "1140550",
                placeID: "ChIJoxs9QT8qLzERVmqOYKlJl6w",
                placeName: "Luang Prabang, Laos",
                continent: "Asia"
            },
            {
                woeid: "2490383",
                placeID: "ChIJVTPokywQkFQRmtVEaUZlJRA",
                placeName: "Seattle, WA, USA",
                continent: "North America"
            },
            {
                woeid: "1020985",
                placeID: "ChIJ42tqxz1RCTERuyW1WugOAZw",
                placeName: "Phnom Penh, Cambodia",
                continent: "Asia"
            },
            {
                woeid: "2123260",
                placeID: "ChIJ7WVKx4w3lkYR_46Eqz9nx20",
                placeName: "St Petersburg, Russia",
                continent: "Asia"
            },
            {
                woeid: "420629",
                placeID: "ChIJMYRZJtjVbZERXTEYI8yWqSo",
                placeName: "Cusco, Peru",
                continent: "South America"
            },
            {
                woeid: "847612",
                placeID: "ChIJfeg1CKKLSxMRANUrhlCtAAQ",
                placeName: "Dubrovnik, Croatia",
                continent: "Europe"
            },
            {
                woeid: "2295019",
                placeID: "ChIJL_P_CXMEDTkRw0ZdG-0GVvw",
                placeName: "Delhi, India",
                continent: "Asia"
            },
            {
                woeid: "2122265",
                placeID: "ChIJybDUc_xKtUYRTM9XV8zWRD0",
                placeName: "Moscow, Russia",
                continent: "Asia"
            },
            {
                woeid: "455826",
                placeID: "ChIJs6U8onwDFgcRmGYiLJHHnxs",
                placeName: "Salvador - State of Bahia, Brazil",
                continent: "South America"
            },
            {
                woeid: "2151330",
                placeID: "ChIJuSwU55ZS8DURiqkPryBWYrk",
                placeName: "Beijing, China",
                continent: "Asia"
            },
            {
                woeid: "565346",
                placeID: "ChIJkQYhlscLkkYRY_fiO4S9Ts0",
                placeName: "Helsinki, Finland",
                continent: "Europe"
            },
            {
                woeid: "2295386",
                placeID: "ChIJZ_YISduC-DkRvCxsj-Yw40M",
                placeName: "Kolkata, West Bengal, India",
                continent: "Asia"
            },
            {
                woeid: "349859",
                placeID: "ChIJuzrymgbQYpYRl0jtCfRZnYc",
                placeName: "Santiago, Santiago Metropolitan Region, Chile",
                continent: "South America"
            },
            {
                woeid: "1535450",
                placeID: "ChIJd1dETUiLnw0R7wLY7a6q5hA",
                placeName: "Fes, Morocco",
                continent: "Africa"
            },
            {
                woeid: "2348079",
                placeID: "ChIJ--acWvtHDW0RF5miQ2HvAAU",
                placeName: "Auckland, New Zealand",
                continent: "Australia"
            },
            {
                woeid: "1181985",
                placeID: "ChIJi8MeVwPKlzMRH8FpEHXV0Wk",
                placeName: "Manila, Philippines",
                continent: "Asia"
            },
            {
                woeid: "137895",
                placeID: "ChIJf8hjUGNFIYQRdFK_hZm_z3k",
                placeName: "Puerto Vallarta, Jalisco, Mexico",
                continent: "North America"
            },
            {
                woeid: "1225955",
                placeID: "ChIJXW-7kH462jARZ0ObpXBi1Jg",
                placeName: "Chiang Mai, Mueang Chiang Mai District, Chiang Mai, Thailand",
                continent: "Asia"
            },
            {
                woeid: "2295380",
                placeID: "ChIJTc_rb7ctjjkRtfA_hRAXE2g",
                placeName: "Varanasi, Uttar Pradesh, India",
                continent: "Asia"
            },
            {
                woeid: "368153",
                placeID: "ChIJ7etsh3sv9o4RMVoiNMnhPvU",
                placeName: "Cartagena, Bolívar, Colombia",
                continent: "South America"
            },
            {
                woeid: "1450016",
                placeID: "ChIJyz62I7rQXBgRjhP8bqtIyFI",
                placeName: "Zanzibar Town, Tanzania",
                continent: "Africa"
            },
            {
                woeid: "12591742",
                placeID: "ChIJc8r44c9unUcRDZsdKH0cIJ0",
                placeName: "Innsbruck, Austria",
                continent: "Europe"
            },
            {
                woeid: "41415",
                placeID: "ChIJ8WWY4UDDeEgR0eRUiomrdEc",
                placeName: "York, UK",
                continent: "Europe"
            },
            {
                woeid: "2295411",
                placeID: "ChIJwe1EZjDG5zsRaYxkjY_tpF0",
                placeName: "Mumbai, Maharashtra, India",
                continent: "Asia"
            },
            {
                woeid: "656958",
                placeID: "ChIJuRMYfoNhsUcRoDrWe_I9JgQ",
                placeName: "Hamburg, Germany",
                continent: "Europe"
            },
            {
                woeid: "134889",
                placeID: "ChIJsdkm30kix4URO_zfV3aniKw",
                placeName: "Oaxaca, Mexico",
                continent: "North America"
            },
            {
                woeid: "560912",
                placeID: "ChIJ_1stWpWTW0gRgVJJCkQbKwM",
                placeName: "Galway, Ireland",
                continent: "Europe"
            },
            {
                woeid: "724196",
                placeID: "ChIJE1O_NL8sKhMR40Mj8RISc10",
                placeName: "Siena, Province of Siena, Italy",
                continent: "Europe"
            },
            {
                woeid: "2254572",
                placeID: "ChIJmWcyjP41vD8R9TdY7xZ4tXo",
                placeName: "Isfahan, Isfahan Province, Iran",
                continent: "Asia"
            },
            {
                woeid: "2351310",
                placeID: "ChIJy3TpSfyxOG0RcLQTomPvAAo",
                placeName: "Wellington, New Zealand",
                continent: "Austria"
            },
            {
                woeid: "530634",
                placeID: "ChIJ0YaYlvUxZUcRIOw_ghz4AAQ",
                placeName: "Ljubljana, Slovenia",
                continent: "Europe"
            },
            {
                woeid: "1132599",
                placeID: "ChIJzWXFYYuifDUR64Pq5LTtioU",
                placeName: "Seoul, South Korea",
                continent: "Asia"
            },
            {
                woeid: "142169",
                placeID: "ChIJz5uoHjtF7YUR3uJXSaNc1Ug",
                placeName: "San Cristobal de las Casas, Chis., Mexico",
                continent: "North America"
            },
            {
                woeid: "2306179",
                placeID: "ChIJi73bYWusQjQRgqQGXK260bw",
                placeName: "Taipei City, Taiwan",
                continent: "Asia"
            },
            {
                woeid: "845743",
                placeID: "ChIJvxZW35mUkkYRcGL8GG2zAAQ",
                placeName: "Tallinn, Estonia",
                continent: "Europe"
                
            },
            {
                woeid: "2144789",
                placeID: "ChIJHVQyOmMxYTcRALj5Bu-OHJM",
                placeName: "Lhasa, Tibet, China",
                continent: "Asia"
            },
            {
                woeid: "529562",
                placeID: "ChIJYZkT1x2OekcRUOw_ghz4AAQ",
                placeName: "Bled, Slovenia",
                continent: "Europe"
            },
            {
                woeid: "1102670",
                placeID: "ChIJ7c8s5YR1bqoRMBXe0E3JAwU",
                placeName: "Hobart, TAS, Australia",
                continent: "Australia"
            },
            {
                woeid: "2295401",
                placeID: "ChIJgeJXTN9KbDkRCS7yDDrG4Qw",
                placeName: "Jaipur, Rajasthan, India",
                continent: "Asia"
            },
            {
                woeid: "968019",
                placeID: "ChIJZ2jHc-2kw0cRpwJzeGY6i8E",
                placeName: "Brussels, Belgium",
                continent: "Europe"
            },
            {
                woeid: "346057",
                placeID: "ChIJD6T1BArfXpERs4pFtHb821c",
                placeName: "La Paz, Bolivia",
                continent: "South America"
            },
            {
                woeid: "3444",
                placeID: "ChIJk4jbBYqWuEwRAzro8GMtxY8",
                placeName: "Québec City, QC, Canada",
                continent: "North America"
            },
            {
                woeid: "349861",
                placeID: "ChIJx84g3uPdiZYRdpvhv4w6Cus",
                placeName: "Valparaíso, Chile",
                continent: "South America"
            },
            {
                woeid: "719258",
                placeID: "ChIJa4mNMjwKOxMRUIFimR_hCQM",
                placeName: "Metropolitan City of Naples, Italy",
                continent: "Europe"
            },
            {
                woeid: "2449323",
                placeID: "ChIJRZdD6h5-1YcR_rYaYBXzk9E",
                placeName: "Memphis, TN, USA",
                continent: "North America"
            },
            {
                woeid: "658421",
                placeID: "ChIJzdzMDgXBl0cR1zokRADq5u8",
                placeName: "Heidelberg, Germany",
                continent: "Europe"
            },
            {
                woeid: "1915035",
                placeID: "ChIJgWsCh7C4VTcRwgRZ3btjpY8",
                placeName: "Dhaka, Bangladesh",
                continent: "Asia"
            }
        ] || []

        //this.continent = continent
        return buildPlacesList.call(this, geographyPlaces, continent)
} 

//filters out locations based on continent string fed in or returns all continents if no inhabitable continent fed in
function buildPlacesList (places, placeGroup) {
    if (placeGroup !== "North America" && placeGroup !== "South America" && placeGroup !== "Asia" && placeGroup !== "Australia" && placeGroup !== "Africa" && placeGroup !== "Europe") {
        return places;
    }
    else {
        var filteredPlaces = [];
        filteredPlaces = places.filter(function(element) {
            if (element.continent===placeGroup)
                return true;
        }, this);
        return filteredPlaces;
    }
}



