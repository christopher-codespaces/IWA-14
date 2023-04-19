const add = (a, b) => { return a + b }
const multiply = (c) => { return c }

function internal() {
  const added = this.add(this.internal.a, this.internal.b)
  const multiplied = this.multiply(this.internal.c)
  return added * multiplied
}

// Not allowed to change below this

const example1 = {
  internal: {
    a: 2,
    b: 4,
    c: 8,
  },
  add,
  multiply,
  calculate: internal
}

const example2 = {
  internal: {
    a: 2,
    b: 2,
    c: 3,
  },
  add,
  multiply,
  calculate: internal
}

console.log(example1.calculate()) // 48
console.log(example2.calculate()) // 12
