

export function handleTimeout() {
    console.log("Time out");
}

export const handlleTimeout2 = () => {
    console.log("Time out ... again");
}

setTimeout(handleTimeout, 2000);
setTimeout(handlleTimeout2, 3000);
setTimeout(() => {
    console.log("More timing out");
}, 4000)


export function greeter(greetFn) {
    greetFn()
}

greeter(() => console.log("Hi"))

const hobbies = ["Sport", "Cooking"];
hobbies.push("Working");
console.log(hobbies);
