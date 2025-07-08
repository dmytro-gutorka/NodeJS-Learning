function mergeObjects<T extends object, U extends object>(obj1: T, obj: U): T & U {
    return { ...obj1, ...obj }
}
//
// const merged = mergeObjects({ a: 1 }, { b: 2 })
//
// console.log(merged)
//
//
// function mergeObjects1(a: object, b: object): object {
//     return { ...a, ...b }
// }
//
// const merged1 = mergeObjects1({ a: 1 }, { b: 2 })
//
// console.log(merged1)
//
//


const product = { id: 1, name: "Laptop" };
const user = { id: 1, username: "john_doe" };

const mergedProductUser = mergeObjects(product, user);

