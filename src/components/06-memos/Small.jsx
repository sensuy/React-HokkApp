import React from 'react';

const Small = React.memo(({ value }) => {

	console.log(' Me volvi a llamar :( ');

	return (
		<div>
			<small> {value} </small>
		</div>
	)
})

export default Small;
