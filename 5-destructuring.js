// list matching
var [a, , b] = [1, 2, 3];

// object matching and assign to specific variable
function getASTNode() {
  return {
    op: "myOP",
    lhs: {
      op: "myLHSOp",
    },
    rhs: "myRHS",
  };
}
var {
  op: a,
  lhs: { op: b },
  rhs: c,
} = getASTNode();
console.log(a);
// myOP
console.log(b);
// myLHSOp
console.log(c);
// myRHS

// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
var { op, lhs, rhs } = getASTNode();

// Can be used in parameter position
function g({ name: x }) {
  console.log(x);
}
g({ name: 5 });

// Fail-soft destructuring
var [a] = [];
a === undefined;

// Fail-soft destructuring with defaults
var [a = 1] = [];
a === 1;
