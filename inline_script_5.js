// JSON data for USA states with additional fields
    const statesData = [

  {
    name: "Alabama",
    shortName: "AL",
    capital: "Montgomery",
    timezone: "CST",
    founded: "December 14, 1819",
    zipRange: "35004 to 36925",
    phonePrefixes: ["205", "251", "256", "334", "659", "938"]
  },
  {
    name: "Alaska",
    shortName: "AK",
    capital: "Juneau",
    timezone: "AKST",
    founded: "January 3, 1959",
    zipRange: "99501 to 99950",
    phonePrefixes: ["907"]
  },
  {
    name: "Arizona",
    shortName: "AZ",
    capital: "Phoenix",
    timezone: "MST",
    founded: "February 14, 1912",
    zipRange: "85001 to 86556",
    phonePrefixes: ["480", "520", "602", "623", "928"]
  },
  {
    name: "Arkansas",
    shortName: "AR",
    capital: "Little Rock",
    timezone: "CST",
    founded: "June 15, 1836",
    zipRange: "71601 to 72959",
    phonePrefixes: ["479", "501", "870"]
  },
  {
    name: "California",
    shortName: "CA",
    capital: "Sacramento",
    timezone: "PST",
    founded: "September 9, 1850",
    zipRange: "90001 to 96162",
    phonePrefixes: ["209", "213", "279", "310", "323", "341", "408", "415", "424", "442", "510", "530", "559", "562", "619", "626", "628", "650", "657", "661", "669", "707", "714", "747", "760", "805", "818", "820", "831", "858", "909", "916", "925", "949", "951"]
  },
  {
    name: "Colorado",
    shortName: "CO",
    capital: "Denver",
    timezone: "MST",
    founded: "August 1, 1876",
    zipRange: "80001 to 81658",
    phonePrefixes: ["303", "719", "720", "970"]
  },
  {
    name: "Connecticut",
    shortName: "CT",
    capital: "Hartford",
    timezone: "EST",
    founded: "January 9, 1788",
    zipRange: "06001 to 06928",
    phonePrefixes: ["203", "475", "860", "959"]
  },
  {
    name: "Delaware",
    shortName: "DE",
    capital: "Dover",
    timezone: "EST",
    founded: "December 7, 1787",
    zipRange: "19901 to 19905",
    phonePrefixes: ["302"]
  },
  {
    name: "Florida",
    shortName: "FL",
    capital: "Tallahassee",
    timezone: "EST",
    founded: "March 3, 1845",
    zipRange: "32004 to 34997",
    phonePrefixes: ["239", "305", "321", "352", "386", "407", "561", "689", "727", "754", "772", "786", "813", "850", "863", "904", "941", "954"]
  },
  {
    name: "Georgia",
    shortName: "GA",
    capital: "Atlanta",
    timezone: "EST",
    founded: "January 2, 1788",
    zipRange: "30001 to 31999",
    phonePrefixes: ["229", "404", "470", "478", "678", "706", "762", "770", "912"]
  },
  {
    name: "Hawaii",
    shortName: "HI",
    capital: "Honolulu",
    timezone: "HST",
    founded: "August 21, 1959",
    zipRange: "96701 to 96898",
    phonePrefixes: ["808"]
  },
  {
    name: "Idaho",
    shortName: "ID",
    capital: "Boise",
    timezone: "MST",
    founded: "July 3, 1890",
    zipRange: "83701 to 83799",
    phonePrefixes: ["208", "986"]
  },
  {
    name: "Illinois",
    shortName: "IL",
    capital: "Springfield",
    timezone: "CST",
    founded: "December 3, 1818",
    zipRange: "60001 to 62999",
    phonePrefixes: ["217", "224", "309", "312", "331", "618", "630", "708", "773", "779", "815", "847", "872"]
  },
  {
    name: "Indiana",
    shortName: "IN",
    capital: "Indianapolis",
    timezone: "EST",
    founded: "December 11, 1816",
    zipRange: "46001 to 47997",
    phonePrefixes: ["219", "260", "317", "463", "574", "765", "812", "930"]
  },
  {
    name: "Iowa",
    shortName: "IA",
    capital: "Des Moines",
    timezone: "CST",
    founded: "December 28, 1846",
    zipRange: "50001 to 52809",
    phonePrefixes: ["319", "515", "563", "641", "712"]
  },
  {
    name: "Kansas",
    shortName: "KS",
    capital: "Topeka",
    timezone: "CST",
    founded: "January 29, 1861",
    zipRange: "66002 to 67954",
    phonePrefixes: ["316", "620", "785", "913"]
  },
  {
    name: "Kentucky",
    shortName: "KY",
    capital: "Frankfort",
    timezone: "EST",
    founded: "June 1, 1792",
    zipRange: "40003 to 42788",
    phonePrefixes: ["270", "364", "502", "606", "859"]
  },
  {
    name: "Louisiana",
    shortName: "LA",
    capital: "Baton Rouge",
    timezone: "CST",
    founded: "April 30, 1812",
    zipRange: "70112 to 71232",
    phonePrefixes: ["225", "318", "337", "504", "985"]
  },
  {
    name: "Maine",
    shortName: "ME",
    capital: "Augusta",
    timezone: "EST",
    founded: "March 15, 1820",
    zipRange: "04101 to 04992",
    phonePrefixes: ["207"]
  },
  {
    name: "Maryland",
    shortName: "MD",
    capital: "Annapolis",
    timezone: "EST",
    founded: "April 28, 1788",
    zipRange: "20331 to 21930",
    phonePrefixes: ["227", "240", "301", "410", "443", "667"]
  },
  {
    name: "Massachusetts",
    shortName: "MA",
    capital: "Boston",
    timezone: "EST",
    founded: "February 6, 1788",
    zipRange: "02101 to 02298",
    phonePrefixes: ["339", "351", "413", "508", "617", "774", "781", "857", "978"]
  },
  {
    name: "Michigan",
    shortName: "MI",
    capital: "Lansing",
    timezone: "EST",
    founded: "January 26, 1837",
    zipRange: "48201 to 49971",
    phonePrefixes: ["231", "248", "269", "313", "517", "586", "616", "734", "810", "906", "947", "989"]
  },
  {
    name: "Minnesota",
    shortName: "MN",
    capital: "Saint Paul",
    timezone: "CST",
    founded: "May 11, 1858",
    zipRange: "55101 to 56763",
    phonePrefixes: ["218", "320", "507", "612", "651", "763", "952"]
  },
  {
    name: "Mississippi",
    shortName: "MS",
    capital: "Jackson",
    timezone: "CST",
    founded: "December 10, 1817",
    zipRange: "38601 to 39776",
    phonePrefixes: ["228", "601", "662", "769"]
  },
  {
    name: "Missouri",
    shortName: "MO",
    capital: "Jefferson City",
    timezone: "CST",
    founded: "August 10, 1821",
    zipRange: "63101 to 65899",
    phonePrefixes: ["314", "417", "573", "636", "660", "816"]
  },
  {
    name: "Montana",
    shortName: "MT",
    capital: "Helena",
    timezone: "MST",
    founded: "November 8, 1889",
    zipRange: "59001 to 59937",
    phonePrefixes: ["406"]
  },
  {
    name: "Nebraska",
    shortName: "NE",
    capital: "Lincoln",
    timezone: "CST",
    founded: "March 1, 1867",
    zipRange: "68001 to 68118",
    phonePrefixes: ["308", "402", "531"]
  },
  {
    name: "Nevada",
    shortName: "NV",
    capital: "Carson City",
    timezone: "PST",
    founded: "October 31, 1864",
    zipRange: "88901 to 89883",
    phonePrefixes: ["702", "725", "775"]
  },
  {
    name: "New Hampshire",
    shortName: "NH",
    capital: "Concord",
    timezone: "EST",
    founded: "June 21, 1788",
    zipRange: "03217 to 03884",
    phonePrefixes: ["603"]
  },
  {
    name: "New Jersey",
    shortName: "NJ",
    capital: "Trenton",
    timezone: "EST",
    founded: "December 18, 1787",
    zipRange: "07001 to 08989",
    phonePrefixes: ["201", "551", "609", "640", "732", "848", "856", "862", "908", "973"]
  },
  {
    name: "New Mexico",
    shortName: "NM",
    capital: "Santa Fe",
    timezone: "MST",
    founded: "January 6, 1912",
    zipRange: "87001 to 88441",
    phonePrefixes: ["505", "575"]
  },
  {
    name: "New York",
    shortName: "NY",
    capital: "Albany",
    timezone: "EST",
    founded: "July 26, 1788",
    zipRange: "10001 to 10292",
    phonePrefixes: ["212", "315", "332", "347", "516", "518", "585", "607", "631", "646", "680", "716", "718", "838", "845", "914", "917", "929", "934"]
  },
  {
    name: "North Carolina",
    shortName: "NC",
    capital: "Raleigh",
    timezone: "EST",
    founded: "November 21, 1789",
    zipRange: "27501 to 28816",
    phonePrefixes: ["252", "336", "704", "743", "828", "910", "919", "980", "984"]
  },
  {
    name: "North Dakota",
    shortName: "ND",
    capital: "Bismarck",
    timezone: "CST",
    founded: "November 2, 1889",
    zipRange: "58102 to 58109",
    phonePrefixes: ["701"]
  },
  {
    name: "Ohio",
    shortName: "OH",
    capital: "Columbus",
    timezone: "EST",
    founded: "March 1, 1803",
    zipRange: "44101 to 44179",
    phonePrefixes: ["216", "220", "234", "283", "326", "330", "380", "419", "440", "513", "567", "614", "740", "937"]
  },
  {
    name: "Oklahoma",
    shortName: "OK",
    capital: "Oklahoma City",
    timezone: "CST",
    founded: "November 16, 1907",
    zipRange: "73101 to 73196",
    phonePrefixes: ["405", "539", "572", "580", "918"]
  },
  {
    name: "Oregon",
    shortName: "OR",
    capital: "Salem",
    timezone: "PST",
    founded: "February 14, 1859",
    zipRange: "97201 to 97920",
    phonePrefixes: ["458", "503", "541", "971"]
  },
  {
    name: "Pennsylvania",
    shortName: "PA",
    capital: "Harrisburg",
    timezone: "EST",
    founded: "December 12, 1787",
    zipRange: "19001 to 19640",
    phonePrefixes: ["215", "223", "267", "272", "412", "445", "484", "570", "610", "717", "724", "814", "878"]
  },
  {
    name: "Rhode Island",
    shortName: "RI",
    capital: "Providence",
    timezone: "EST",
    founded: "May 29, 1790",
    zipRange: "02801 to 02940",
    phonePrefixes: ["401"]
  },
  {
    name: "South Carolina",
    shortName: "SC",
    capital: "Columbia",
    timezone: "EST",
    founded: "May 23, 1788",
    zipRange: "29001 to 29948",
    phonePrefixes: ["803", "839", "843", "854", "864"]
  },
  {
    name: "South Dakota",
    shortName: "SD",
    capital: "Pierre",
    timezone: "CST",
    founded: "November 2, 1889",
    zipRange: "57001 to 57110",
    phonePrefixes: ["605"]
  },
  {
    name: "Tennessee",
    shortName: "TN",
    capital: "Nashville",
    timezone: "CST",
    founded: "June 1, 1796",
    zipRange: "37201 to 37250",
    phonePrefixes: ["423", "615", "629", "731", "865", "901", "931"]
  },
  {
    name: "Texas",
    shortName: "TX",
    capital: "Austin",
    timezone: "CST",
    founded: "December 29, 1845",
    zipRange: "73301 to 73344",
    phonePrefixes: ["210", "214", "254", "281", "325", "346", "361", "409", "430", "432", "469", "512", "682", "713", "726", "737", "806", "817", "830", "832", "903", "915", "936", "940", "956", "972", "979"]
  },
  {
    name: "Utah",
    shortName: "UT",
    capital: "Salt Lake City",
    timezone: "MST",
    founded: "January 4, 1896",
    zipRange: "84101 to 84199",
    phonePrefixes: ["385", "435", "801"]
  },
  {
    name: "Vermont",
    shortName: "VT",
    capital: "Montpelier",
    timezone: "EST",
    founded: "March 4, 1791",
    zipRange: "05601 to 05907",
    phonePrefixes: ["802"]
  },
  {
    name: "Virginia",
    shortName: "VA",
    capital: "Richmond",
    timezone: "EST",
    founded: "June 25, 1788",
    zipRange: "23218 to 23298",
    phonePrefixes: ["276", "434", "540", "571", "703", "757", "804"]
  },
  {
    name: "Washington",
    shortName: "WA",
    capital: "Olympia",
    timezone: "PST",
    founded: "November 11, 1889",
    zipRange: "98101 to 98199",
    phonePrefixes: ["206", "253", "360", "425", "509", "564"]
  },
  {
    name: "West Virginia",
    shortName: "WV",
    capital: "Charleston",
    timezone: "EST",
    founded: "June 20, 1863",
    zipRange: "25301 to 25396",
    phonePrefixes: ["304", "681"]
  },
  {
    name: "Wisconsin",
    shortName: "WI",
    capital: "Madison",
    timezone: "CST",
    founded: "May 29, 1848",
    zipRange: "53201 to 53228",
    phonePrefixes: ["262", "414", "534", "608", "715", "920"]
  },
  {
    name: "Wyoming",
    shortName: "WY",
    capital: "Cheyenne",
    timezone: "MST",
    founded: "July 10, 1890",
    zipRange: "82001 to 82010",
    phonePrefixes: ["307"]
  },
  // Territories
  {
    name: "American Samoa",
    shortName: "AS",
    capital: "Pago Pago",
    timezone: "SST",
    founded: "April 17, 1900",
    zipRange: "96799 to 96799",
    phonePrefixes: ["684"]
  },
  {
    name: "Guam",
    shortName: "GU",
    capital: "Hagatna",
    timezone: "ChST",
    founded: "August 7, 1898th",
    zipRange: "96910 to 96932",
    phonePrefixes: ["671"]
  },
  {
    name: "Marianas Island",
    shortName: "MP",
    capital: "Saipan",
    timezone: "ChST",
    founded: "January 9, 1978",
    zipRange: "96950 to 96950",
    phonePrefixes: ["670"]
  },
  {
    name: "Puerto Rico",
    shortName: "PR",
    capital: "San Juan",
    timezone: "AST",
    founded: "July 25, 1898",
    zipRange: "00901 to 00988",
    phonePrefixes: ["787", "939"]
  },
  {
    name: "US Virgin Islands",
    shortName: "VI",
    capital: "Charlotte Amalie",
    timezone: "AST",
    founded: "March 31, 1917",
    zipRange: "00801 to 00804",
    phonePrefixes: ["340"]
  },

    ];

    // Function to populate the table with data
    function populateTable(data) {
      const tableBody = document.querySelector("#statesTable tbody");
      tableBody.innerHTML = ""; // Clear existing rows

      data.forEach(state => {
        const row = document.createElement("tr");

        const stateCell = document.createElement("td");
        stateCell.textContent = state.name;
        row.appendChild(stateCell);

        const shortNameCell = document.createElement("td");
        shortNameCell.textContent = state.shortName;
        row.appendChild(shortNameCell);

        const capitalCell = document.createElement("td");
        capitalCell.textContent = state.capital;
        row.appendChild(capitalCell);

        const timezoneCell = document.createElement("td");
        timezoneCell.textContent = state.timezone;
        row.appendChild(timezoneCell);

        const foundedCell = document.createElement("td");
        foundedCell.textContent = state.founded;
        row.appendChild(foundedCell);

        const zipRangeCell = document.createElement("td");
        zipRangeCell.textContent = state.zipRange;
        row.appendChild(zipRangeCell);

        tableBody.appendChild(row);
      });
    }

    // Function to handle search
    function searchState() {
      const searchQuery = document.getElementById("searchInput").value.trim();
      const infoMessage = document.getElementById("infoMessage");
      const messageText = document.getElementById("messageText");
      const messageIcon = document.getElementById("messageIcon");
      let filteredData;

      if (searchQuery === "") {
        // If search input is empty, show all states
        filteredData = statesData;
        infoMessage.style.display = "none"; // Hide info message
      } else {
        // Filter data based on search query
        filteredData = statesData.filter(state => 
          state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          state.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
          state.timezone.toLowerCase().includes(searchQuery.toLowerCase()) ||
          state.phonePrefixes.some(prefix => prefix === searchQuery) // Exact 3-digit match
        );

        // Display info message if a phone prefix matches
        const matchedState = statesData.find(state => 
          state.phonePrefixes.some(prefix => prefix === searchQuery)
        );
        if (matchedState) {
          messageIcon.className = "fas fa-phone"; // Phone icon
          messageText.innerHTML = `If you received a call from <strong>${searchQuery}</strong>, it is from <strong>${matchedState.name}</strong>.`;
          infoMessage.style.display = "block"; // Show info message
        } else if (/^\d{3}$/.test(searchQuery)) {
          // If the search query is a 3-digit number but doesn't match any prefix
          messageIcon.className = "fas fa-triangle-exclamation"; // Caution icon
          messageText.innerHTML = `This number <strong>${searchQuery}</strong> is not from any State.`;
          infoMessage.style.display = "block"; // Show info message
        } else {
          infoMessage.style.display = "none"; // Hide info message if no match
        }
      }

      populateTable(filteredData);
    }

    // Event listener for the search button
    document.getElementById("searchButton").addEventListener("click", searchState);

    // Event listener for the Enter key in the search input
    document.getElementById("searchInput").addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        searchState();
      }
    });

    // Event listener for real-time search as the user types
    document.getElementById("searchInput").addEventListener("input", searchState);

    // Populate the table with all states on page load
    populateTable(statesData);