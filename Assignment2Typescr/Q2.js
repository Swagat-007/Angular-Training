var arr = [1, 2, 5, 6, 89, 77, 51, 7, 4];
var sorting = function (n) { return n.sort(function (a, b) { return a - b; }); };
console.log(sorting(arr));
