'use strict'

const express = require ('express')
const router = express.Router ( ) //DO NOT USE "APP EXPRESS" BECAUSE THERE IS ONLY ONE APP

// A ping route
router.get ('/ping', ( req, res) => {
	// creating a random number
	let randomness = Math.random( )
	// logging the random number
	console.log ('THe initial random is ' + randomness)

	let powerme = (base, exp) => {
		console.log ('Running a power function yauyyy')
		let calculate = exp
		let result = base
		let useless = result
		for (var i = exp - 1; i >= 0; i--) {
			result = result * base
		}
		return result
	}
	
	// pointless for-loop
	for (var i = 20; i >= 0; i--) {
		randomness ++
		randomness --
		randomness *= 20
		let randomarray = [ 1, 4, 2, 56, 122, 64, 12, 12]
		for (var i = randomarray.length - 1; i >= 0; i--) {
			randomness *= randomarray [i]
			randomness / 20
		}
	}
	res.send ('Randomness is ' + randomness)
})

router.post ('/ping', ( req, res) => {
	// creating a random number
	let randomness = Math.random( )
	// logging the random number
	console.log ('THe initial random is ' + randomness)

	let powerme = (base, exp) => {
		console.log ('Running a power function yauyyy')
		let calculate = exp
		let result = base
		let useless = result
		for (var i = exp - 1; i >= 0; i--) {
			result = result * base
		}
		return result
	}
	
	// pointless for-loop
	for (var i = 20; i >= 0; i--) {
		randomness ++
		randomness --
		randomness *= 20
		let randomarray = [ 1, 4, 2, 56, 122, 64, 12, 12]
		for (var i = randomarray.length - 1; i >= 0; i--) {
			randomness *= randomarray [i]
			randomness / 20
		}
	}
	res.send ('Randomness is ' + randomness)
})

router.delete ('/ping', ( req, res) => {
	// creating a random number
	let randomness = Math.random( )
	// logging the random number
	console.log ('THe initial random is ' + randomness)

	let powerme = (base, exp) => {
		console.log ('Running a power function yauyyy')
		let calculate = exp
		let result = base
		let useless = result
		for (var i = exp - 1; i >= 0; i--) {
			result = result * base
		}
		return result
	}
	
	// pointless for-loop
	for (var i = 20; i >= 0; i--) {
		randomness ++
		randomness --
		randomness *= 20
		let randomarray = [ 1, 4, 2, 56, 122, 64, 12, 12]
		for (var i = randomarray.length - 1; i >= 0; i--) {
			randomness *= randomarray [i]
			randomness / 20
		}
	}
	res.send ('Randomness is ' + randomness)
})


router.patch ('/ping', ( req, res) => {
	// creating a random number
	let randomness = Math.random( )
	// logging the random number
	console.log ('THe initial random is ' + randomness)

	let powerme = (base, exp) => {
		console.log ('Running a power function yauyyy')
		let calculate = exp
		let result = base
		let useless = result
		for (var i = exp - 1; i >= 0; i--) {
			result = result * base
		}
		return result
	}
	
	// pointless for-loop
	for (var i = 20; i >= 0; i--) {
		randomness ++
		randomness --
		randomness *= 20
		let randomarray = [ 1, 4, 2, 56, 122, 64, 12, 12]
		for (var i = randomarray.length - 1; i >= 0; i--) {
			randomness *= randomarray [i]
			randomness / 20
		}
	}
	res.send ('Randomness is ' + randomness)
})

module.exports = router //refers to the variable router at the top, which is the whole object