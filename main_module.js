//import { helloWorld, message as msg, test} from "./library.js";
import * as allFromLibrary from "./library_module.js";
//import {default as def} from "./library.js";
import def from "./library_module.js";



console.log(allFromLibrary.helloWorld("ravi"));
console.log(allFromLibrary.message);
document.body.innerHTML = allFromLibrary.message;

let a = new allFromLibrary.test();
def();