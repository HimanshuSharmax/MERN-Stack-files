/*
    String: collection of Characters or Sequence of Characters or
            array of Characters
            eg. name,email,password etc

            string is a immutable data type
            index start with 0
 */

//String Constant
var a = 'Ducat Education Noida'
var b = "Ducat Education Noida"
var c = `
            Ducat
            Education
            Noida
        `
console.log(a,typeof(a))
console.log(b,typeof(b))
console.log(c,typeof(c))


//String using for Loops
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}

//string using while loop
let i = 0
while (i < a.length) {
    console.log(a[i])
    i++
}

//string using do while loop
let j = 0
do{
    console.log(a[j])
    j++
}while (j < a.length) 

//for in loop  : index
for(const i in a){
    console.log(a[i])
}

//for of loop : value
for(const i of a){
    console.log(i)
}

//!string methods ->
1 // charAt() return character at any specific index
console.log(a[0],a.charAt(0))
console.log(a[1],a.charAt(1))
console.log(a[2],a.charAt(2))
console.log(a[3],a.charAt(3))
console.log(a[4],a.charAt(4))


2 // charCodeAt(): return Unicode of first character of String if no argument is provided,
  //    and if argument is provided, then it return Unicode of that particular character

// console.log(a.charCodeAt())
for(let i in a){
    console.log(`${a[i]} = ${a.charCodeAt(i)}`)
}

/*
A=65    a=97    0=48
B=66    b=98    1=49
-
Z=90    z=122   9=57
*/


3 // fromCharCode(): convert a Unicode into Character

for(let i=1;i<=10000;i++){
    document.write(`${i} = ${String.fromCharCode(i)} `)
}

/*
indexOf()     :   return first index of any substring in string
                  and return -1 if item not found in string
lastIndexOf() :   return last index of any substring in string
                  and return -1 if item not found in string
search()      :   return first index of any substring in string
                  and return -1 if item not found in string
includes()    :   check whether a substring is exist in string or not
                  it return true of false
*/


var a = "Javascript is a high level scripting language"
console.log(a.indexOf("e"))
console.log(a.lastIndexOf("e"))
console.log(a.search("e"))
console.log(a.includes("e"))

console.log(a.indexOf("script"))
console.log(a.lastIndexOf("script"))
console.log(a.search("script"))
console.log(a.includes("script"))

console.log(a.indexOf("php"))
console.log(a.lastIndexOf("php"))
console.log(a.search("php"))
console.log(a.includes("php"))


// Copy a string into another ->
var b = a
console.log(`Copied String is ${b}`)


// concat() : concat one or more strings in a string
var a = "Ducat"
var b = "Education"
var c = "Noida"
var d = a+b+c
var e = a.concat(b,c)
console.log(d)
console.log(e)


/*
startsWith() : check whether a string start with specific
               sub string or not
endsWith()   : check whether a string end with specific sub
               string or not
*/

var ch = prompt("Enter the String : ")
if (ch.startsWith("www"))
    document.write(`'${ch}' is a Domain Name`)
else if (ch.endsWith("@gmail.com"))
    document.write(`'${ch}' is a Gmail Address`)
else
    document.write(`'${ch}' is a Normal Message`)


//toUpperCase()
//toLocaleUpperCase()
//toLowerCase()
//toLocaleLowerCase()
console.log(a.toLowerCase())
console.log(a.toLocaleLowerCase())
console.log(a.toUpperCase())
console.log(a.toLocaleUpperCase())


//substr() return a substring from pos to number of characters
//substring() return a substring from pos to pos  characters
//slice()
console.log(a)
console.log(a.substr(5,20))
console.log(a.substring(5,20))
console.log(a.slice(5,20))
console.log(a.slice(20))
console.log(a.slice(-20))


/repeat()  :   create number of copies of a string
console.log(a.repeat(100))


//replace()
//replaceAll()
console.log(a)
console.log(a.replace(" ","-"))
console.log(a.replaceAll(" ","-"))


//split()
console.log(a.split())
console.log(a.split(" "))


//trim() remove all leading white space characters from string from both side
//trimStart()remove all leading white space characters from string from left side
//trimEnd()remove all leading white space characters from string from right side

var a = "          Ducat Education Noida     "
console.log(a.length)
console.log(a.trim().length)
console.log(a.trimStart().length)
console.log(a.trimEnd().length)


/*
localeCompare() : compare two strings
                    return 0 if both string are same
                    return 1 if first string comes last in
                    alphabetical order
                    return -1 if first string comes firt in
                    alphabetical order
*/
var a = "Aman"
var b = "Dhruv"
console.log(a.localeCompare(b))
console.log(b.localeCompare(a))
console.log(b.localeCompare(b))
