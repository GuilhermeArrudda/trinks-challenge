export const styles = {
	card: {
		width: '300px',
		height: '50vh',
		background: '#f89058'
	},
	title: {
		mt: '10px',
		ml: '10px',
		fontSize: '30px',
		fontWeight: '700'
	},
	list: {
		width: '100%',
		maxWidth: '300px',
		overflow: 'auto',
		height: '100%',
		maxHeight: '290px',
		'& ul': { pl: '20px', pr: '20px', pb: '10px' },
		'::-webkit-scrollbar': {
			display: 'none'
		}
	},
	text: {
		ml: '20px',
		fontWeight: '500'
	},
	arrow: {
		display: 'flex',
		gap: '10px',
		alignItems: 'end',
		mt: '20px',
		ml: '18px',
		fontSize: '10px'
	}
}