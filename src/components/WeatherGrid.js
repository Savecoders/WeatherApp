import { useFetch } from '../hooks/useFetch';

const WeatherGrid = ({ citys }) => {
	const {
		data: { name, tempMin, tempMax, temp, icon },
		loading,
	} = useFetch(citys);
	return (
		<>
			{loading && <p>Cargando....</p>}
			<h2>{name}</h2>
			<img src={icon} alt={icon} />
			<h2>{tempMin}</h2>
			<h2>{tempMax}</h2>
			<h2>{temp}</h2>
		</>
	);
};

export default WeatherGrid;
