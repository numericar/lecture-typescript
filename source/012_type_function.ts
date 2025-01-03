const add: Function = (a: number, b:number): number => {
    return a + b;
}
add(5, 5);

function sub(a: number, b: number, cb: (num: number) => void): void {
    const result = a + b;

    cb(result);
}