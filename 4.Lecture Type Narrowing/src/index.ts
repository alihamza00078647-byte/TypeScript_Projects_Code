// Type Narrowing


function order(msg? :string) {
    if (msg) {    // Exhaustive checks
        return `Serving ${msg}`;
    }
    return `Serving Error Message`;
}



function orderChai(size: 'small' | 'meduim' | 'large' | Number) {
    if (size === 'small') {
        return `Choti Chai`;
    }
    if (size === 'meduim' || size === 'large') { // Exhaustive checks
        return "Thori zyada Chai";
    }
    return `Number of Cups = ${size}`;
}


// Special Case
class firstClassChai{
    serve() {
        return '1st Class Chai';
    }
}

class secondClassChai{
    serve() {
        return '2nd Class Chai';
    }
}

function serveChai(chai: firstClassChai | secondClassChai) {
    if (chai instanceof firstClassChai) {
        return chai.serve()
    }
}


// Custom Types to handle APIs or unexpected behavior
type ChaiTypes = {
    type : string,
    sugar : Number
}

// Validate given Obj
function isChaiOrder(obj: any):obj is ChaiTypes {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    )
} 


// Check if chai order is fall in above category.
function serveOrder(item : ChaiTypes | string) {
    if (isChaiOrder(item)) {
        return `Serving chai ${item.type} with ${item.sugar} Sugar`;
    }
    return `Serving ${item} Service is Not available`;
}


// type is keyword. Define Custom Types
type MasalaChai = {type : 'Masala', spicelevel : number};
type GingerChai = {type : 'Ginger', amout : number};
type ElaichiChai = {type : 'Elaichi', packet : number};


type chai = MasalaChai | GingerChai | ElaichiChai

const makeChai = (order: chai) => {
    switch (order.type) {
        
        case 'Elaichi': 
            return "Elaichi Wali Chai";
            // break 
        case 'Ginger': 
            return "Ginger Wali Chai";
            // break 
        case 'Masala' :
            return 'Masale Wali Chai'
        default : 
            return `Nahi Pata Type ${order}`;
    }
}


// order -> passing parameter (obj, value or anything)
function brew(order: MasalaChai | GingerChai) {
    if ('spicelevel' in order) {    
        // agar hai yeh property order  mein tu bata do like <!==!>
    }
}




// Unknown -> DataType instead of (any) that checks at returns value must have an array.
// function isArrayString(arr : unknown): arr is string[] {} 
