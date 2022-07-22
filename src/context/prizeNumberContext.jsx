import React, { createContext, useState } from 'react'

const PrizeNumberContext = createContext()

export function PrizeNumberProvider({ children }) {
	const [prizeNumber, setPrizeNumber] = useState(0) 

	return (
		<PrizeNumberContext.Provider value={{ prizeNumber, setPrizeNumber }}>
			{children}
		</PrizeNumberContext.Provider>
	)
}

export default PrizeNumberContext