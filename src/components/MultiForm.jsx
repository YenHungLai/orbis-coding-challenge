import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: '1em'
	}
}));

const MultiForm = ({ setSymbols }) => {
	const [fields, setFields] = useState(['']);
	const classes = useStyles();

	const handleChange = (e, index) => {
		const temp = [...fields];
		temp[index] = e.target.value.toUpperCase();
		setFields(temp);
	};

	const addField = () => {
		const temp = [...fields];
		temp.push('');
		setFields(temp);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setSymbols(fields.filter(item => item));
		setFields(fields.filter(item => item));
	};

	const handleDelete = index => {
		const temp = [...fields];
		temp.splice(index, 1);
		// console.log(temp);
		setFields(temp);
	};

	return (
		<form className={classes.container} onSubmit={e => e.preventDefault()}>
			{fields.map((field, index) => (
				<div key={index}>
					<TextField
						value={field}
						placeholder='Enter a stock symbol'
						onChange={e => handleChange(e, index)}
					/>
					<IconButton
						style={{
							visibility: index === 0 ? 'hidden' : 'visible',
							position: 'absolute'
						}}
						aria-label='delete'
						onClick={handleDelete.bind(this, index)}
					>
						<DeleteIcon />
					</IconButton>
				</div>
			))}
			<IconButton onClick={addField}>
				<AddIcon />
			</IconButton>
			<Button variant='contained' color='primary' onClick={handleSubmit}>
				pull tweets
			</Button>
		</form>
	);
};

export default MultiForm;
