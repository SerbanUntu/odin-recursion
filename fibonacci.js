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
