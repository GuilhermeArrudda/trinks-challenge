import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import ModalGame from '../modal'
import styles from './styles'

const data = [
	{ option: '0' },
	{ option: '1' },
	{ option: '2' },
	{ option: '4' },
]

export default function Roulette() {
	const [mustSpin, setMustSpin] = useState(false)
	const [prizeNumber, setPrizeNumber] = useState(0)
	const [input, setInput] = useState('')
	const [openModal, setOpenModal] = useState(false)

	const handleSpinClick = (e) => {
		const newPrizeNumber = Math.floor(Math.random() * data.length)
		setPrizeNumber(newPrizeNumber)
		setMustSpin(true)
		e.preventDefault()
		console.log(input)
	}

	const handleModal = () => {
		setTimeout(() => {
			setOpenModal(true)
		}, '11000')
	}

	const handleGame = (e) => {
		handleSpinClick(e)
		handleModal()
	}

	return (
		<Box sx={styles.box}>
			<Wheel
				mustStartSpinning={mustSpin}
				prizeNumber={prizeNumber}
				data={data}
				backgroundColors={['#d0533e', '#f89058']}

				onStopSpinning={() => {
					setMustSpin(false)
				}}
			/>
			<form style={styles.form} onSubmit={handleGame}>
				<TextField id="outlined-basic" variant="outlined" type='number' sx={styles.textField} onChange={(e) => setInput(e.target.value)} placeholder='insira um número'/>
				<Button variant="contained" sx={styles.button} type='submit'>SPIN</Button>
			</form>
			<ModalGame open={openModal} setOpen={setOpenModal}/>
		</Box>
	)
}