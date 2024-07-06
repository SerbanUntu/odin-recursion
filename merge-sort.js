function mergeSort(arr) {
	if (arr.length <= 1) return arr
	let mid = arr.length / 2
	let left = mergeSort(arr.slice(0, mid))
	let right = mergeSort(arr.slice(mid))
	let result = []
	let i = 0
	let j = 0
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			result.push(left[i])
			i++
		} else {
			result.push(right[j])
			j++
		}
	}
	result.push(...left.slice(i), ...right.slice(j))
	return result
}

console.log(mergeSort([])) // []
console.log(mergeSort([0])) // [0]
console.log(mergeSort([-1, -2, -3])) // [-3, -2, -1]
console.log(mergeSort([3, 2, 1])) // [1, 2, 3]
console.log(mergeSort([1, 2, 3])) // [1, 2, 3]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])) // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])) // [79, 100, 105, 110]
console.log(mergeSort([0, 0, 1, 0, 0, 0, 0, 0])) // [0, 0, 0, 0, 0, 0, 0, 1]
