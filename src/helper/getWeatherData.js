const getWeatherData = async (citys) => {
	const apiKey = 'f88874f94ed3d3fd6a271bd0ca65b616';
	const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
		citys
	)}&appid=${apiKey}`;
	const resp = await fetch(urlApi);
	const { main, weather, name } = await resp.json();
	const weatherData = {
		name: name,
		temp: main?.temp,
		icon: `http://openweathermap.org/img/w/${weather[0].icon}.png`,
	};

	return weatherData;
};

export default getWeatherData;
