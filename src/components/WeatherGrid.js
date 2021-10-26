import { useFetch } from '../hooks/useFetch';

const WeatherGrid = ({ citys }) => {
	const {
		data: { name, temp, icon },
		loading,
	} = useFetch(citys);
	return (
		<>
			{loading && <p>Cargando....</p>}
			<h2>{name}</h2>
			<h2>{temp}</h2>
			<img src={icon} alt='icons' />
		</>
	);
};

export default WeatherGrid;
