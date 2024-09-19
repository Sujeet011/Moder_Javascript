
// var vs let vs const

// Scope Comparison

function testVar() {
    if (true) {
        var x = 10;
    }
    console.log(x);
}

function testLet() {
    if (true) {
        let y = 20;
    }
    console.log(y); // ReferenceError: y is not defined
}

testVar();
testLet();

console.log("--------------------------------")

// Constant Variables

function createConstantArray() {
    const arr = [1, 2, 3];
    arr.push(4);
    console.log(arr);
}

createConstantArray();

//You cannot reassign a const variable, but you can modify the contents of an object or array created with const.


// Temporal Dead Zone (TDZ)

function demonstrateTDZ() {
    console.log(a);
    var a = 10;

    let b = 20;
    console.log(b);
}

demonstrateTDZ();

// Accessing a let variable before it's declared results in a ReferenceError due to the TDZ. In contrast, var variables are hoisted and initialized with undefined, so they can be logged before the declaration.

// Re-declaration of Variables

function testRedeclaration() {
    var x = 5;
    var x = 10; // No error with var
    console.log(x);

    let y = 20;
    // Uncommenting the next line will cause an error because let doesn't allow re-declaration.

    const z = 40;
    // Uncommenting the next line will cause an error because const doesn't allow re-declaration.

}

testRedeclaration();


// Block Scope and Loop (var vs let)

function loopWithVarAndLet() {
    // Using var
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(`var: ${i}`), 100);
    }

    // Using let
    for (let j = 0; j < 3; j++) {
        setTimeout(() => console.log(`let: ${j}`), 100);
    }
}

loopWithVarAndLet();

// When using var, the variable i is hoisted and shared across all iterations of the loop. By the time the setTimeout executes, i has the final value of 3, and this value is printed three times.
// When using let, the variable j is block-scoped and unique to each iteration of the loop. Therefore, the correct value of j is logged for each iteration (0, 1, and 2).