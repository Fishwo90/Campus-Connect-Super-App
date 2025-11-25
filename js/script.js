/*
    Campus Connect Weather Integration
    Full ready-to-use script.js
*/

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Campus Connect App script loaded!');

    const refreshButton = document.getElementById('refresh-weather-btn');
    const zipCodeInput = document.getElementById('zip-code-input');

    if (refreshButton) {
        // Click event for refresh button
        refreshButton.addEventListener('click', () => {
            const zipCode = zipCodeInput.value || '68467'; // default ZIP
            fetchWeather(zipCode);
        });

        // Fetch default weather on page load
        fetchWeather('68467');
    }
});

// Convert ZIP code to latitude and longitude using Zippopotam.us
async function getCoordinates(zip) {
    try {
        const res = await fetch(`https://api.zippopotam.us/us/${zip}`);
        if (!res.ok) throw new Error("Invalid ZIP code");
        const data = await res.json();
        return {
            lat: parseFloat(data.places[0].latitude),
            lon: parseFloat(data.places[0].longitude)
        };
    } catch (err) {
        console.error("ZIP lookup failed:", err);
        return { lat: 40.86, lon: -97.59 }; // fallback to default
    }
}

// Fetch weather using Open-Meteo API
async function fetchWeather(zip) {
    const tempEl = document.getElementById('weather-temp');
    const descEl = document.getElementById('weather-desc');
    const highEl = document.getElementById('weather-high');
    const lowEl = document.getElementById('weather-low');

    // Show loading state
    if(descEl) descEl.textContent = 'Refreshing...';
    if(tempEl) tempEl.textContent = '--°F';
    if(highEl) highEl.textContent = '--°F';
    if(lowEl) lowEl.textContent = '--°F';

    // Get coordinates for the ZIP
    const { lat, lon } = await getCoordinates(zip);

    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=fahrenheit`
        );

        if (!response.ok) throw new Error("Weather API request failed");

        const data = await response.json();
        console.log("Weather data:", data);

        const temp = data.current_weather?.temperature ?? '--';
        const high = data.daily?.temperature_2m_max[0] ?? '--';
        const low = data.daily?.temperature_2m_min[0] ?? '--';

        tempEl.textContent = `${temp}°F`;
        descEl.textContent = "Current Conditions";
        highEl.textContent = `${high}°F`;
        lowEl.textContent = `${low}°F`;

    } catch (error) {
        console.error("Weather API failed:", error);
        if(descEl) descEl.textContent = "Failed to load weather.";
        if(tempEl) tempEl.textContent = '--°F';
        if(highEl) highEl.textContent = '--°F';
        if(lowEl) lowEl.textContent = '--°F';
    }
}
