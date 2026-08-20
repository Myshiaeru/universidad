const student = {
    name: "julian",
    age: 20,
    getAge() {
        console.log(this.age);
    }
};

const materias = [
    { name: "DB", teacher: "ing memo" },
    { name: "CD", teacher: "ing sebas" },
    { name: "AC", teacher: "ing diego" }
];

console.log(materias[0].name);
student.getAge();
