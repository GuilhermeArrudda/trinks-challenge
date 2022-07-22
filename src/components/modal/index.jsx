import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import useModal from '../../hooks/useModal'
import usePrizeNumber from '../../hooks/usePrizeNumber'
import { styles } from './styles'

const data = [
	{title: 'É VAGA!!! 🎊', message: 'Meus parabéns! Seu número é feliz e sortudo! Você acaba de passar no teste e seguir adiante no processo seletivo, já prepara a CTPS que falta pouco!!'},
	{title: 'Que tal um corte? 💇', message: 'Parabéns! Seu número é feliz! Você ganhou uma sessão no salão de sua preferência para cuidar do seu cabelo!!'},
	{title: 'Parabéns! 💅', message: 'Parabéns, seu número é sortudo!! Você acaba de ganhar um sessão no salão de sua preferência dar um tapa no visual com os serviços disponíveis no salão'},
	{title: 'Tente novamente!', message: 'Seu número não é sortudo nem feliz. Clique no botão abaixo e escolha um novo número para concorrer aos prêmios.'}
]

export default function ModalGame() {

	const { prizeNumber } = usePrizeNumber()
	const { openModal, setOpenModal } = useModal()
	const handleClose= () => setOpenModal(false)

	return(
		<>
			<Modal
				open={openModal}
				onClose={handleClose}
			>
				<Box sx={styles.modal}>
					<Typography variant='h6' component='h2' sx={styles.title}>
						{data[prizeNumber].title}
					</Typography>
					<Typography sx={styles.text}>
						{data[prizeNumber].message}
					</Typography>
				</Box>
			</Modal>
		</>
	)
}