import { useContext } from 'react'
import PrizeNumberContext from '../context/prizeNumberContext'

export default function usePrizeNumber() {
	return useContext(PrizeNumberContext)
}