function add(a: number | string, b: number | string): number | string {
    let result: number | string;

    if (typeof a === "number" && typeof b === "number") {
        result = a + b;
    } else {
        result = `${a}${b}`; 
    }

    return result;
}

const resultA = add(5, 5);
console.log(resultA);

const resultB = add("Hello", "World");
console.log(resultB);