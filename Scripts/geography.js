'use strict';

/**
 *  List of cities taken from: Lonely Planet's 100 Best Cities in the World
 *                             http://www.listchallenges.com/lonelyplanets100bestcitiesintheworld
 *                             Source: https://books.google.com/books?id=wGCGLEOVs8C
 */


/* Create object factory that either takes a continent for an argument 
and returns only locations from that continent or take any argument other than those six inhabitable continents and returns all locations */
var Geography = function (continent) {

    var geographyPlaces = [{
            woeid: "615702",
            placeid: "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
            placeName: "Paris, France",
            continent: "Europe",
            latlng: {
                lat: 48.856614,
                lng: 2.352222
            }
        },
        {
            woeid: "2459115",
            placeid: "ChIJOwg_06VPwokRYv534QaPC8g",
            placeName: "New York, NY, USA",
            continent: "North America",
            latlng: {
                lat: 40.712784,
                lng: -74.005941
            }
        },
        {
            woeid: "1105779",
            placeid: "ChIJP5iLHkCuEmsRwMwyFmh9AQU",
            placeName: "Sydney, NSW, Australia",
            continent: "Australia",
            latlng: {
                lat: -33.868820,
                lng: 151.209296
            }
        },
        {
            woeid: "753692",
            placeid: "ChIJ5TCOcRaYpBIRCmZHTz37sEQ",
            placeName: "Barcelona, Spain",
            continent: "Europe",
            latlng: {
                lat: 41.385064,
                lng: 2.173403
            }
        },
        {
            woeid: "44418",
            placeid: "ChIJdd4hrwug2EcRmSrV3Vo6llI",
            placeName: "London, UK",
            continent: "Europe",
            latlng: {
                lat: 51.507351,
                lng: -0.127758
            }
        },
        {
            woeid: "721943",
            placeid: "ChIJw0rXGxGKJRMRAIE4sppPCQM",
            placeName: "Rome, Italy",
            continent: "Europe",
            latlng: {
                lat: 41.902783,
                lng: 12.496366
            }
        },
        {
            woeid: "2487956",
            placeid: "ChIJIQBpAG2ahYAR_6128GcTUEo",
            placeName: "San Francisco, CA, USA",
            continent: "North America",
            latlng: {
                lat: 37.774929,
                lng: -122.419416
            }
        },
        {
            woeid: "1225448",
            placeid: "ChIJ82ENKDJgHTERIEjiXbIAAQE",
            placeName: "Bangkok, Thailand",
            continent: "Asia",
            latlng: {
                lat: 13.756331,
                lng: 100.501765
            }
        },
        {
            woeid: "1591691",
            placeid: "ChIJ1-4miA9QzB0Rh6ooKPzhf2g",
            placeName: "Cape Town, South Africa",
            continent: "Africa",
            latlng: {
                lat: -33.924869,
                lng: 18.424055
            }
        },
        {
            woeid: "2344116",
            placeid: "ChIJawhoAASnyhQR0LABvJj-zOE",
            placeName: "Istanbul, Istanbul, Turkey",
            continent: "Asia",
            latlng: {
                lat: 41.008238,
                lng: 28.978359
            }
        },
        {
            woeid: "1103816",
            placeid: "ChIJgf0RD69C1moR4OeMIXVWBAU",
            placeName: "Melbourne, Victoria, Australia",
            continent: "Australia",
            latlng: {
                lat: -37.813611,
                lng: 144.963056
            }
        },
        {
            woeid: "2165352",
            placeid: "ChIJD5gyo-3iAzQRfMnq27qzivA",
            placeName: "Hong Kong, HK",
            continent: "Asia",
            latlng: {
                lat: 22.396428,
                lng: 114.109497
            }
        },
        {
            woeid: "2269179",
            placeid: "ChIJv6p7MIoZ6zkR6rGN8Rt8E7U",
            placeName: "Kathmandu, Nepal",
            continent: "Asia",
            latlng: {
                lat: 27.717245,
                lng: 85.323960
            }
        },
        {
            woeid: "796597",
            placeid: "ChIJi3lwCZyTC0cRkEAWZg-vAAQ",
            placeName: "Prague, Czechia",
            continent: "Europe",
            latlng: {
                lat: 50.075538,
                lng: 14.437800
            }
        },
        {
            woeid: "9807",
            placeid: "ChIJs0-pQ_FzhlQRi_OBm-qWkbs",
            placeName: "Vancouver, BC, Canada",
            continent: "North America",
            latlng: {
                lat: 49.282729,
                lng: -123.120738
            }
        },
        {
            woeid: "468739",
            placeid: "ChIJvQz5TjvKvJURh47oiC6Bs6A",
            placeName: "Buenos Aires, Argentina",
            continent: "South America",
            latlng: {
                lat: -34.603684,
                lng: -58.381559
            }
        },
        {
            woeid: "455825",
            placeid: "ChIJW6AIkVXemwARTtIvZ2xC3FA",
            placeName: "Rio de Janeiro, Brazil",
            continent: "South America",
            latlng: {
                lat: -22.906847,
                lng: -43.172896
            }
        },
        {
            woeid: "638242",
            placeid: "ChIJAVkDPzdOqEcRcDteW0YgIQQ",
            placeName: "Berlin, Germany",
            continent: "Europe",
            latlng: {
                lat: 52.520007,
                lng: 13.404954
            }
        },
        {
            woeid: "1968222",
            placeid: "ChIJS_zBNNbXAhURy-FuRT5ib9k",
            placeName: "Jerusalem, Israel",
            continent: "Asia",
            latlng: {
                lat: 31.768319,
                lng: 35.213710
            }
        },
        {
            woeid: "3534",
            placeid: "ChIJDbdkHFQayUwR7-8fITgxTmU",
            placeName: "Montreal, QC, Canada",
            continent: "North America",
            latlng: {
                lat: 45.501689,
                lng: -73.567256
            }
        },
        {
            woeid: "19344",
            placeid: "ChIJIyaYpQC4h0gRJxfnfHsU8mQ",
            placeName: "Edinburgh, UK",
            continent: "Europe",
            latlng: {
                lat: 55.953252,
                lng: -3.188267
            }
        },
        {
            woeid: "725746",
            placeid: "ChIJKUgTyxaqfkcREH-QFYcJBwM",
            placeName: "Venice, Italy",
            continent: "Europe",
            latlng: {
                lat: 45.440847,
                lng: 12.315515
            }
        },
        {
            woeid: "91978586",
            placeid: "ChIJoRyG2ZurNTERqRfKcnt_iOc",
            placeName: "Hanoi, Hoàn Kiếm, Hanoi, Vietnam",
            continent: "Asia",
            latlng: {
                lat: 21.027764,
                lng: 105.834160
            }
        },
        {
            woeid: "727232",
            placeid: "ChIJVXealLU_xkcRja_At0z9AGY",
            placeName: "Amsterdam, Netherlands",
            continent: "Europe",
            latlng: {
                lat: 52.370216,
                lng: 4.895168
            }
        },
        {
            woeid: "1062617",
            placeid: "ChIJdZOLiiMR2jERxPWrUs9peIg",
            placeName: "Singapore, SG",
            continent: "Asia",
            latlng: {
                lat: 1.352083,
                lng: 103.819836
            }
        },
        {
            woeid: "1118370",
            placeid: "ChIJ51cu8IcbXWARiRtXIothAS4",
            placeName: "Tokyo, Japan",
            continent: "Asia",
            latlng: {
                lat: 35.689487,
                lng: 139.691706
            }
        },
        {
            woeid: "715496",
            placeid: "ChIJY3a9eKD4KhMRYIDk45AsCAM",
            placeName: "Florence, Italy",
            continent: "Europe",
            latlng: {
                lat: 43.769560,
                lng: 11.255814
            }
        },
        {
            woeid: "560743",
            placeid: "ChIJL6wn6oAOZ0gRoHExl6nHAAo",
            placeName: "Dublin, Ireland",
            continent: "Europe",
            latlng: {
                lat: 53.349805,
                lng: -6.260310
            }
        },
        {
            woeid: "116545",
            placeid: "ChIJB3UJ2yYAzoURQeheJnYQBlQ",
            placeName: "Mexico City, CDMX, Mexico",
            continent: "North America",
            latlng: {
                lat: 19.432608,
                lng: -99.133208
            }
        },
        {
            woeid: "502075",
            placeid: "ChIJ0RhONcBEFkcRv4pHdrW2a7Q",
            placeName: "Kraków, Poland",
            continent: "Europe",
            latlng: {
                lat: 50.064650,
                lng: 19.944980
            }
        },
        {
            woeid: "4118",
            placeid: "ChIJpTvG15DL1IkRd8S0KlBVNTI",
            placeName: "Toronto, ON, Canada",
            continent: "North America",
            latlng: {
                lat: 43.653226,
                lng: -79.383184
            }
        },
        {
            woeid: "2345233",
            placeid: "ChIJz6gXkZ0QWBQRuaJt4gI9myY",
            placeName: "Cairo, Egypt",
            continent: "Africa",
            latlng: {
                lat: 30.044420,
                lng: 31.235712
            }
        },
        {
            woeid: "804365",
            placeid: "ChIJyc_U0TTDQUcRYBEeDCnEAAQ",
            placeName: "Budapest, Hungary",
            continent: "Europe",
            latlng: {
                lat: 47.497912,
                lng: 19.040235
            }
        },
        {
            woeid: "2379574",
            placeid: "ChIJ7cv00DwsDogRAMDACa2m4K8",
            placeName: "Chicago, IL, USA",
            continent: "North America",
            latlng: {
                lat: 41.878114,
                lng: -87.629798
            }
        },
        {
            woeid: "63817",
            placeid: "ChIJ4QD2vUx3zYgRYA13Gn5NKU4",
            placeName: "Havana, Cuba",
            continent: "North America",
            latlng: {
                lat: 23.113592,
                lng: -82.366596
            }
        },
        {
            woeid: "766273",
            placeid: "ChIJgTwKgJcpQg0RaSKMYcHeNsQ",
            placeName: "Madrid, Spain",
            continent: "Europe",
            latlng: {
                lat: 40.416775,
                lng: -3.703790
            }
        },
        {
            woeid: "12596963",
            placeid: "ChIJ2V-Mo_l1nkcRfZixfUq4DAE",
            placeName: "Munich, Germany",
            continent: "Europe",
            latlng: {
                lat: 48.135125,
                lng: 11.581981
            }
        },
        {
            woeid: "946738",
            placeid: "ChIJ8UNwBh-9oRQR3Y1mdkU1Nic",
            placeName: "Athens, Greece",
            continent: "Europe",
            latlng: {
                lat: 37.983810,
                lng: 23.727539
            }
        },
        {
            woeid: "2458833",
            placeid: "ChIJZYIRslSkIIYRtNMiXuhbBts",
            placeName: "New Orleans, LA, USA",
            continent: "North America",
            latlng: {
                lat: 29.951066,
                lng: -90.071532
            }
        },
        {
            woeid: "551801",
            placeid: "ChIJn8o2UZ4HbUcRRluiUYrlwv0",
            placeName: "Vienna, Austria",
            continent: "Europe",
            latlng: {
                lat: 48.208174,
                lng: 16.373819
            }
        },
        {
            woeid: "1252431",
            placeid: "ChIJ0T2NLikpdTERKxE8d61aX_E",
            placeName: "Ho Chi Minh City, Ho Chi Minh, Vietnam",
            continent: "Asia",
            latlng: {
                lat: 10.823099,
                lng: 106.629664
            }
        },
        {
            woeid: "1537782",
            placeid: "ChIJUZ4Xlo3urw0RuK2HT1O2UFk",
            placeName: "Marrakesh, Morocco",
            continent: "Africa",
            latlng: {
                lat: 31.629472,
                lng: -7.981084
            }
        },
        {
            woeid: "943828",
            placeid: "ChIJ0Ztx7bHLWEcRPrOH3qbNLlY",
            placeName: "Sarajevo, Bosnia and Herzegovina",
            continent: "Europe",
            latlng: {
                lat: 43.856259,
                lng: 18.413076
            }
        },
        {
            woeid: "774508",
            placeid: "ChIJkWK-FBFsEg0RSFb-HGIY8DQ",
            placeName: "Seville, Sevilla, Spain",
            continent: "Europe",
            latlng: {
                lat: 37.389092,
                lng: -5.984459
            }
        },
        {
            woeid: "15015372",
            placeid: "ChIJ8cM8zdaoAWARPR27azYdlsA",
            placeName: "Kyoto, Kyoto Prefecture, Japan",
            continent: "Asia",
            latlng: {
                lat: 35.011636,
                lng: 135.768029
            }
        },
        {
            woeid: "2436704",
            placeid: "ChIJ0X31pIK3voARo3mz1ebVzDo",
            placeName: "Las Vegas, NV, USA",
            continent: "North America",
            latlng: {
                lat: 36.169941,
                lng: -115.139830
            }
        },
        {
            woeid: "1098081",
            placeid: "ChIJc9U7KdW6MioR4E7fNbXwBAU",
            placeName: "Perth, WA, Australia",
            continent: "Australia",
            latlng: {
                lat: -31.950527,
                lng: 115.860457
            }
        },
        {
            woeid: "2151849",
            placeid: "ChIJMzz1sUBwsjURoWTDI5QSlQI",
            placeName: "Shanghai, China",
            continent: "Asia",
            latlng: {
                lat: 31.230416,
                lng: 121.473701
            }
        },
        {
            woeid: "2442047",
            placeid: "ChIJE9on3F3HwoAR9AhGJW_fL-I",
            placeName: "Los Angeles, CA, USA",
            continent: "North America",
            latlng: {
                lat: 34.052234,
                lng: -118.243685
            }
        },
        {
            woeid: "742676",
            placeid: "ChIJO_PkYRozGQ0R0DaQ5L3rAAQ",
            placeName: "Lisbon, Portugal",
            continent: "Europe",
            latlng: {
                lat: 38.722252,
                lng: -9.139337
            }
        },
        {
            woeid: "906057",
            placeid: "ChIJywtkGTF2X0YRZnedZ9MnDag",
            placeName: "Stockholm, Sweden",
            continent: "Europe",
            latlng: {
                lat: 59.329323,
                lng: 18.068581
            }
        },
        {
            woeid: "1154781",
            placeid: "ChIJ5-rvAcdJzDERfSgcL1uO2fQ",
            placeName: "Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia",
            continent: "Asia",
            latlng: {
                lat: 3.156949,
                lng: 101.712303
            }
        },
        {
            woeid: "1947122",
            placeid: "ChIJp8Y8QdzmGBUR8pTj0etmn2s",
            placeName: "Damascus, Syria",
            continent: "Asia",
            latlng: {
                lat: 33.513807,
                lng: 36.276528
            }
        },
        {
            woeid: "1140550",
            placeid: "ChIJoxs9QT8qLzERVmqOYKlJl6w",
            placeName: "Luang Prabang, Laos",
            continent: "Asia",
            latlng: {
                lat: 20.065623,
                lng: 102.621621
            }
        },
        {
            woeid: "2490383",
            placeid: "ChIJVTPokywQkFQRmtVEaUZlJRA",
            placeName: "Seattle, WA, USA",
            continent: "North America",
            latlng: {
                lat: 47.606209,
                lng: -122.332071
            }
        },
        {
            woeid: "1020985",
            placeid: "ChIJ42tqxz1RCTERuyW1WugOAZw",
            placeName: "Phnom Penh, Cambodia",
            continent: "Asia",
            latlng: {
                lat: 11.544873,
                lng: 104.892167
            }
        },
        {
            woeid: "2123260",
            placeid: "ChIJ7WVKx4w3lkYR_46Eqz9nx20",
            placeName: "St Petersburg, Russia",
            continent: "Asia",
            latlng: {
                lat: 59.934280,
                lng: 30.335099
            }
        },
        {
            woeid: "420629",
            placeid: "ChIJMYRZJtjVbZERXTEYI8yWqSo",
            placeName: "Cusco, Peru",
            continent: "South America",
            latlng: {
                lat: -13.531950,
                lng: -71.967463
            }
        },
        {
            woeid: "847612",
            placeid: "ChIJfeg1CKKLSxMRANUrhlCtAAQ",
            placeName: "Dubrovnik, Croatia",
            continent: "Europe",
            latlng: {
                lat: 42.650661,
                lng: 18.094424
            }
        },
        {
            woeid: "2295019",
            placeid: "ChIJL_P_CXMEDTkRw0ZdG-0GVvw",
            placeName: "Delhi, India",
            continent: "Asia",
            latlng: {
                lat: 28.704059,
                lng: 77.102490
            }
        },
        {
            woeid: "2122265",
            placeid: "ChIJybDUc_xKtUYRTM9XV8zWRD0",
            placeName: "Moscow, Russia",
            continent: "Asia",
            latlng: {
                lat: 55.755826,
                lng: 37.617300
            }
        },
        {
            woeid: "455826",
            placeid: "ChIJs6U8onwDFgcRmGYiLJHHnxs",
            placeName: "Salvador, Brazil",
            continent: "South America",
            latlng: {
                lat: -12.973040,
                lng: -38.502304
            }
        },
        {
            woeid: "2151330",
            placeid: "ChIJuSwU55ZS8DURiqkPryBWYrk",
            placeName: "Beijing, China",
            continent: "Asia",
            latlng: {
                lat: 39.904211,
                lng: 116.407395
            }
        },
        {
            woeid: "565346",
            placeid: "ChIJkQYhlscLkkYRY_fiO4S9Ts0",
            placeName: "Helsinki, Finland",
            continent: "Europe",
            latlng: {
                lat: 60.169856,
                lng: 24.938379
            }
        },
        {
            woeid: "2295386",
            placeid: "ChIJZ_YISduC-DkRvCxsj-Yw40M",
            placeName: "Kolkata, West Bengal, India",
            continent: "Asia",
            latlng: {
                lat: 22.572646,
                lng: 88.363895
            }
        },
        {
            woeid: "349859",
            placeid: "ChIJuzrymgbQYpYRl0jtCfRZnYc",
            placeName: "Santiago, Chile",
            continent: "South America",
            latlng: {
                lat: -33.448890,
                lng: -70.669265
            }
        },
        {
            woeid: "1535450",
            placeid: "ChIJd1dETUiLnw0R7wLY7a6q5hA",
            placeName: "Fes, Morocco",
            continent: "Africa",
            latlng: {
                lat: 34.018125,
                lng: -5.007845
            }
        },
        {
            woeid: "2348079",
            placeid: "ChIJ--acWvtHDW0RF5miQ2HvAAU",
            placeName: "Auckland, New Zealand",
            continent: "Australia",
            latlng: {
                lat: -36.848460,
                lng: 174.763332
            }
        },
        {
            woeid: "1181985",
            placeid: "ChIJi8MeVwPKlzMRH8FpEHXV0Wk",
            placeName: "Manila, Philippines",
            continent: "Asia",
            latlng: {
                lat: 14.599512,
                lng: 120.984219
            }
        },
        {
            woeid: "137895",
            placeid: "ChIJf8hjUGNFIYQRdFK_hZm_z3k",
            placeName: "Puerto Vallarta, Mexico",
            continent: "North America",
            latlng: {
                lat: 20.653407,
                lng: -105.225332
            }
        },
        {
            woeid: "1225955",
            placeid: "ChIJXW-7kH462jARZ0ObpXBi1Jg",
            placeName: "Chiang Mai, Thailand",
            continent: "Asia",
            latlng: {
                lat: 18.706064,
                lng: 98.981716
            }
        },
        {
            woeid: "2295380",
            placeid: "ChIJTc_rb7ctjjkRtfA_hRAXE2g",
            placeName: "Varanasi, Uttar Pradesh, India",
            continent: "Asia",
            latlng: {
                lat: 25.317645,
                lng: 82.973914
            }
        },
        {
            woeid: "368153",
            placeid: "ChIJ7etsh3sv9o4RMVoiNMnhPvU",
            placeName: "Cartagena, Bolívar, Colombia",
            continent: "South America",
            latlng: {
                lat: 10.391049,
                lng: -75.479426
            }
        },
        {
            woeid: "1450016",
            placeid: "ChIJyz62I7rQXBgRjhP8bqtIyFI",
            placeName: "Zanzibar Town, Tanzania",
            continent: "Africa",
            latlng: {
                lat: -6.165193,
                lng: 39.198914
            }
        },
        {
            woeid: "12591742",
            placeid: "ChIJc8r44c9unUcRDZsdKH0cIJ0",
            placeName: "Innsbruck, Austria",
            continent: "Europe",
            latlng: {
                lat: 47.269212,
                lng: 11.404102
            }
        },
        {
            woeid: "41415",
            placeid: "ChIJ8WWY4UDDeEgR0eRUiomrdEc",
            placeName: "York, UK",
            continent: "Europe",
            latlng: {
                lat: 53.959965,
                lng: -1.087298
            }
        },
        {
            woeid: "2295411",
            placeid: "ChIJwe1EZjDG5zsRaYxkjY_tpF0",
            placeName: "Mumbai, Maharashtra, India",
            continent: "Asia",
            latlng: {
                lat: 19.075984,
                lng: 72.877656
            }
        },
        {
            woeid: "656958",
            placeid: "ChIJuRMYfoNhsUcRoDrWe_I9JgQ",
            placeName: "Hamburg, Germany",
            continent: "Europe",
            latlng: {
                lat: 53.551085,
                lng: 9.993682
            }
        },
        {
            woeid: "134889",
            placeid: "ChIJsdkm30kix4URO_zfV3aniKw",
            placeName: "Oaxaca, Oaxaca, Mexico",
            continent: "North America",
            latlng: {
                lat: 17.059417,
                lng: -96.721622
            }
        },
        {
            woeid: "560912",
            placeid: "ChIJ_1stWpWTW0gRgVJJCkQbKwM",
            placeName: "Galway, Ireland",
            continent: "Europe",
            latlng: {
                lat: 53.270668,
                lng: -9.056791
            }
        },
        {
            woeid: "724196",
            placeid: "ChIJE1O_NL8sKhMR40Mj8RISc10",
            placeName: "Siena, Province of Siena, Italy",
            continent: "Europe",
            latlng: {
                lat: 43.318809,
                lng: 11.330757
            }
        },
        {
            woeid: "2254572",
            placeid: "ChIJmWcyjP41vD8R9TdY7xZ4tXo",
            placeName: "Isfahan, Isfahan Province, Iran",
            continent: "Asia",
            latlng: {
                lat: 32.654627,
                lng: 51.667983
            }
        },
        {
            woeid: "2351310",
            placeid: "ChIJy3TpSfyxOG0RcLQTomPvAAo",
            placeName: "Wellington, New Zealand",
            continent: "Australia",
            latlng: {
                lat: -41.286460,
                lng: 174.776236
            }
        },
        {
            woeid: "530634",
            placeid: "ChIJ0YaYlvUxZUcRIOw_ghz4AAQ",
            placeName: "Ljubljana, Slovenia",
            continent: "Europe",
            latlng: {
                lat: 46.056947,
                lng: 14.505751
            }
        },
        {
            woeid: "1132599",
            placeid: "ChIJzWXFYYuifDUR64Pq5LTtioU",
            placeName: "Seoul, South Korea",
            continent: "Asia",
            latlng: {
                lat: 37.566535,
                lng: 126.977969
            }
        },
        {
            woeid: "142169",
            placeid: "ChIJz5uoHjtF7YUR3uJXSaNc1Ug",
            placeName: "San Cristobal de las Casas, Chis., Mexico",
            continent: "North America",
            latlng: {
                lat: 16.737036,
                lng: -92.637619
            }
        },
        {
            woeid: "2306179",
            placeid: "ChIJi73bYWusQjQRgqQGXK260bw",
            placeName: "Taipei City, Taiwan",
            continent: "Asia",
            latlng: {
                lat: 25.032969,
                lng: 121.565418
            }
        },
        {
            woeid: "845743",
            placeid: "ChIJvxZW35mUkkYRcGL8GG2zAAQ",
            placeName: "Tallinn, Estonia",
            continent: "Europe",
            latlng: {
                lat: 59.436961,
                lng: 24.753575
            }

        },
        {
            woeid: "2144789",
            placeid: "ChIJHVQyOmMxYTcRALj5Bu-OHJM",
            placeName: "Lhasa, Tibet, China",
            continent: "Asia",
            latlng: {
                lat: 29.652491,
                lng: 91.172110
            }
        },
        {
            woeid: "529562",
            placeid: "ChIJYZkT1x2OekcRUOw_ghz4AAQ",
            placeName: "Bled, Slovenia",
            continent: "Europe",
            latlng: {
                lat: 46.368327,
                lng: 14.114580
            }
        },
        {
            woeid: "1102670",
            placeid: "ChIJ7c8s5YR1bqoRMBXe0E3JAwU",
            placeName: "Hobart, TAS, Australia",
            continent: "Australia",
            latlng: {
                lat: -42.882138,
                lng: 147.327195
            }
        },
        {
            woeid: "2295401",
            placeid: "ChIJgeJXTN9KbDkRCS7yDDrG4Qw",
            placeName: "Jaipur, Rajasthan, India",
            continent: "Asia",
            latlng: {
                lat: 26.912434,
                lng: 75.787271
            }
        },
        {
            woeid: "968019",
            placeid: "ChIJZ2jHc-2kw0cRpwJzeGY6i8E",
            placeName: "Brussels, Belgium",
            continent: "Europe",
            latlng: {
                lat: 50.850346,
                lng: 4.351721
            }
        },
        {
            woeid: "346057",
            placeid: "ChIJD6T1BArfXpERs4pFtHb821c",
            placeName: "La Paz, Bolivia",
            continent: "South America",
            latlng: {
                lat: -16.489689,
                lng: -68.119294
            }
        },
        {
            woeid: "3444",
            placeid: "ChIJk4jbBYqWuEwRAzro8GMtxY8",
            placeName: "Québec City, QC, Canada",
            continent: "North America",
            latlng: {
                lat: 46.813878,
                lng: -71.207981
            }
        },
        {
            woeid: "349861",
            placeid: "ChIJx84g3uPdiZYRdpvhv4w6Cus",
            placeName: "Valparaíso, Chile",
            continent: "South America",
            latlng: {
                lat: -33.047238,
                lng: -71.612688
            }
        },
        {
            woeid: "719258",
            placeid: "ChIJa4mNMjwKOxMRUIFimR_hCQM",
            placeName: "Naples, Italy",
            continent: "Europe",
            latlng: {
                lat: 40.851775,
                lng: 14.268124
            }
        },
        {
            woeid: "2449323",
            placeid: "ChIJRZdD6h5-1YcR_rYaYBXzk9E",
            placeName: "Memphis, TN, USA",
            continent: "North America",
            latlng: {
                lat: 35.149534,
                lng: -90.048980
            }
        },
        {
            woeid: "658421",
            placeid: "ChIJzdzMDgXBl0cR1zokRADq5u8",
            placeName: "Heidelberg, Germany",
            continent: "Europe",
            latlng: {
                lat: 49.398752,
                lng: 8.672434
            }
        },
        {
            woeid: "1915035",
            placeid: "ChIJgWsCh7C4VTcRwgRZ3btjpY8",
            placeName: "Dhaka, Bangladesh",
            continent: "Asia",
            latlng: {
                lat: 23.810332,
                lng: 90.412518
            }
        }
    ] || []

    //this.continent = continent
    return buildPlacesList.call(this, geographyPlaces, continent)
}

//filters out locations based on continent string fed in or returns all continents if no inhabitable continent fed in
function buildPlacesList(places, placeGroup) {
    if (placeGroup !== "North America" && placeGroup !== "South America" && placeGroup !== "Asia" && placeGroup !== "Australia" && placeGroup !== "Africa" && placeGroup !== "Europe") {
        return places;
    } else {
        var filteredPlaces = [];
        filteredPlaces = places.filter(function (element) {
            if (element.continent === placeGroup)
                return true;
        }, this);
        return filteredPlaces;
    }
}