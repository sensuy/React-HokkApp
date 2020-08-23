import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import '../02-useEffect/effects.css';
import { useCounter } from '../../hooks/useCounter';

export const Layout = () => {

	const { counter, increment } = useCounter(1);
	const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

	const { quote } = !!data && data[0];

	return (
		<div>
			<h1>LayoutEffECT</h1>
			<hr />

			<blockquote className="blockquote text-right">
				<p className="mb-0">{quote}</p>
			</blockquote>


			<button className="btn btn-primary" onClick={increment}>Siguiente quote</button>


		</div>
	)
}
