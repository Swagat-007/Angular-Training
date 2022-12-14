var st = "madam";
var Palndro = function (st) {
    var midPoint = st.length / 2;
    for (var i = 0; i < midPoint; i++) {
        if (st[i] != st[st.length - 1 - i]) {
            console.log(" Not Palindrome");
            return;
        }
    }
    console.log("Palindrome");
};
console.log(Palndro(st));
