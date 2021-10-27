import { useFetch } from '../hooks/useFetch';
import WeatherCard from './WeatherCard';

const WeatherGrid = ({ citys }) => {
	const { data, loading } = useFetch(citys);
	return (
		<>
			{loading ? (
				<i className='bx bx-loader-alt bx-spin loading'></i>
			) : (
				<WeatherCard key={data.id} {...data} />
			)}
		</>
	);
};

export default WeatherGrid;
