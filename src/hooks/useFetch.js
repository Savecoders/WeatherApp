import { useState, useEffect } from 'react';
import getWeatherData from '../helper/getWeatherData';

export const useFetch = (citys) => {
	const [state, setState] = useState({
		loading: true,
		data: {},
	});

	useEffect(() => {
		getWeatherData(citys).then((weather) => {
			setState({ loading: false, data: weather });
		});
	}, [citys]);

	return state;
};
