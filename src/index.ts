interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}
function getType(data: User|Admin):string{
    return data.type
}
let userData:User={
    type:'user',
    name:"Gagan",
    age:19,
    occupation:"Student"
}

let adminData:Admin={
    type:"admin",
    name:"Masai",
    age:3,
    role:"School"
}

console.log(getType(userData));
console.log(getType(adminData));
