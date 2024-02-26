document.getElementById("demo").innerHTML = "my first demo";

function myfunction() {
    document.getElementById('heading').innerHTML = "hello java";
}


function myfunction2() {
    document.getElementById('demo2').innerHTML = "demo 2";
}

function myfunction3() {

}

function cars() {
    const car = ["audi", " volvo", "bmw"];

    car[0] = "toyota";
    car.push("honda");
    document.getElementById('cars_print').innerHTML = car;
}


// operator page



// objects
function Object_call() {

    const student = {
        f_Name: "ck",
        l_name: "patel",
        age: 23,
        color: "white"
    };

    document.getElementById('object').innerHTML = "name " + student.f_Name + student.l_name + " age " + student.age + " color " + student.color;
}



let x = myfunction(4, 3);
// document.getElementById('function_ans').innerHTML = x;
console.log();

function myfunction(a, b) {
    return a * b;
}
