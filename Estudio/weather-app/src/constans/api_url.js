const location = 'Madrid,es';
const myApiKey = '99d5ddbc7be372b095a184b19e4cbdbf'; 
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather'; 

export const api_weather = `${url_base_weather}?q=${location}&appid=${myApiKey}`;
