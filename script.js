// ARRAYS AND LOOP

// Assignment # 17-20 JAVASCRIPT :

// 1. Declare and initialize an empty multidimensional array. (Array of arrays) ?

let multiArray = [[]];
document.write(`<h1>1)Empty multidimensional array</h1>let multiArray = [[]];<br>`);
// 2. Declare and initialize a multidimensional array representing the following matrix: 

let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

document.write(`<h1>2) Multidimensional Array</h1>`);
matrix.forEach(row => {
    document.write(`${row.join(' ')}<br>`);
});

// 3. Write a program to print numeric counting from 1 to 10.  

let numericCounting = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

document.write(`<h1>3) Print Numeric Counting<br></h1>`);

for (let i = 0; i < numericCounting.length; i++) {
    document.write(`<p style="font-size:1.5rem";"line-height:0.3rem">${numericCounting[i]}</p>`); // Print each number with a line break
}

// 4.  Write a program to print multiplication table of any number using for loop. Table number & length should be 
// taken as an input from user.  

let userInput =prompt(`which table you want to print?`);
let lenght=prompt(`Enter lenght of multiplication table?`);

document.write(`<h2>4)Multiplication table of ${userInput}</h2>`);
document.write(`<h3>Lenght=${lenght}</h3>`);
for(i=1 ; i<=lenght ; i++){
    document.write(`${userInput}x${i}=${userInput*i}<br>`);
}

// 5. Write a program to print items of the following array 
// using for loop: 
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

let fruits=["Apple","Banana","Mango","Orange","Strawberry"];

document.write(`<h2>5)Array using for loop</h2>`);

for(i=0 ; i<fruits.length ; i++){
    document.write(`<h4>=>Element at index ${i} is ${fruits[i]}.</h4>`);
}

// 6. Generate the following series in your browser. See example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write(`<h1>6) Series</h1>`);

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
document.write(`<h2>a) Counting:</h2>`);
for (let i = 1; i <= 15; i++) {
    document.write(`${i},`);}


// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
    document.write(`<h2>b) Reverse Counting:</h2>`);
    for (let i = 15; i>=1; i--) {
        document.write(`${i},`);}

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20  

document.write(`<h2>c)Even:</h2>`);
for (let i = 0; i <= 20; i += 2) {
    document.write(`${i},`);
 } 


// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 

document.write(`<h2>c)Odd:</h2>`);
for (let i = 1; i <= 20; i += 2) {
    document.write(`${i},`);
 } 

//  e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write(`<h2>c)Series:</h2>`);

let series=["2k","4k","8k","10k","12k","14k","16k","18k","20k"];

for (let i = 0; i <series.length; i++) {
    document.write(`${series[i]},`);
 } 


//  7. You have an array 
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an 
// array. 
// After searching, prompt the user whether the given item is 
// found in the list or not. 

let items =["cake", "apple pie", "cookie", "chips", "patties"];
let userchoice =prompt("Welcome to ABC Bakery! What do you want sir/ma'am?");

document.write(`<h1>7) Bakery items availability mesaage</h1>`)

userchoice = userchoice.toLowerCase();
let index = items.map(item => item.toLowerCase()).indexOf(userchoice);
if(index!==-1){
    document.write(`<p style="font-size:20px";"><b>Answer : </b>${userchoice} is <b>available</b> at index ${index} in our bakery.</p> `);
}
else{
    document.write(`We are sorry! ${userchoice} is <b>not available</b> in our bakery.`);

}

// 8. Write a program to identify the largest number in the 
// given array. 
// A = [24, 53, 78, 91, 12].

document.write(`<h1>8)Largest Number in the Array</h1>`);
let num =["24","53","78","91","12"];
document.write(`<h4>ARRAY ITEMS : ${num}</h4>`);
let largestNum = num[0];

for( let i=0; i<num.length ;  i++){
    if(num[i]>largestNum){
        largestNum=num[i];
    }
}
document.write(`<B>Answer :</b>The <b>largest</b> number in the array is: ${largestNum}.`);


// 9. Write a program to identify the smallest number in the 
// given array. 
// A = [24, 53, 78, 91, 12]

document.write(`<h1>9)Smallest Number in the Array</h1>`);
let num1 =["24","53","78","91","12"];
document.write(`<h4>ARRAY ITEMS : ${num}</h4>`);
let largestNum1 = num1[0];

for( let i=0; i<num1.length ;  i++){
    if(num1[i]<largestNum1){
        largestNum1=num1[i];
    }
}
document.write(`<B>Answer :</b>The ,b>smallest </b>number in the array is: ${largestNum1}.`);


// 10. Write a program to print multiples of 5 ranging 1 to 
// 100.

document.write(`<h1>10)Multiples of 5 ranging 1 to 100.</h1>`);

for(i=1 ; i<=20 ; i++){
         document.write(`<b>${5*i}, </b>`);
     }
    









