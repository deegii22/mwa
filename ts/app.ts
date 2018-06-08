const a = 5;
import { B } from './b'

class A{
    constructor (){
        console.log("Constructor A!");
    }
    getMe(b=1){
        return "hello ${b}"
    }
}

new B();
new A();

var c: string = "Deegii"

c = '5';