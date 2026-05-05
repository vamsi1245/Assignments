//normal function:
function normalFunction(): number {
    return Math.random();
}
console.log(normalFunction());

//async function to generate random number with promise (always i want the number > 0.5)
async function asyncFunction(): Promise<string> {

    return new Promise((resolve, reject) => {
        const random = Math.random();
        if (random > 0.5) {
            resolve(`Random number   ${random} is generated and it is greater than 0.5. `);
        }
        else {
            reject(`'Random number   ${random} is generated, But Unfortunately, it is less than 0.5.`)
        }
    });
}

//async function to generate random number with promise and timeout (always i want the number > 0.5)
async function asyncFuntionTimeout(): Promise<string> {
    return new Promise((resolve, reject) => {

        const random = Math.random();
        if (random > 0.5) {
            resolve(`Random number   ${random} is generated and it is greater than 0.5. `);
        }
        else {
            reject(`'Random number   ${random} is generated, But Unfortunately, it is less than 0.5.`)
        }
    });
}

//Calling the asynchronous functions. 
let value = await asyncFuntionTimeout();
console.log(value);