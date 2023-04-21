function add(a, b) {
  return a + b;
}

function multiply(c, d) {
  return c * d;
}

function internal() {
  const added = this.add(this.internal.a, this.internal.b);
  const multiplied = this.multiply(added, this.internal.c);
  const value = multiplied;
  return console.log(value);
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
  calculate: internal,
};

const example2 = {
  internal: {
    a: 2,
    b: 2,
    c: 3,
  },
  add,
  multiply,
  calculate: internal,
};

example1.calculate(); // output: 48
example2.calculate(); // output: 12
