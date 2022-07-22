import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle.jsx'
import Cassino from './pages/Cassino/index.jsx'
import { PrizeNumberProvider } from './context/prizeNumberContext.jsx'
import { ModalProvider } from './context/modalContext.jsx'

function App() {
	return (
		<PrizeNumberProvider>
			<ModalProvider>
				<GlobalStyle/>
				<Cassino/>
			</ModalProvider>
		</PrizeNumberProvider>
	)
}

export default App
