// Lecture is about interfaces, classes with interfaces, limits of type and Union and Intersections, Literal Types,
//  and readonly property


type ChaiOrder = {
    type:string; 
    sugar:number; 
    strong:boolean
}

function makeChai(order:{type:string; sugar:number; strong:boolean}):void {
    console.log(order);
}

function serveChai(order:{type:string; sugar:number; strong:boolean}):void {
    console.log(order);
}


/**
 * This Error will occur when we use type with classes later when type changes (at production)
 * 
 * MasalaChai' is declared but never used.ts(6196)
Class 'MasalaChai' incorrectly implements interface 'TeaRepice'.
Type 'MasalaChai' is missing the following properties from type 'TeaRepice': water, milkts(2420)
*/

type TeaRepice = {
    water: number;
    milk: number
}

// Object is basic Ok

class MasalaChai implements TeaRepice{
    water = 20;
    milk = 12;
}




/**
 * This Error occurs when we implement same thing on Customize methods 
 * 
 * A class can only implement an object type or intersection of object types with statically known members.
*/
// Literal types
// type Cupsize =  "small" | "large";
interface Cupsize {
    size: "small" | "large";
}  

// Now Error will gone due to interface 
// So, for classes we interface instead of type object
class Chai implements Cupsize {
    size: "small" | "large" = "small";
}


/**
 * We also Can't use that Directly like this 
 */

type response = {ok: true} | {ok: false};

class Res implements response {

}


// Union in TS

type NewChai = "Masala" | "Lemon" | "Elaichi";

function OrderOneMoreChai(t: NewChai) {
    console.log(t);
}



// Intersection in TS.
type rockChai = {teaLeaves: number}
type pepperChai = {spoon: number}

// Mix all above data
type NewChaiGen =  rockChai & pepperChai;

// No value exists in scope for the shorthand property 'teaLeaves'. Either declare one or provide an initializer
const cup: NewChaiGen = {
    teaLeaves = 2, // error to fix it make it 
    spoon: 3;
}

// Fix the above error
type User = {
    username: string,
    bio? : string
}

// use for optional values also for read only values
const u1:User = {username: "Waqas"};
const u2:User = {username: "waqar", bio: "This is Bio"};



/**
 * Read Only values once it assigns cannot reassign it.
 */


type Config = {
    readonly AppName : string,
    version: number
}


const cfg: Config = {
    AppName : "AppNode",
    version : 1
}

// Can't Assign due to readonly
cfg.AppName = "NewName"