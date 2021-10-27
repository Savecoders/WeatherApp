const getWeatherData = async (citys) => {
	const apiKey = 'f88874f94ed3d3fd6a271bd0ca65b616';
	const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
		citys
	)}&appid=${apiKey}`;
	const resp = await fetch(urlApi);
	const {
		name,
		main: { temp: temperature, temp_min, temp_max },
		id,
		weather,
	} = await resp.json();
	const kelvinToCelsius = (k) => `${(k - 273.15).toFixed(2)} Cº`;
	const weatherData = {
		name: name,
		tempMin: kelvinToCelsius(temp_min),
		tempMax: kelvinToCelsius(temp_max),
		temp: kelvinToCelsius(temperature),
		id: id,
		icon: `http://openweathermap.org/img/w/${weather[0].icon}.png`,
	};

	return weatherData;
};

export default getWeatherData;
