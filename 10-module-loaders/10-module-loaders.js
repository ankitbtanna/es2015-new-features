// Dynamic loading – ‘System’ is default loader
System.import("lib/math").then(function (m) {
  alert("2π = " + m.sum(m.pi, m.pi));
});
