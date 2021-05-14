// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;

// Weak Maps
var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size === undefined;

// Weak Sets
var ws = new WeakSet();
ws.add({ data: 42 });
// Because the added object has no other references, it will not be held in the set

let myWeakSet = new WeakSet();
let obj = {};
myWeakSet.add(obj);
console.log(myWeakSet.has(obj));

// break the last reference to the object we created earlier
obj = 5;

// false because no other references to the object which the weakset points to
// because weakset was the only object holding a reference it released it and got garbage collected
console.log(myWeakSet.has(obj));
