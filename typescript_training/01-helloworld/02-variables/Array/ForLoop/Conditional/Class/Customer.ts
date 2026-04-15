class Customer {

    FirstName: string = ""; 
    LastName: string = ""; 

    constructor(theFirst: string, theLast: string){
        this.FirstName = theFirst; 
        this.LastName = theLast; 
    }
}
// lets create an instance 
let myCustomer = new Customer( "Anup", "Shrestha"); 

// myCustomer.FirstName = "Anup";
// myCustomer.LastName = "Shrestha";

console.log(myCustomer.FirstName); 
console.log(myCustomer.LastName); 

