/*
Flow Control Statements or Decision Making Statements
1. Conditional Statements or Selection Statements:
    1. if Statement
    2. if else Statement
    3. Netsed if else Statement
    4. if else if ladder Statement
    5. switch case Statement
2. Iteration Statements or Loops:
    1. for Loop
    2. for in Loop
    3. for Of Loop
    4. while Loop
    5. do while Loop
    6. Nested Loops
3. Jump Statements:
    1. break Statement
    2. Continue Statement

if Statement: used when execution of a Statement Block depend
              on a condition
syntax:
if(condition){
    -----
    number of Statements
    -----
}
Note: {} are optional if we have only one statement in statement
      block
 */
if(true){
    console.log("Hello World1")
    console.log("Hello World2")
    console.log("Hello World3")
}
console.log("Hello World4")
console.log("Hello World5")
console.log("Hello World6")

if(false){
    console.log("Hello World1")
    console.log("Hello World2")
    console.log("Hello World3")
}
console.log("Hello World4")
console.log("Hello World5")
console.log("Hello World6")

if (!true)
console.log("Hello World1")
console.log("Hello World2")
console.log("Hello World3")
console.log("Hello World4")
console.log("Hello World5")
console.log("Hello World6")


1.  //!  if else Statement
/* used when execution of one Statement Block
                   out of two block depends on a condition
syntax:
if(condition){
    -----
    number of Statements block1
    -----
}
else{
    -----
    number of Statements block2
    -----
}
 */

var num = Number(prompt("Enter the Number :  "))
if(num%2==0)
document.write(`${num} is Even`)
else
document.write(`${num} is Odd`)


/*
WAP to Check whether a person can vote or not
WAP to check whether two numbers are equal or not
*/


// WAP to check whether a number is perfect square number or not
var num = Number(prompt("Enter the Number : "))
var n = parseInt(num**0.5)
if(n*n==num)
document.write(`${num} is Perfect Square Number`)
else
document.write(`${num} is not a Perfect Square Number`)

2. //! Nested if Else
/* if else within if else Statement
syntax:
    if(condition1){
        ------
        if(condition2){
            -----
            -----
        }
        else{
            ----
            ----
        }
        ------
    }
    else
    {
        ------
        if(condition3){
            -----
            -----
        }
        else{
            ----
            ----
        }
        ------
    }
 */


var a = Number(prompt("Enter the First Number : "))
var b = Number(prompt("Enter the Second Number : "))
var c = Number(prompt("Enter the Third Number : "))
if(a<b){
    if(a<c)
    document.write(`${a} is Smallest`)
    else
    document.write(`${c} is Smallest`)
}
else{
    if(b<c)
    document.write(`${b} is Smallest`)
    else
    document.write(`${c} is Smallest`)
}



// WAP to check whether a Year is Leap Year or Not
var year = Number(prompt("Enter the Year Number : "))
if(year%100==0){
    if(year%400==0)
    document.write(`${year} is a Leap Year`)
    else
    document.write(`${year} is not a Leap Year`)
}
else{
    if(year%4==0)
    document.write(`${year} is a Leap Year`)
    else
    document.write(`${year} is not a Leap Year`)
}


var year = Number(prompt("Enter the Year Number : "))
if (year % 400 == 0)
    document.write(`${year} is a Leap Year`)
else if (year % 4 == 0 && year%100!=0)
    document.write(`${year} is a Leap Year`)
else
    document.write(`${year} is not a Leap Year`)

var year = Number(prompt("Enter the Year Number : "))
if (year % 400 == 0 || year % 4 == 0 && year%100!=0)
    document.write(`${year} is a Leap Year`)
else
    document.write(`${year} is not a Leap Year`)


/*
 if else if ladder : when we have n number of conditions
 syntax:
    if(condition1){
        -----
        -----
    }
    else if(condition2){
        -----
        -----
    }
    else if(condition3){
        -----
        -----
    }
    else if(condition4){
        ------
        ------
    }
    --
    --
    --
    else if(conditionN){
        ------
        ------
    }
    else{
        ------
        ------
    }
 */

var a = Number(prompt("Enter the First Number : "))
var b = Number(prompt("Enter the Second Number : "))
var c = Number(prompt("Enter the Third Number : "))
var d = Number(prompt("Enter the Fourth Number : "))
var e = Number(prompt("Enter the Fifth Number : "))
if(a>=b && a>=c && a>=d && a>=e)
document.write(`${a} is Greatest`)
else if(b>=c && b>=d && b>=e)
document.write(`${b} is Greatest`)
else if(c>=d && c>=e)
document.write(`${c} is Greatest`)
else if(d>=e)
document.write(`${d} is Greatest`)
else
document.write(`${e} is Greatest`)

// Wap to check whether an entered character is lower case vowel,lower case consonant,upper case vowel,upper case consonant,digit,space or any special character
var ch = prompt("Enter the Character : ")
if(ch.length!=1)
document.write(`'${ch}' is Invalid`)
else{
    if(ch>='a' && ch<='z'){
        if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
        document.write(`'${ch}' is Lower Case Vowel`)
        else
        document.write(`'${ch}' is Lower Case Consonant`)
    }
    else if(ch>='A' && ch<='Z'){
        if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
        document.write(`'${ch}' is Upper Case Vowel`)
        else
        document.write(`'${ch}' is Upper Case Consonant`)
    }
    else if(ch>='0' && ch<='9')
    document.write(`'${ch}' is a Digit`)
    else if(ch==' ')
    document.write(`'${ch}' is Space`)
    else
    document.write(`'${ch}' is a Special Character`)
}


3. //! Switch Case Statement:
/*  used to make a menu based program
syntax:
    switch(expression){
        case constant1:
            ------
            ------
            break
        case constant2:
            ------
            ------
            break
        case constant3:
            ------
            ------
            break
        -
        -
        case constantN:
            ------
            ------
            break
        default:
            ------
            ------
    }
 */

// var num = Number(prompt("Enter the Month Number : "))
// switch (num) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         document.write("Month has 31 Days")
//         break
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         document.write("Month has 30 Days")
//         break
//     case 2:
//         num = Number(prompt("Enter Year Number : "))
//         if (num % 400 == 0 || num % 4 == 0 && num % 100 != 0)
//             document.write("Month has 29 Days")
//         else
//             document.write("Month has 28 Days")
//         break
//     default:
//         document.write("Invalid Choice")
// }

var a = Number(prompt("Enter the First Number : "))
var b = Number(prompt("Enter the Second Number : "))
var ch = prompt("Press + for Addition\nPress - for Subtraction\nPress * for Multiplication\nPress / for Division\nPress % for Remainder\nPress ** for Power\nEnter Your Choice : ")
switch (ch) {
    case "+":
        document.write(`${a}  + ${b} = ${a + b}`)
        break
    case "-":
        document.write(`${a}  - ${b} = ${a - b}`)
        break
    case "*":
        document.write(`${a}  * ${b} = ${a * b}`)
        break
    case "/":
        document.write(`${a}  / ${b} = ${a / b}`)
        break
    case "%":
        document.write(`${a}  % ${b} = ${a % b}`)
        break
    case "**":
        document.write(`${a}  ** ${b} = ${a ** b}`)
        break
    default:
        document.write("Invalid Choice")
}



/*
Iteration Statements or Loops:
used to iterate or repeat number of statements n times
*/

1  //!  for loop
/* use when we know number of iterations
syntax:

    for(Initialization;condition;updation){
        -----------
        -----------
        number of statements
        -----------
        -----------
    }
 */

for(var i=1;i<=10;i++){
    console.log(`Hello World ${i}`)
}

for(var i=10;i>=1;i--){
    console.log(`Hello World ${i}`)
}

for(var i=10;i;i--){
    console.log(`Hello World ${i}`)
}

for(var i=1;i<=10;++i){
    console.log(`Hello World ${i}`)
}

for (var i = 1; i <= 10; i = ++i) {
    console.log(`Hello World ${i}`)
}


for (var i = 1; i <= 10; i++);
{
    console.log(`Hello World ${i}`)
}

// let i = 1;
// for (;;)
// {
//     if(i>10)
//     break
//     console.log(`Hello World ${i}`)
//     i++
// }

for(var i=1;i<=10;i++){
    if(i%2==0)
    continue
    console.log(`Hello World ${i}`)
}

var num = Number(prompt("Enter the Number : "))
for (let i = 1; i <= 10; i++) {
    document.write(`${num} * ${i} = ${num*i}<br>`)
}

var start = Number(prompt("Enter the Range\nStart From : "))
var end = Number(prompt("To : "))
var sum = 0
for(let i=start;i<=end;i++){
    sum = sum+i
}
document.write(`sum of Numbers from ${start} to ${end} = ${sum}`)

/*
for Loop Questions:
1. WAP to print sum of Even and Odd Numbers in specific Range
2. WAP to print factorial of any specific number
3. WAP to check whether a number is perfect number or not
*/


// WAP to check whether a number is prime number or not
var num = Number(prompt("Enter the Number : "))
var flag = false
for(let i=2;i<=num**0.5;i++){
    if(num%i==0){
        flag = true
        break
    }
}

2. //! while Loop:
/* used when we does not have a fix idea of number of iterations
syntax:
    Initialization
    while(condition){
        -----
        -----
        number of statements
        -----
        -----
        updation
    }
 */

// let i = 1
// while(i<=10){
//     console.log(`Hello World ${i}`)
//     i++
// }


//fibonacci Series: 0   1   1   2   3   5   8   13  21  34  .....
var num = Number(prompt("Enter the Last Term Range : "))
var a = 0
var b = 1
var sum = a+b
document.write(`${a} ${b} `)
while(sum<=num){
    document.write(`${sum} `)
    a = b
    b = sum
    sum = a+b
}

if(flag==false && num>=2)
document.write(`${num} is Prime`)
else
document.write(`${num} is not Prime`)


/*
num = 100
a   =   0   1   1   2   3   5   8   13  21  34  55   
b   =   1   1   2   3   5   8   13  21  34  55  89
sum =   1   2   3   5   8   13  21  34  55  89  144
OP:0  1 1   2   3   5   8   13  21  34  55  89
 */

var num = Number(prompt("Enter the Number : "))
var sum = 0
while(num!=0){          //14582  1458   145     14      1       0
    let r = num%10      //2      8      5       4       1
    sum = sum+r         //0+2=2  2+8=10 10+5=15 15+4=19 19+1=20
    num = parseInt(num/10)//1458 145    14      1       0
}
document.write(`sum = ${sum}`)


*
while Loop Questions:
1. WAP to calculate sum of even and odd digits of a specific number
2. WAP to count even and odd digits in a number
3. WAP to check whether a number is NEON number or not
    (1,9)
4. WAP to check whether a number is Armstrong number or not
    (1,153,370,371,407)
5. WAP to check whether a number is Palindrome Number or not
    (121,1234321)
6. WAP to check whether a number is Magical Number or not
    (81,1458,1729)
 */



//  WAP to reverse a number
var num = parseInt(prompt("Enter the Number : "))
var rev = 0
while (num != 0) {          //1234      123         12          1               0          
    let r = num % 10        //4         3           2           1
    rev = rev * 10 + r      //0*10+4=4  4*10+3=43   43*10+2=432 432*10+1=4321
    num = parseInt(num / 10)//123       12          1           0
}
document.write(`Reverse = ${rev}`)


3. //! do while Loop:
/* used when we have to execute number of statements atleast one
time whether condition is false

syntax:
Initialization
do
{
    ------
    ------
    number of Statements
    ------
    ------
    updation
}while(condition);
 */

// let i = 1
// do{
//     console.log(`Hello World ${i}`)
//     i++
// }while(i<=10)


do {
    var a = Number(prompt("Enter the First Number : "))
    var b = Number(prompt("Enter the Second Number : "))
    var ch = prompt("Press + for Addition\nPress - for Subtraction\nPress * for Multiplication\nPress / for Division\nPress % for Remainder\nPress ** for Power\nEnter Your Choice : ")
    switch (ch) {
        case "+":
           alert(`${a} + ${b} = ${a + b}`)
            break
        case "-":
           alert(`${a} - ${b} = ${a - b}`)
            break
        case "*":
           alert(`${a} * ${b} = ${a * b}`)
            break
        case "/":
           alert(`${a} / ${b} = ${a / b}`)
            break
        case "%":
           alert(`${a} % ${b} = ${a % b}`)
            break
        case "**":
           alert(`${a} ** ${b} = ${a ** b}`)
            break
        default:
           alert("Invalid Choice")
    }
    ch = prompt("Press n to Exit\nPress any Other Key to Continue : ")
} while (ch != 'n')

4. //! Nested loops:
// Loops within Loops:


for (let num = 1; num <= 20; num++) {
    document.write(`Table of ${num} is<br>`)
    for (let i = 1; i <= 10; i++) {
        document.write(`${num} * ${i} = ${num * i}<br>`);
    }
}


//2. WAP to print and count all palindrome numbers in a range


// WAP to print  all perfect numbers(6,28,496,8128) (6-> sum>=1+2+3=6  divisor of 6=>1,2,3  num==sum)
let nums = Number(prompt("Enter number: "));
let sums = 0;
for(let i = 1; i <= nums/2; i++){
    if(nums % i == 0){
        sums = sum + i;
    }
}
if(nums == sums){
    console.log(`${nums} is perfect number`);
}else{
    console.log(`${nums} is not perfect number`);
}



//WAP to print and count all armstrong numbers(153,370,371,407) 
// 153-> 1*1*1 + 5*5*5 + 3*3*3 = 153
var start = Number(prompt("Enter the Range\nStart From : "))
var end = Number(prompt("To : "))

for (let i = start; i <= end; i++) {
    // let d = num.toString().length
    let d = 0 
    let num = i
    while (num != 0) {
        d++
        num = parseInt(num / 10)
    }
    num = i
    let sum = 0
    while(num!=0){
        let r = num%10
        sum = sum+r**d
        num = parseInt(num/10)
    }
    if(sum==i)
    document.write(`${i}<br>`)
}


// WAP to print all magical Numbers (81,1458,1729)
for(let i = 1;i<=2000;i++){
        let sum = 0
        let num = i                 //1458
        while(num!=0){              //1458  145     14      1       0
            let r = num%10          //8     5       4       1
            sum = sum+r             //0+8=8 8+5=13  13+4=17 17+1=18
            num = parseInt(num/10)  //145   14      1       0
        }
        let rev = 0
        num = sum                   //18        
        while(num!=0){              //18        1           0
            let r = num%10          //8         1
            rev = rev*10+r          //0*10+8=8  8*10+1=81
            num = parseInt(num/10)  //1         0
        }
        if(sum*rev===i)
        console.log(i)
    }



/*
Pattern
*****
*****
*****
*****
*****
*/

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++){
        document.write("*")
    }
    document.write("<br>")
}

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++){
        process.stdout.write("*")
    }
    console.log()
}



/*
*
**
***
****
*****
*/

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++){
        process.stdout.write("*")
    }
    console.log()
}
