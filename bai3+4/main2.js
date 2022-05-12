let n1=0;
let n2=1;
let n3;
let arr = [];
number = parseInt(prompt("nhập số fibonacci"));
for (let i = 1; i <= number; i++) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    console.log(n3);
    if(n3 % 5 ==0) {
        console.log(n3);
        break;
    }}
