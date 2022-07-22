export default function Game(chosenNumber) {
	let award = []
	award.push(luckyNumber(chosenNumber))
	award.push(happyNumber(chosenNumber))
	return award

	function happyNumber(chosenNumber) {
		let count = 0
		let result = checkNumber(chosenNumber)
		while (result !== 1 && count <= 100) {
			result = checkNumber(result)
		}
		if (result === 1) {
			return 'true'
		}
		else {
			return 'false'
		}

		function splitNumbers(number) {
			let numbers = number.toString()
			return numbers.split('')
		}

		function exponentiation(listOfNumbers) {
			let sum = 0
			for (let i = 0; i < listOfNumbers.length; i++) {
				let number = listOfNumbers[i]
				sum += Math.pow(parseInt(number), 2)
			}
			return sum
		}

		function checkNumber(input) {
			count++
			return exponentiation(splitNumbers(input))
		}
	}

	function luckyNumber(chosenNumber) {
		function createArray(number) {
			let array = []
			for (let i = 1; i <= number; i++) {
				array.push(i)
			}
			return array
		}

		function initialArray(arr, param) {
			let array = []
			for (let i = 0; i < arr.length; i++) {
				if ((i + 1) % param !== 0) {
					array.push(arr[i])
				}
			}
			return array
		}

		let template = initialArray(createArray(chosenNumber), 2)
		let index = 1
		while (index <= chosenNumber) {
			let elementsArray = template
			template = initialArray(template, template[index])
			if (elementsArray.length === template.length) {
				if (template.includes(parseInt(chosenNumber))) {
					return 'true'
				}
				else {
					return 'false'
				}
			}
			index++
		}
	}
}