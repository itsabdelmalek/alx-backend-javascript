interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const [student1, student2] = [
    {
        firstName: "Agent",
        lastName: "Smith",
        age: 33,
        location: "Matrix"
    },
    {
        firstName: "Monkey",
        lastName: "D. Luffy",
        age: 14,
        location: "Grand Line"
    }
]

const studentsList : Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const t_able : HTMLTableElement = document.createElement("table");
const t_head : HTMLTableSectionElement = document.createElement("thead");
const t_body : HTMLTableSectionElement = document.createElement("tbody");
const rowHead: HTMLTableRowElement = t_head.insertRow(0);
const firstheadcell : HTMLTableCellElement = rowHead.insertCell(0);
const secondheadcell: HTMLTableCellElement = rowHead.insertCell(1);

firstheadcell.innerHTML = "firstName";
secondheadcell.innerHTML = "location";
t_able.append(t_head);


studentsList.forEach(student => {
    const row : HTMLTableRowElement = t_body.insertRow(0);
    const first_Cell : HTMLTableCellElement = row.insertCell(0);
    const second_Cell : HTMLTableCellElement = row.insertCell(1);

    first_Cell.innerHTML = student.firstName;
    second_Cell.innerHTML = student.location;
});

t_able.append(t_body);
body.append(t_able);
