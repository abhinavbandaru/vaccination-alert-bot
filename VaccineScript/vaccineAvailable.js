const fetch = require("node-fetch");
var today = (new Date())
console.log(today);

const api_url = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=581&date='
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url, {headers:{'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.3'}});
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
}

getapi(api_url)