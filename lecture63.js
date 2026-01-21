
// ! # Day 63 — Project Scenarios

// API example (OpenWeatherMap): https://openweathermap.org/api/geocoding-api
// 06837a2b56da2bc4441e4da418a1f178

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

// ---

// ## Scenario 1 — Weather Dashboard with Error Handling

// Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).

// ### Requirements

// - Make the API request asynchronously using `fetch` with `async/await`.
// - Handle API request failures (for example, invalid city name) using `try/catch`.
// - Create and throw custom errors based on weather conditions (e.g., extremely high or low temperature) and handle them appropriately.


async function getWeather(city) {
    try {
        let apikey = `06837a2b56da2bc4441e4da418a1f178`;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
        console.log(url);

        // fetch(url).then(raw => raw.json()).then(result => console.log(result));
        let raw = await fetch(url);
        console.log(raw);
        let realData = await raw.json();

        if (realData.cod === '404') {
            throw new Error(realData.message);
        }
        console.log(realData);
        if (realData.main.temp < 0) {
            console.warn(`Too cold weather ${realData.main.temp}°C`);
        } else if (realData.main.temp > 20) {
            console.warn(`Too hot weather ${realData.main.temp}°C`);
        } else {
            console.log(`Normal weather ${realData.main.temp}°C`);
        }
    } catch (error) {
        console.log(error);
    }
}

// getWeather('Pune'); //normal
// getWeather('Leh'); //too cold
// getWeather('Dallol'); //too hot

// ### Suggested tasks

// - Build a simple UI to input a city name and display the result.
// - Show user-friendly error messages for network errors, invalid input, or API errors.
// - Demonstrate at least one custom thrown error (e.g., `ExtremeTemperatureError`) and handle it in the UI.

// ---

// ## Scenario 2 — Bulk Email Sending Simulation with Parallel Promises and Error Handling

// Simulate sending bulk emails to 5 users. Treat each email-sending operation as a `Promise` (simulate delays with `setTimeout`).

// ### Requirements

// - Send all emails in parallel using `Promise.all`.
// - If any email fails (e.g., due to a simulated random failure), catch the error and clearly indicate which specific email failed.
// - Use a `finally` block to display a message indicating that the "Email process is complete." (regardless of success/failure).

// ### Suggested tasks

// - Create an array of 5 mock email tasks that resolve or reject based on a random condition.
// - Call `Promise.all` and handle success and failure cases. Show a breakdown of which emails succeeded and which failed.
// - Ensure the `finally` block runs to update the UI or console indicating completion.

// ---

// Optional: combine both scenarios into a small dashboard that fetches weather and then attempts to send a report-email, demonstrating error handling across both network and simulated async operations.
// # Day 63 — Project Scenarios

// API example (OpenWeatherMap):

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

// ---

// ## Scenario 1 — Weather Dashboard with Error Handling

// Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).

// ### Requirements

// - Make the API request asynchronously using `fetch` with `async/await`.
// - Handle API request failures (for example, invalid city name) using `try/catch`.
// - Create and throw custom errors based on weather conditions (e.g., extremely high or low temperature) and handle them appropriately.

// ### Suggested tasks

// - Build a simple UI to input a city name and display the result.
// - Show user-friendly error messages for network errors, invalid input, or API errors.
// - Demonstrate at least one custom thrown error (e.g., `ExtremeTemperatureError`) and handle it in the UI.

// ---

// ## Scenario 2 — Bulk Email Sending Simulation with Parallel Promises and Error Handling

// Simulate sending bulk emails to 5 users. Treat each email-sending operation as a `Promise` (simulate delays with `setTimeout`).

// ### Requirements

// - Send all emails in parallel using `Promise.all`.
// - If any email fails (e.g., due to a simulated random failure), catch the error and clearly indicate which specific email failed.
// - Use a `finally` block to display a message indicating that the "Email process is complete." (regardless of success/failure).

const userEmails = [
    "alice@example.com",
    "bob@example.com",
    "charlie@example.org",
    "jane.doe@test.com",
    "john.smith@demo.net",
    "support@myapp.dev",
    "user1@sample.io",
    "contact@company.test"
];

async function sendEmail(email) {
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * 5);

        setTimeout(() => {
            let probability = Math.floor(Math.random() * 10);
            if (probability <= 5) {
                resolve(`Email sent successfully to ${email}.`);
            } else {
                reject("Email not sent.");
            }
        }, time * 1000);
    });
}

// sendEmail("a@h.com").then(function(res) {
//     console.log(res);
// }).catch(function(err) {
//     console.log(err);
// });

async function sendEmails(userEmails) {
    let allRes = userEmails.map(function(email) {
        return sendEmail(email).then(function(res) {
            return res;
        }).catch(function(err) {
            return err;
        });
    });
    let ans = await Promise.all(allRes);
    ans.forEach(function(singleRes) {
        console.log(singleRes);
    });
}

sendEmails(userEmails);

// ### Suggested tasks

// - Create an array of 5 mock email tasks that resolve or reject based on a random condition.
// - Call `Promise.all` and handle success and failure cases. Show a breakdown of which emails succeeded and which failed.
// - Ensure the `finally` block runs to update the UI or console indicating completion.

// ---

// Optional: combine both scenarios into a small dashboard that fetches weather and then attempts to send a report-email, demonstrating error handling across both network and simulated async operations.
// Displaying Day 63 Question sheet.md.