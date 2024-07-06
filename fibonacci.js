function fibs(n) {
	if (n < 1) return []
	let a = 0
	let b = 1
	let c = 1
	let arr = [a]
	for (let i = 2; i <= n; i++) {
		arr.push(b)
		a = b
		b = c
		c = a + b
	}
	return arr
}

console.log(fibs(0)) // []
console.log(fibs(1)) // [0]
console.log(fibs(2)) // [0, 1]
console.log(fibs(3)) // [0, 1, 1]
console.log(fibs(4)) // [0, 1, 1, 2]
console.log(fibs(8)) // [0, 1, 1, 2, 3, 5, 8, 13]

function fibsRec(n) {
	if (n < 1) return []
	if (n === 1) return [0]
	if (n === 2) return [0, 1]
	let prev = fibsRec(n - 1)
	return prev.concat(prev[n - 2] + prev[n - 3])
}

console.log(fibsRec(0)) // []
console.log(fibsRec(1)) // [0]
console.log(fibsRec(2)) // [0, 1]
console.log(fibsRec(3)) // [0, 1, 1]
console.log(fibsRec(4)) // [0, 1, 1, 2]
console.log(fibsRec(8)) // [0, 1, 1, 2, 3, 5, 8, 13]
