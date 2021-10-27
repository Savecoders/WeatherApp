const WeatherCard = ({ name, tempMin, tempMax, temp, icon }) => {
	return (
		<div className='weather-card'>
			<img className='img-icon' src={icon} alt={icon} />
			<h2>
				<i className='bx bxs-map'></i>
				{name}
			</h2>
			<h2>{temp}</h2>
			<section className='section-temp'>
				<h4>Min: {tempMin} </h4>
				<h4>Max: {tempMax} </h4>
			</section>
		</div>
	);
};

export default WeatherCard;
