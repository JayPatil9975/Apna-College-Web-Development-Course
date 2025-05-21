// console.log("hello world");
// let a = 5;
// let b = 10;
// console.log("sum is : ",a+b);
// if(a<b){
//     console.log(b);
// }
// let myname = prompt("enter name");
// alert(myname);
// const max = prompt("Enter the Maximum Number : ");
// const ran = Math.floor((Math.random()*max) +1);

// let guess = prompt("Enter the Guess Number : ");
// while(true){
//     if(guess=='quit'){
//         break;
//     }
//     if(guess == ran ){
//         alert(`your Guess is Correct. The Guess Number is : ${ran}` );
//         break;
//     }
//     else if(guess<ran){

//         guess = prompt("your enter very small Number");
//     }
//     else{

//         guess = prompt("your enter very big Number");

//     }
// }


// const car = {
//     aman:{
//         name: "audi",
//         type : "Twowheller",
//     },
//     ama:{
//         name: "audi",
//         type : "Twowheller",
//     },
//     am:{
//         name: "audi",
//         type : "Twowheller",
//     }

// }
// console.log(car);

// let arr = [1, 2, 3, 4, 5];
// let newarr = [];

// function num(arr,newarr, n) {
    
//     for (let i = 0; i < arr.length; i++) {
        
//         if (arr[i] > n) {
//             newarr[i] = arr[i];

//         }
        

//     }
//     newarr = newarr.filter(item => item !== undefined);

//     return newarr;
// }
// let arr1 = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// let num1 = 5;

// //elements larger than a number num
// function getElements(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr1[i] > num1) {
//             console.log(arr1[i]); 
//         }
//     }
// }

// let str = "aabbccddrgg";
// let ans="";
// let currchar;
// function unique(str){
//     for(let i=0;i<str.length;i++){
//         currchar=str[i];
//         if(ans.indexOf(currchar)==-1){
//             ans+=currchar;
//         }
//     }
//     return ans;

// }
// let city =[];
// let len=0;

// function inp(city){
//     let number = prompt("Enter number of city you want to enter :");
//     for(let i=0;i<number;i++){
//         city[i]=prompt("city name :")
//     }
    
//     for(let i=0;i<number;i++){
        
//         if(city[i].length>len){
//             len = city[i].length;
//         }
//     }
//     for(let i=0;i,city.length;i++){
//         if(city[i].length==len){
//             return city[i];
//         }
//     }
    
// }
// let arr = [1,2,3,4,5];
// let avg=0;
// let arrayAvg = (arr) =>{
//     for(let i=0;i<arr.length;i++){
//         avg +=arr[i];
//     }
//     avg = avg/arr.length;
//     return avg;

// }
// const object = {
//     message: 'Hello, World!',
//     logMessage() {
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage, 1000);
// let length = 4;
// function callback() {
//     console.log(this.length);
// }

// const object = {
//     length: 5,
//     method(callback) {
//         callback();
//     },
// };

// object.method(callback, 1, 2);
// const obj = {
//     value: 42,
//     arrow :function() {
//         console.log(this);
//     }
// };

// obj.arrow();

const sum = (a,b)=> a + b;
console.log(sum(2,2));





