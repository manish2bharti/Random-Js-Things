const outerFun = (a) => {
	let b = 10;
	const innerFunc = () => {
		let sum = a + b;
		console.log(`${sum}`);
	}
	return innerFunc;
}

let inner = outerFun(5)
console.log(inner)
inner()
