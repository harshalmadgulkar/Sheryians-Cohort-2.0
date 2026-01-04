class Bottle {
    constructor() {
        this.color = "blue"
        this.material = "plastic"
        this.price = 132
    }

    fill() {
        console.log(`${this.color} bottle is filled.`);
    }
}
// console.log(Bottle);

let B1 = new Bottle();
console.log(B1);
console.log(B1.color);
B1.fill()


// let B2 = {
//     color: "blue",
//     material: "plastic",
//     price: 132
// }
// console.log(B2);
