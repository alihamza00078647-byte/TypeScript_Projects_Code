// let name : string = "ALI";
// console.log(name);


// Force Type Insertion
const response:any = "42";
// console.log(response)

// Wrap to string or any DT suggests or other stuff
const numericLen:number = (response as string).length; 
// console.log(numericLen);

type Book = {
    name: string
}

// if data is in String and we want in object
const StringBook = '{"name": "Who choose me"}';
const bookObject = JSON.parse(StringBook) as Book; 
// console.log(bookObject);


// for DOM Elements
const element = document.querySelector('Element') as HTMLInputElement;




/* any vs unknown */
let value:any = "Chai";
value = [1, 2, 3];
value = 12;
value = 15.7;
value.toUpperCase();  // Valid but error at run time


let newValue:unknown = "Chai";
newValue = [1, 2, 3];
newValue = 12;
newValue = 15.7;
newValue.toUpperCase();  // Catch error immediately

// if data is Valid then execute this.
if (typeof newValue === "string") {
    newValue.toUpperCase();
}


/* handle try and catch data types */


try {
    
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message)
    }
    // If condition not match
    console.log("Error! ", error);
}


/**
 * We Have a variable:unknown
 * Then Data is fill with "Mera Code hai"
 * To insert that data into another variable we use type insertion to forcefully insert data
 * So, that We get all method of that Methods (string, integer, etc).
 */


const data:unknown = "Chai Or data";
const str:string  = data as string;


/**
 * "Never" DataType 
 */


type Role = "admin" | "user" ;
// type Role = "admin" | "user" | "superadmin";

const redirectBasedOnRole = (role: Role):void => {

    if (role === "admin") {
        console.log("Home Page");
        return;
    }

    if (role === "user") {
        console.log("Admin Dashboard");
        return;
    }
    // role will show a type "never"
    // role;
    role;
}



// Loop that never returns like Node.js (Event Loop)
const neverReturn = ():never => {
    while(true) {

    }
}
