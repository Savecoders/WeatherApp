import { useState } from 'react';

const Addcity = ({ setCitys }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim().length > 2) {
			setCitys((city) => inputValue);
			setInputValue('');
		}
	};
	return (
		<form onSubmit={handleSubmit} className='mg-3vw'>
			<input
				type='text'
				placeholder='Search of city'
				value={inputValue}
				onChange={handleInputChange}
				className='text-field'
			/>
		</form>
	);
};

export default Addcity;
