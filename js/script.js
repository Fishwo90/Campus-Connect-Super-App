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
function fetchWeather(zip) {
    console.log(`Attempting to fetch weather data for ${zip}...`);

    // Get the elements to update
    const tempEl = document.getElementById('weather-temp');
    const descEl = document.getElementById('weather-desc');
    const highEl = document.getElementById('weather-high');
    const lowEl = document.getElementById('weather-low');

    // Show a loading state
    if(descEl) descEl.textContent = 'Refreshing...';
    if(tempEl) tempEl.textContent = '--°F';
    if(highEl) highEl.textContent = '--°F';
    if(lowEl) lowEl.textContent = '--°F';

    

  //mock API data as a placeholder
    setTimeout(() => {
        console.log('Mock API data returned.');
        if(tempEl) tempEl.textContent = '73°F';
        if(descEl) descEl.textContent = 'Sunny';
        if(highEl) highEl.textContent = '75°F';
        if(lowEl) lowEl.textContent = '58°F';
    }, 1500); // 1.5-second delay
}

