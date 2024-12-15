console.log('Hello World');
class animal {
    constructor(name,legCount,speak) {
        this.name=name;
        this.legCount=legCount;
        this.speak=speak;
    }
    speaks(){
        console.log("HI there "+ this.speak);
    }
    static myType(){
        console.log('Defined for class');
    }
}
// Don't DO like this
// let dog1={
//     name:"dog",
//     legCount:4,
//     speaks:"bow bow"
// }
console.log(animal.myType());
let dog=new animal("dog",4,"bow bow");
dog.speaks();