"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a = 5;
const b_1 = require("./b");
class A {
    constructor() {
        console.log("Constructor A!");
    }
    getMe(b = 1) {
        return "hello ${b}";
    }
}
new b_1.B();
new A();
var c = "Deegii";
c = '5';
//# sourceMappingURL=app.js.map