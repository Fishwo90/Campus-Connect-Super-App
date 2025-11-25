/*
    Mockup Weather API
*/

// Wait for the DOM (HTML structure) to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
    
    console.log('Campus Connect App script loaded!');
    


// Find the elements on the page (if they exist)
const refreshButton = document.getElementById('refresh-weather-btn');
const zipCodeInput = document.getElementById('zip-code-input');

// Check if the button exists on the current page (it's only on index.html)
if (refreshButton) {
    // Add a 'click' event listener to the button.
    refreshButton.addEventListener('click', () => {
        const zipCode = zipCodeInput.value || '68467'; // Use input value or a default
        console.log(`Refresh weather button clicked for zip: ${zipCode}`);
        fetchWeather(zipCode);
    });

    // Also fetch weather on page load with a default
    fetchWeather('68467');
}

// --- API Integration Placeholder ---
// This function is a placeholder for your API call.
// It now accepts a 'zip' parameter.
// REAL API Integration using Open-Meteo
async function fetchWeather(zip) {
    console.log(`Fetching REAL weather data for ZIP: ${zip}`);

    const tempEl = document.getElementById('weather-temp');
    const descEl = document.getElementById('weather-desc');
    const highEl = document.getElementById('weather-high');
    const lowEl = document.getElementById('weather-low');

    // Show loading state
    if(descEl) descEl.textContent = 'Refreshing...';
    if(tempEl) tempEl.textContent = '--°F';
    if(highEl) highEl.textContent = '--°F';
    if(lowEl) lowEl.textContent = '--°F';

    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=40.86&longitude=-97.59&daily=temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=fahrenheit`
        );

        const data = await response.json();
        console.log("Real weather data:", data);

        const temp = data.current_weather.temperature;
        const high = data.daily.temperature_2m_max[0];
        const low = data.daily.temperature_2m_min[0];

        // Update the HTML
        tempEl.textContent = `${temp}°F`;
        descEl.textContent = "Current Conditions";
        highEl.textContent = `${high}°F`;
        lowEl.textContent = `${low}°F`;

    } catch (error) {
        console.error("Weather API failed:", error);
        descEl.textContent = "Failed to load weather.";
    }
}

