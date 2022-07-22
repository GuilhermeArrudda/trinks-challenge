import React from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import Confetti from 'react-confetti'

export default function Happy() {
	const { width, height } = useWindowSize()
	return (
		<Confetti
			width={width}
			height={height}
		/>
	)
}