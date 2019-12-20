import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const useTweets = symbols => {
	const [tweets, setTweets] = useState([]);
	const idRef = useRef(null);

	// console.log(symbols, 'in custom hook');

	const apiCall = async () => {
		const res = await axios.get(
			`https://vast-oasis-82097.herokuapp.com/symbols/${symbols}`
		);
		// console.log(res.data);
		return res.data;
	};

	const getTweets = async () => {
		clearInterval(idRef.current);
		if (symbols.length) {
			symbols = JSON.stringify(symbols);
			setTweets(await apiCall(symbols));
			idRef.current = setInterval(async () => {
				setTweets(await apiCall(symbols));
			}, 3000);
		} else {
			setTweets([]);
		}
	};

	useEffect(() => {
		getTweets();
		return () => clearInterval(idRef.current);
	}, [symbols]);

	return tweets;
};

export default useTweets;
