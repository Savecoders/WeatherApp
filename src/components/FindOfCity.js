import { useState, useRef, useEffect } from 'react';

const Addcity = ({ setCitys }) => {
	const [inputValue, setInputValue] = useState('');
	const inputRef = useRef(null);
	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, [inputRef]);
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
				ref={inputRef}
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
