class Person{
    private _firstName: string ='Default';
    enumerable: boolean = true;
    configurable: boolean = true;
    get firstName(): string{
        return this._firstName;
    }
    set firstName(value: string){
        this._firstName = value.toUpperCase();
    }
}

var person = new Person();
person.firstName = "Asaad";
console.log(person.firstName);