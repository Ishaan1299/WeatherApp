// console.log("Hello jee babbar");

// const API_KEY = "6cdaf3464e2dfa7f500425435f601161";
// //d1845658f92b31c64bd94f06f7188c9c";

// function renderWeatherInfo(data) {
//        let newPara = document.createElement('p');
//         newPara.textContent = `${data?.main?.temp.toFixed(2)} deg C`;

//         document.body.appendChild(newPara);
// }
// async function fetchWeatherDetails() {
//     try {
//         let city = "goa";

//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//         const data = await response.json(); 
//         console.log("Weather data:->" , data);

//         renderWeatherInfo(data);
//     }

//     catch (err) {
//         console.log("Error occured");
//     }
    
// }   

// async function getWeather() {
//     try {
//         let lon = 77.1025;
//         let lat = 28.7041;

//         let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

//         let data = await response.json();

//         console.log(data);
//     }

//     catch (err) {
//         console.log("Error Found", err);
//     }
    
// }


