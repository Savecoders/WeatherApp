import { useState } from 'react';
import Addcity from './components/AddCity';
import WeatherGrid from './components/WeatherGrid';
const WhatherApp = () => {
	const [citys, setCitys] = useState('buenos aires');
	return (
		<>
			<h2>WeatherMap</h2>
			<Addcity setCitys={setCitys} />
			<WeatherGrid key={citys} citys={citys} />
		</>
	);
};

export default WhatherApp;
