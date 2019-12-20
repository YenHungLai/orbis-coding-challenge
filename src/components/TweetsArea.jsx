import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Components
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BackspaceIcon from '@material-ui/icons/Backspace';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
	rootContainer: {
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '25%',
		minWidth: '370px',
		alignItems: 'center',
		height: '73vh',
		margin: 'auto',
		overflow: 'hidden'
	},
	title: {
		display: 'flex',
		alignItems: 'center'
	},
	symbolName: {
		margin: '0 2em'
	},
	deleteIcon: {
		marginLeft: '1em'
	},
	tweetsContainer: {
		overflowY: 'scroll',
		width: '100%'
	},
	paperContainer: {
		padding: '1em',
		margin: '1em 0',
		display: 'flex',
		flexDirection: 'column',
		overflow: 'hidden',
		overflowWrap: 'break-word'
	},
	handle: {
		fontStyle: 'italic',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginTop: '1em'
	},
	avatar: {
		marginRight: '0.5em'
	},
	[theme.breakpoints.down('sm')]: {
		rootContainer: {
			maxWidth: '50%',
			minWidth: '50%'
		}
	},
	[theme.breakpoints.down('xs')]: {
		rootContainer: {
			maxWidth: '100%',
			minWidth: '100%'
		}
	}
}));

const TweetsArea = ({ data, deleteSymbol }) => {
	const { messages, symbol } = data;
	const classes = useStyles();

	return (
		<div className={classes.rootContainer}>
			<div className={classes.title}>
				<Badge
					badgeContent={symbol['watchlist_count']}
					max={100000000}
					color='secondary'
				>
					<MailIcon />
				</Badge>
				<Typography component='h1' className={classes.symbolName}>
					{symbol.title}
				</Typography>
				<IconButton onClick={deleteSymbol.bind(this, symbol.symbol)}>
					<BackspaceIcon />
				</IconButton>
			</div>
			<div className={classes.tweetsContainer}>
				{messages.map((message, index) => (
					<Paper className={classes.paperContainer} key={index}>
						<Typography>{message.body}</Typography>
						<div className={classes.handle}>
							<img
								src={message.user['avatar_url']}
								alt='user avatar'
								height='30px'
								className={classes.avatar}
							/>
							<Typography
								style={{ fontWeight: 'bold' }}
								align='right'
								noWrap
							>
								- {message.user.username}
							</Typography>
						</div>
					</Paper>
				))}
			</div>
		</div>
	);
};

export default TweetsArea;
