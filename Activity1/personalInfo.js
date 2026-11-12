const PersonalInfo ={
    name: "Umipig, Irish Mae F.",
    idNumber: "2026-6638",
    YearLevel: "2nd Year",
    Program: "Information Technology"
}

const course1 = {
    subject: "Web Development",
    units: 3,
    grade: 1.75,
}

const course2 = {
    subject: "Living in the IT Era",
    units: 3,
    grade: 1.75,
};

const course3 = {
    subject: "Networking 1 ",
    units: 3,
    grade: 1.75,
}

const course4 = {
    subject: "Purposive Communication",
    units: 3,
    grade: 1.25,
};

if (course1.grade == 1.75) {
    course1.letterGrade = "B";
} else if (course1.grade == 1.50) {
    course1.letterGrade = "B";
} else if (course1.grade == 1.25) {
    course1.letterGrade = "A";
} else {
    course1.letterGrade = "F";
}

if (course2.grade == 1.75) {
    course2.letterGrade = "B";
} else if (course2.grade == 1.50) {
    course2.letterGrade = "B";
} else if (course2.grade == 1.25) {
    course2.letterGrade = "A";
} else {
    course2.letterGrade = "F";
}

if (course3.grade == 1.75) {
    course3.letterGrade = "B";
} else if (course3.grade == 1.50) {
    course3.letterGrade = "B";
} else if (course3.grade == 1.25) {
    course3.letterGrade = "A";
} else {
    course3.letterGrade = "F";
}
if (course4.grade == 1.75) {
    course4.letterGrade = "B";
} else if (course4.grade == 1.50) {
    course4.letterGrade = "B";
} else if (course4.grade == 1.25) {
    course4.letterGrade = "A";
} else {
    course4.letterGrade = "F";
}

let totalUnits = course1.units + course2.units + course3.units + course4.units;

let gwa = 0;

let totalGrades = (course1.grade * course1.units) +
                  (course2.grade * course2.units) +
                  (course3.grade * course3.units) +
                  (course4.grade * course4.units);

if (totalUnits > 0) {
    gwa = totalGrades / totalUnits;
}else {
    console.log("Total units is zero. Cannot calculate GWA.");
}

console.log("====== Personal Information ======");
console.log("Name: " + PersonalInfo.name);
console.log("ID Number: " + PersonalInfo.idNumber);
console.log("Year Level: " + PersonalInfo.YearLevel);
console.log("Program: " + PersonalInfo.Program);

console.log("====== Course Information ======");
console.log("Course 1: " + course1.subject + " | Units: " + course1.units + " | Grade: " + course1.grade + " | Letter Grade: " + course1.letterGrade);
console.log("Course 2: " + course2.subject + " | Units: " + course2.units + " | Grade: " + course2.grade + " | Letter Grade: " + course2.letterGrade);
console.log("Course 3: " + course3.subject + " | Units: " + course3.units + " | Grade: " + course3.grade + " | Letter Grade: " + course3.letterGrade);
console.log("Course 4: " + course4.subject + " | Units: " + course4.units + " | Grade: " + course4.grade + " | Letter Grade: " + course4.letterGrade);

console.log("====== GWA Calculation ======");
console.log("Total Units: " + totalUnits);
console.log("GWA: " + gwa.toFixed(2));