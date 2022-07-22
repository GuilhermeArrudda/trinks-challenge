import React from 'react'
import Roulette from '../../components/roulette/index.jsx'
import background from '../../assets/background.png'
import { Box } from '@mui/material'
import Rules from '../../components/gameRules/index.jsx'
import Happy from '../../components/confetti/index.jsx'
import useModal from '../../hooks/useModal.jsx'
import usePrizeNumber from '../../hooks/usePrizeNumber.jsx'

const data = [0, 1, 2]

export default function Cassino() {
	
	const { openModal } = useModal()
	const { prizeNumber } = usePrizeNumber()

	
	const handlePage = () => {
		if(data.includes(prizeNumber)){
			return true
		}
		else {
			return false
		}
	}
	console.log(handlePage())

	return (
		<Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '200px', backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh'}}>
			{openModal && handlePage() ? 
				<>
					<Happy/>
					<Rules/>
					<Roulette/>
				</>
				:
				<>
					<Rules/>
					<Roulette/>
				</>
			}
		</Box>
	)
}