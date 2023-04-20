const myObj = {
    internal: {
        a: 2,
        b: 4,
    }
}

function add(a,b) { 
   return a + b
 }

function multiply(a,b) {
   return  a - b 
 }

function doSomething () {
	const added = add(this.internal.a,this.internal.b)  + 42
	const multiplied = multiply(this.internal.a,this.internal.b)  * (-6)
	return {added, multiplied}
}

doSomething.call(myObj)
console.log(doSomething.call(myObj))

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: doSomething
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: doSomething
}

example1.calculate()
example2.calculate()