import { useState } from 'react';
import FindOfCity from './components/FindOfCity';
import WeatherGrid from './components/WeatherGrid';
const WhatherApp = () => {
	const [citys, setCitys] = useState('Guayaquil');
	return (
		<>
			<h2>WeatherApp</h2>
			<FindOfCity setCitys={setCitys} />
			<WeatherGrid key={citys} citys={citys} />
		</>
	);
};

export default WhatherApp;
