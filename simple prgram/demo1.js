let obj = {
    name: "ck",
    role: "desinger",
    company: "ck tech"
}

let demo = [23, 34, 54, 67, 87];

for (const key in obj) {
    console.log(key);
}

for (const element of demo) {
    console.log(element);   
}

let i = 0;
 
while(i <= 5){
    console.log(i);
    i++;
}


const func1 = (x)=>{
    console.log("i am arrow function", + x);
}

func1 (30);
func1 (60);
func1 (70);