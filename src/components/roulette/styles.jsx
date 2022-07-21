const styles = {
	box: {
		display: 'flex',
		flexDirection: 'column'
	},
	button: {
		width: '50px',
		height: '50px',
		borderRadius: '10px',
		background: '#f89058',
		boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
		'&:hover': {background: '#f89058de'}
	},
	textField: {
		width: '170px',
		background: '#ffffffc9'
	},
	form: {
		display: 'flex',
		justifyContent: 'center',
		gap: '20px'
	}
}

export default styles