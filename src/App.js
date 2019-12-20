import React, { useState, useRef } from 'react';
import axios from 'axios';
import './App.css';
// Utils
import useTweets from './useTweets';
// Components
import MultiForm from './components/MultiForm';
import ResultDisplay from './components/ResultDisplay';
import { Typography } from '@material-ui/core';

const App = () => {
	const [symbols, setSymbols] = useState([]);
	const tweets = useTweets(symbols);
	// console.log(tweets);

	const deleteSymbol = symbol => {
		setSymbols(prevState =>
			prevState.filter(item => item !== symbol).filter(item => item)
		);
	};

	return (
		<div className='root-container'>
			<MultiForm setSymbols={setSymbols} />
			{tweets ? (
				<ResultDisplay tweets={tweets} deleteSymbol={deleteSymbol} />
			) : (
				<Typography component='h1'>Symbol not Found</Typography>
			)}
		</div>
	);
};

export default App;
