// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
//
// let g = gen();
// "Generator { }"

function* idMaker(){
    let index = 0;
    while(index != 3) {
        yield index++;
        console.log('add 1');
    }

    return true;
}

let gen = idMaker(); // "Generator { }"

// console.log(gen.return());

console.log(gen.next());
// 0
console.log(gen.next());
// 1
console.log(gen.next());
// 2
console.log(gen.next());
// ...
