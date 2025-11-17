/*
    This is your custom JavaScript file.
    It's linked at the bottom of your HTML pages.
*/

// Wait for the DOM (HTML structure) to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
    
    console.log('Campus Connect App script loaded!');
    
    // --- Event-Driven Programming Example: Weather API ---
    // This section demonstrates event-driven programming and
    // a placeholder for API integration as required by the project.

    // Find the refresh button on the page
    const refreshButton = document.getElementById('refresh-weather-btn');

    // Check if the button exists on the current page (it's only on index.html)
    if (refreshButton) {
        // Add a 'click' event listener to the button.
        // This is event-driven programming.
        refreshButton.addEventListener('click', () => {
            console.log('Refresh weather button clicked!');
            fetchWeather();
        });
    }

    // --- API Integration Placeholder ---
    // This function is a placeholder for your API call.
    function fetchWeather() {
        console.log('Attempting to fetch weather data...');

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

        // --- API PLACEHOLDER ---
        // In a real project, you would use 'fetch()' here to call a real
        // weather API (like OpenWeatherMap or Weather.gov).
        //
        // Example:
        // fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=YOUR_ZIP_CODE')
        //   .then(response => response.json())
        //   .then(data => {
        //       // Update the HTML with real data
        //       tempEl.textContent = `${data.current.temp_f}°F`;
        //       descEl.textContent = data.current.condition.text;
        //   })
        //   .catch(error => {
        //       console.error('Error fetching weather:', error);
        //       descEl.textContent = 'Failed to load';
        //   });

        // For this MVP, we'll just use mock (fake) data after a short delay
        // to simulate a real network request.
        setTimeout(() => {
            console.log('Mock API data returned.');
            if(tempEl) tempEl.textContent = '73°F';
            if(descEl) descEl.textContent = 'Sunny';
            if(highEl) highEl.textContent = '75°F';
            if(lowEl) lowEl.textContent = '58°F';
        }, 1500); // 1.5-second delay
    }

    // Call the function once on page load (if the elements are present)
    if (document.getElementById('weather-temp')) {
        fetchWeather();
    }

    // Note: The mobile menu is handled by Bootstrap's
    // data-bs-toggle and data-bs-target attributes in the HTML,
    // so no custom JavaScript is needed for them to work!
});
