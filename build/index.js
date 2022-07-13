function getType(data) {
    return data.type;
}
let userData = {
    type: 'user',
    name: "Gagan",
    age: 19,
    occupation: "Student"
};
let adminData = {
    type: "admin",
    name: "Masai",
    age: 3,
    role: "School"
};
console.log(getType(userData));
console.log(getType(adminData));
//# sourceMappingURL=index.js.map