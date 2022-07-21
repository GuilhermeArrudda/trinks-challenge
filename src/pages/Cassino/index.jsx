import React from 'react'
import Roulette from '../../components/roulette/index.jsx'
import background from '../../assets/background.png'
import { Box } from '@mui/material'
import Rules from '../../components/gameRules/index.jsx'

export default function Cassino() {

	return (
		<Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '200px', backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh'}}>
			<Rules/>
			<Roulette/>
		</Box>
	)
}