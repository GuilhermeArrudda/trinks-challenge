import { Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import useModal from '../../hooks/useModal'
import usePrizeNumber from '../../hooks/usePrizeNumber'
import Game from '../../utils/game'
import ModalGame from '../modal'
import styles from './styles'

const data = [
	{ option: 'Feliz e Sortudo' },
	{ option: 'Feliz e Azarado' },
	{ option: 'Infeliz e Sortudo' },
	{ option: 'Infeliz e Azarado' },
]

export default function Roulette() {
	const [mustSpin, setMustSpin] = useState(false)
	const { prizeNumber, setPrizeNumber } = usePrizeNumber()
	const [input, setInput] = useState('')
	const { openModal, setOpenModal } = useModal()
	const [award, setAward] = useState(null)

	const handleGame = (e) => {
		e.preventDefault()
		setAward(Game(input))
	}

	useEffect(() => {
		if(award){
			handleSpinClick()
			handleModal()
		}
	}, [award])

	const handleSpinClick = () => {
		if(award) {
			if(award[0] === 'true' && award[1] === 'true'){
				setPrizeNumber(0)
			}
			else if(award[0] === 'false' && award[1] === 'true'){
				setPrizeNumber(1)
			}
			else if(award[0] === 'true' && award[1] === 'false'){
				setPrizeNumber(2)
			} else {
				setPrizeNumber(3)
			}
			setMustSpin(true)
		}
	}

	const handleModal = () => {
		setTimeout(() => {
			setOpenModal(true)
		}, '11000')
	}

	const cleanStates = (e) => {
		e.preventDefault()
		setAward(null)
		setInput('')
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
			{award ? 
				<form style={styles.form} onSubmit={cleanStates}>
					<Button sx={styles.button} type='submit' variant="contained" disabled={mustSpin}>Reset</Button>
				</form>
				:
				<form style={styles.form} onSubmit={handleGame}>
					<TextField id="outlined-basic" variant="outlined" type='number' sx={styles.textField} onChange={(e) => setInput(e.target.value)} placeholder='insira um número' autoComplete='off'/>
					<Button variant="contained" sx={styles.button} type='submit'>SPIN</Button>
				</form>
			}
			
			<ModalGame/>
		</Box>
	)
}