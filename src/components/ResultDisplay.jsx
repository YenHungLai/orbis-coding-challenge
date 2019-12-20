import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Components
import TweetsArea from './TweetsArea';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		width: '100%',
		marginTop: '1em',
		overflowY: 'scroll'
	}
});

const ResultDisplay = ({ tweets, deleteSymbol, setSymbols }) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			{tweets.map((data, index) => (
				<TweetsArea
					data={data}
					deleteSymbol={deleteSymbol}
					setSymbols={setSymbols}
					key={index}
				/>
			))}
		</div>
	);
};

export default ResultDisplay;
