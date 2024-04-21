const helloWorld = (user) => {
    return("Hello! user name is " + user);
}

let message = "ES6 modules"

class test {
    constructor () {
        console.log("constructor method")
    }
}


export { helloWorld, message, test } 

export default function (){
    console.log("default function")
}