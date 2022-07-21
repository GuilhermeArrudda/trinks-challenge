import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import { styles } from './styles'

export default function ModalGame({ open, setOpen }) {

	const handleClose= () => setOpen(false)

	return(
		<>
			<Modal
				open={open}
				onClose={handleClose}
			>
				<Box sx={styles.modal}>
					<Typography variant='h6' component='h2'>
						Parabéns ou Tente novamente
					</Typography>
					<Typography sx={{ mt: '2px' }}>
						Frase dinâmica
					</Typography>
				</Box>
			</Modal>
		</>
	)
}