<!-- Question 1 -->

Arithmetic Operators: +, -, /, _, %, \*\*, ++, --
Assignment Operators: =, +=, -+, /=, _=, \*\*=, %+
Comparison Operators: ==, >, <, >=, <=, !=, ===, !==
Logical Operators: logical and(&&), logical or(||), logical not(!)
Bitwise Operators: &, |, ~, <<, >>

<!-- Question 2 -->

<!-- Arithemetic Operators -->
<!-- addition operator(+) -->

let x = 2;
let y = 2;
let z = x + y;
console.log(z);

<!-- Answer: 4 -->

<!-- Exponentiation operator(**) -->

let x = 2;
let y = x\*\*2;
console.log(z);

<!-- Answer: 4 -->

<!-- Assignment Operators -->
<!-- Addition Assignment Operator -->

let a = 2;
a+=3;
console.log(a)

<!-- Answer: 5 -->

<!-- Multiplication Assignment Operator -->

let a = 3;
a\*=2;
console.log(a)

<!-- Answer: 6 -->

<!-- Comparison Operators -->
<!-- equal to(==) -->

let x = 3;
let y = 5;
x == y;

<!-- Answer: False -->

<!-- greater than(>) -->

let x = 7;
let y = 5;
x > y;

<!-- Answer: True -->

<!-- Logical Operators -->
<!-- logical and(&&) -->

let num1 = 3;
let num2 = 5
(num1 < 10 && num2 > 1);

<!-- Answer: False -->

<!-- Logical or(||) -->

let num1 = 3;
let num2 = 5
(num1 > 5 || y == 5);

<!-- Answer: True -->

<!-- Bitwise Operators -->
<!-- Bitwise and(&) -->

let a = 3;

<!-- 3 -> 0011 -->

let b = 2;

<!-- 2 -> 0010 -->

a & b;

<!-- Answer: 0010 - 2 -->

<!-- Bitwise or(|) -->

let a = 3;

<!-- 3 -> 0011 -->

let b = 2;

<!-- 2 -> 0010 -->

a | b;

<!-- Answer: 0011 - 3 -->

<!-- Question 4 -->
for (let i = 1; i<20; i+=7){
    console.log(i);
}
<!-- Result = 1, 8, 15  -->
