export function showSpinner(location) {    // Show spinner while loading weather data
    const weatherOutput = document.getElementById(location);
    weatherOutput.innerHTML = `
      <div class="flex justify-center items-center min-h-[48px]">
        <div class="flex space-x-2">
          <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:.2s]"></div>
          <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:.4s]"></div>
        </div>
      </div>
    `;
}

export const showWeather = ({ name, state, country }, weatherData) => {
  const weatherOutput = document.getElementById('weather-output');
  const temp = Math.round((weatherData.main.temp * 9) / 5 + 32);  // Convert Celsius to Fahrenheit and round to nearest integer
  weatherOutput.innerHTML = `
    <div class="bg-gray-800 rounded-lg shadow-md p-6 text-center">
      <h2 class="text-xl font-semibold mb-2">${name}${state ? ', ' + state : ''}, ${country}</h2>
      <p class="mb-1">Temperature: <span id="weatherTemp" class="font-bold">${temp}</span>°F</p>
      <p class="mb-4">Weather: <span id="weatherDesc" class="capitalize">${weatherData.weather[0].description}</span></p>
      <button id="ask-ai-btn" class="mt-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">Ask for Weather Advice</button>
    </div>
  `;
};

export const showError = (message = 'Could not find that city.') => {
  document.getElementById('weather-output').innerHTML = `
    <div class="bg-red-800 text-red-100 rounded-md p-4 text-center">${message}</div>
  `;
};

export function displayAiAdvice() {
  let adviceElem = document.getElementById('ai-weather-advice');
  if (!adviceElem) {
    adviceElem = document.createElement('div');
    adviceElem.id = 'ai-weather-advice';
    adviceElem.className = 'mt-4';
    const btn = document.getElementById('ask-ai-btn');
    if (btn) btn.parentNode.insertBefore(adviceElem, btn.nextSibling);
  }
  return adviceElem;
}