import React from 'react'
import Roulette from '../../components/roulette/index.jsx'
import background from '../../assets/background.png'
import { Box } from '@mui/material'

export default function Cassino() {

	return (
		<Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh'}}>
			<Roulette/>
		</Box>
	)
}