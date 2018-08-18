import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
	return (
		<div className ='pa2 tc'>
			<input 
				className = 'pa3 ba bg-lightest-blue br4'
				type='search' 
				placeholder='Search Players'
				onChange = {searchChange}
			 />
		</div>	 
	);

}

export default Searchbox;