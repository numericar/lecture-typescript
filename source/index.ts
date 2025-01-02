const button = document.getElementById("button") as HTMLButtonElement;
const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;

function add(a: number, b: number): number {
    return a + b;
}

if (button) {
    button.addEventListener("click", () => {
        const result = add(Number(input1.value), Number(input2.value));
        console.log(result);
    });
}