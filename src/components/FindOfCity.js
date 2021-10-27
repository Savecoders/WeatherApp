import { useState } from 'react';

const Addcity = ({ setCitys }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim().length > 3) {
			setCitys((city) => inputValue);
			setInputValue('');
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Search weather'
				value={inputValue}
				onChange={handleInputChange}
				className='text-field'
			/>
		</form>
	);
};

export default Addcity;
