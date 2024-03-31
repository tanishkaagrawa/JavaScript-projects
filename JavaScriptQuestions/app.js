//1. sort the numbers
// const sortAscending = (arr) =>  {
//     return arr.sort((a,b) => a-b);
// };

// const sortDecending = (arr) =>  {
//     return arr.sort((a,b) => b-a);
// };

// console.log(sortAscending([5,7,10,9]));
// console.log(sortDecending([5,7,10,9]));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//2. Check Triangle Type

// const checkTriangle = (a,b,c) =>{
//     if(a==b && b==c){
//         return "equilateral triangle";
//     }
//     else if(a==b || b==c || a==c){
//         return "isosceles triangle";
//     }
//     else{
//         return "scalene triangle";
//     }
// }
// console.log(checkTriangle(3,3,3));
// console.log(checkTriangle(3,5,9));
// console.log(checkTriangle(3,12,3));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//CountChar
// const countChar = (word , char)=>{
//     let count = 0;
//     word = word.toLowerCase();
//     char = char.toLowerCase();
//     for(let i=0; i<word.length ; i++){
//         if(char==word[i]){
//             count++;
//         }
//     }
//     return count;
// };
// console.log(countChar("MissIssippi" , "p")); //output is 4

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
