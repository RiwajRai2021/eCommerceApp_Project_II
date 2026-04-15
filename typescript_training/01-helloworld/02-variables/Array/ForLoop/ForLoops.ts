let reviewz: number[] = [5, 5, 4.5, 1, 3]; 

let total: number = 0; 

for (let i = 0; i <reviewz.length; i++){
    console.log(reviewz[i]); 
    total += reviewz[i];
} 
let average: number = total/ reviewz.length;
console.log("Review average = " + average); 

