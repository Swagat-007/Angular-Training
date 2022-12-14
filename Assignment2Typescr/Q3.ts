let st:string = "madam";

let Palndro = (st:string) => {const midPoint = st.length / 2;

for (let i = 0; i < midPoint; i++)

 {

  if (st[i] != st[st.length - 1 - i]) {

    console.log(" Not Palindrome");

    return;

  }

}

console.log("Palindrome");};

console.log(Palndro(st));