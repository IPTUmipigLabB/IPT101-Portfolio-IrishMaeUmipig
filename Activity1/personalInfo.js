
const bsit_students = {
    Student1: {
        name: "Cristine Joy K. Idos",
        idNumber: "2026-6738",
        YearLevel: "2nd Year",
        Program: "Information Technology"
    },
    Student2: {
        name: "Johnson Isimo",
        idNumber: "2026-6582",
        YearLevel: "2nd Year",
        Program: "Information Technology"
    },
    Student3: {
        name: "Mark Angelo M. Javier",
        idNumber: "2026-6941",
        YearLevel: "2nd Year",
        Program: "Information Technology"
    }
};

const enrolled_courses = {
    Student1: {
        course1: { subject: "Web Development", units: 3, grade: 95 },
        course2: { subject: "Database Management", units: 3, grade: 88 },
        course3: { subject: "Mobile App Development", units: 3, grade: 92 },
        course4: { subject: "Integrative Programming", units: 3, grade: 85 }
    },
    Student2: {
        course1: { subject: "Web Development", units: 3, grade: 90 },
        course2: { subject: "Database Management", units: 3, grade: 82 },
        course3: { subject: "Mobile App Development", units: 3, grade: 78 },
        course4: { subject: "Integrative Programming", units: 3, grade: 88 }
    },
    Student3: {
        course1: { subject: "Web Development", units: 3, grade: 85 },
        course2: { subject: "Database Management", units: 3, grade: 80 },
        course3: { subject: "Mobile App Development", units: 3, grade: 75 },
        course4: { subject: "Integrative Programming", units: 3, grade: 90 }
    }
};

if (enrolled_courses.Student1.course1.grade >= 90 && enrolled_courses.Student1.course1.grade <= 100) {
    enrolled_courses.Student1.course1.letterGrade = "A";
} else if (enrolled_courses.Student1.course1.grade >= 85 && enrolled_courses.Student1.course1.grade < 90) {
    enrolled_courses.course1.letterGrade = "B";
} else if (enrolled_courses.course1.grade >= 75 && enrolled_courses.course1.grade < 85) {
    enrolled_courses.course1.letterGrade = "C";
} else {
    enrolled_courses.course1.letterGrade = "F";
}

if (enrolled_courses.Student1.course2.grade >= 90 && enrolled_courses.Student1.course2.grade <= 100) {
    enrolled_courses.Student1.course2.letterGrade = "A";
} else if (enrolled_courses.Student1.course2.grade >= 85 && enrolled_courses.Student1.course2.grade < 90) {
    enrolled_courses.Student1.course2.letterGrade = "B";
} else if (enrolled_courses.Student1.course2.grade >= 75 && enrolled_courses.Student1.course2.grade < 85) {
    enrolled_courses.Student1.course2.letterGrade = "C";
} else {
    enrolled_courses.Student1.course2.letterGrade = "F";
}

if (enrolled_courses.Student1.course3.grade >= 90 && enrolled_courses.Student1.course3.grade <= 100) {
    enrolled_courses.Student1.course3.letterGrade = "A";
} else if (enrolled_courses.Student1.course3.grade >= 85 && enrolled_courses.Student1.course3.grade < 90) {
    enrolled_courses.Student1.course3.letterGrade = "B";
} else if (enrolled_courses.Student1.course3.grade >= 75 && enrolled_courses.Student1.course3.grade < 85) {
    enrolled_courses.Student1.course3.letterGrade = "C";
} else {
    enrolled_courses.Student1.course3.letterGrade = "F";
}

if (enrolled_courses.Student2.course1.grade >= 90 && enrolled_courses.Student2.course1.grade <= 100) {
    enrolled_courses.Student2.course1.letterGrade = "A";
} else if (enrolled_courses.Student2.course1.grade >= 85 && enrolled_courses.Student2.course1.grade < 90) {
    enrolled_courses.Student2.course1.letterGrade = "B";
} else if (enrolled_courses.Student2.course1.grade >= 75 && enrolled_courses.Student2.course1.grade < 85) {
    enrolled_courses.Student2.course1.letterGrade = "C";
} else {
    enrolled_courses.Student2.course1.letterGrade = "F";
}

if (enrolled_courses.Student2.course2.grade >= 90 && enrolled_courses.Student2.course2.grade <= 100) {
    enrolled_courses.Student2.course2.letterGrade = "A";
} else if (enrolled_courses.Student2.course2.grade >= 85 && enrolled_courses.Student2.course2.grade < 90) {
    enrolled_courses.Student2.course2.letterGrade = "B";
} else if (enrolled_courses.Student2.course2.grade >= 75 && enrolled_courses.Student2.course2.grade < 85) {
    enrolled_courses.Student2.course2.letterGrade = "C";
} else {
    enrolled_courses.Student2.course2.letterGrade = "F";
}

if (enrolled_courses.Student2.course3.grade >= 90 && enrolled_courses.Student2.course3.grade <= 100) {
    enrolled_courses.Student2.course3.letterGrade = "A";
} else if (enrolled_courses.Student2.course3.grade >= 85 && enrolled_courses.Student2.course3.grade < 90) {
    enrolled_courses.Student2.course3.letterGrade = "B";
} else if (enrolled_courses.Student2.course3.grade >= 75 && enrolled_courses.Student2.course3.grade < 85) {
    enrolled_courses.Student2.course3.letterGrade = "C";
} else {
    enrolled_courses.Student2.course3.letterGrade = "F";
}

if (enrolled_courses.Student3.course1.grade >= 90 && enrolled_courses.Student3.course1.grade <= 100) {
    enrolled_courses.Student3.course1.letterGrade = "A";
} else if (enrolled_courses.Student3.course1.grade >= 85 && enrolled_courses.Student3.course1.grade < 90) {
    enrolled_courses.Student3.course1.letterGrade = "B";
} else if (enrolled_courses.Student3.course1.grade >= 75 && enrolled_courses.Student3.course1.grade < 85) {
    enrolled_courses.Student3.course1.letterGrade = "C";
} else {
    enrolled_courses.Student3.course1.letterGrade = "F";
}

if (enrolled_courses.Student3.course2.grade >= 90 && enrolled_courses.Student3.course2.grade <= 100) {
    enrolled_courses.Student3.course2.letterGrade = "A";
} else if (enrolled_courses.Student3.course2.grade >= 85 && enrolled_courses.Student3.course2.grade < 90) {
    enrolled_courses.Student3.course2.letterGrade = "B";
} else if (enrolled_courses.Student3.course2.grade >= 75 && enrolled_courses.Student3.course2.grade < 85) {
    enrolled_courses.Student3.course2.letterGrade = "C";
} else {
    enrolled_courses.Student3.course2.letterGrade = "F";
}

if (enrolled_courses.Student3.course3.grade >= 90 && enrolled_courses.Student3.course3.grade <= 100) {
    enrolled_courses.Student3.course3.letterGrade = "A";
} else if (enrolled_courses.Student3.course3.grade >= 85 && enrolled_courses.Student3.course3.grade < 90) {
    enrolled_courses.Student3.course3.letterGrade = "B";
} else if (enrolled_courses.Student3.course3.grade >= 75 && enrolled_courses.Student3.course3.grade < 85) {
    enrolled_courses.Student3.course3.letterGrade = "C";
} else {
    enrolled_courses.Student3.course3.letterGrade = "F";
}

let totalUnits = enrolled_courses.Student1.course1.units +
                 enrolled_courses.Student1.course2.units +
                 enrolled_courses.Student1.course3.units;
let totalUnitsStudent2 = enrolled_courses.Student2.course1.units +
                         enrolled_courses.Student2.course2.units +
                         enrolled_courses.Student2.course3.units;
let totalUnitsStudent3 = enrolled_courses.Student3.course1.units +
                         enrolled_courses.Student3.course2.units +
                         enrolled_courses.Student3.course3.units;

let totalGrades =
    (enrolled_courses.Student1.course1.grade * enrolled_courses.Student1.course1.units) +
    (enrolled_courses.Student1.course2.grade * enrolled_courses.Student1.course2.units) +
    (enrolled_courses.Student1.course3.grade * enrolled_courses.Student1.course3.units);
let totalGradesStudent2 =
    (enrolled_courses.Student2.course1.grade * enrolled_courses.Student2.course1.units) +
    (enrolled_courses.Student2.course2.grade * enrolled_courses.Student2.course2.units) +
    (enrolled_courses.Student2.course3.grade * enrolled_courses.Student2.course3.units);
let totalGradesStudent3 =
    (enrolled_courses.Student3.course1.grade * enrolled_courses.Student3.course1.units) +
    (enrolled_courses.Student3.course2.grade * enrolled_courses.Student3.course2.units) +
    (enrolled_courses.Student3.course3.grade * enrolled_courses.Student3.course3.units);

let gwa = 0;

if (totalUnits > 0) {
    gwa = totalGrades / totalUnits;
} else {
    console.log("Total units is zero. Cannot calculate GWA.");
}

console.log("====== STUDENT INFORMATION ======");
console.log("Name: " + bsit_students.Student1.name);
console.log("ID Number: " + bsit_students.Student1.idNumber);
console.log("Year Level: " + bsit_students.Student1.YearLevel);
console.log("Program: " + bsit_students.Student1.Program);
console.log("\n");
console.log("Name: " + bsit_students.Student2.name);
console.log("ID Number: " + bsit_students.Student2.idNumber);
console.log("Year Level: " + bsit_students.Student2.YearLevel);
console.log("Program: " + bsit_students.Student2.Program);
console.log("\n");
console.log("Name: " + bsit_students.Student3.name);
console.log("ID Number: " + bsit_students.Student3.idNumber);
console.log("Year Level: " + bsit_students.Student3.YearLevel);
console.log("Program: " + bsit_students.Student3.Program);

console.log("\n====== COURSE INFORMATION ======");

console.log("Student 1 - Course 1: " + enrolled_courses.Student1.course1.subject +
    " | Units: " + enrolled_courses.Student1.course1.units +
    " | Grade: " + enrolled_courses.Student1.course1.grade +
    " | Letter Grade: " + enrolled_courses.Student1.course1.letterGrade);

console.log("Student 1 - Course 2: " + enrolled_courses.Student1.course2.subject +
    " | Units: " + enrolled_courses.Student1.course2.units +
    " | Grade: " + enrolled_courses.Student1.course2.grade +
    " | Letter Grade: " + enrolled_courses.Student1.course2.letterGrade);

console.log("Student 1 - Course 3: " + enrolled_courses.Student1.course3.subject +
    " | Units: " + enrolled_courses.Student1.course3.units +
    " | Grade: " + enrolled_courses.Student1.course3.grade +
    " | Letter Grade: " + enrolled_courses.Student1.course3.letterGrade);

console.log("\nStudent 2 - Course 1: " + enrolled_courses.Student2.course1.subject +
    " | Units: " + enrolled_courses.Student2.course1.units +
    " | Grade: " + enrolled_courses.Student2.course1.grade +
    " | Letter Grade: " + enrolled_courses.Student2.course1.letterGrade);
console.log("Student 2 - Course 2: " + enrolled_courses.Student2.course2.subject +
    " | Units: " + enrolled_courses.Student2.course2.units +
    " | Grade: " + enrolled_courses.Student2.course2.grade +   
    " | Letter Grade: " + enrolled_courses.Student2.course2.letterGrade);
console.log("Student 2 - Course 3: " + enrolled_courses.Student2.course3.subject +
    " | Units: " + enrolled_courses.Student2.course3.units +
    " | Grade: " + enrolled_courses.Student2.course3.grade +
    " | Letter Grade: " + enrolled_courses.Student2.course3.letterGrade);

console.log("\nStudent 3 - Course 1: " + enrolled_courses.Student3.course1.subject +
    " | Units: " + enrolled_courses.Student3.course1.units +
    " | Grade: " + enrolled_courses.Student3.course1.grade +    
    " | Letter Grade: " + enrolled_courses.Student3.course1.letterGrade);
console.log("Student 3 - Course 2: " + enrolled_courses.Student3.course2.subject +
    " | Units: " + enrolled_courses.Student3.course2.units +
    " | Grade: " + enrolled_courses.Student3.course2.grade +
    " | Letter Grade: " + enrolled_courses.Student3.course2.letterGrade);
console.log("Student 3 - Course 3: " + enrolled_courses.Student3.course3.subject +
    " | Units: " + enrolled_courses.Student3.course3.units +
    " | Grade: " + enrolled_courses.Student3.course3.grade +
    " | Letter Grade: " + enrolled_courses.Student3.course3.letterGrade);

// Calculate GWA for all students
let gwaStudent1 = totalGrades / totalUnits;
let gwaStudent2 = totalGradesStudent2 / totalUnitsStudent2;
let gwaStudent3 = totalGradesStudent3 / totalUnitsStudent3;

// Determine Letter Grade based on GWA

let letterGradeStudent1;
if (gwaStudent1 >= 90 && gwaStudent1 <= 100) {
    letterGradeStudent1 = "A";
} else if (gwaStudent1 >= 85) {
    letterGradeStudent1 = "B";
} else if (gwaStudent1 >= 75) {
    letterGradeStudent1 = "C";
} else {
    letterGradeStudent1 = "F";
}

let letterGradeStudent2;
if (gwaStudent2 >= 90 && gwaStudent2 <= 100) {
    letterGradeStudent2 = "A";
} else if (gwaStudent2 >= 85) {
    letterGradeStudent2 = "B";
} else if (gwaStudent2 >= 75) {
    letterGradeStudent2 = "C";
} else {
    letterGradeStudent2 = "F";
}

let letterGradeStudent3;
if (gwaStudent3 >= 90 && gwaStudent3 <= 100) {
    letterGradeStudent3 = "A";
} else if (gwaStudent3 >= 85) {
    letterGradeStudent3 = "B";
} else if (gwaStudent3 >= 75) {
    letterGradeStudent3 = "C";
} else {
    letterGradeStudent3 = "F";
}

// Display GWA and Letter Grades
console.log("\n====== GWA AND LETTER GRADES OF ALL STUDENTS ======");

console.log("\nStudent 1 - " + bsit_students.Student1.name);
console.log("GWA: " + gwaStudent1.toFixed(2));
console.log("Letter Grade: " + letterGradeStudent1);

console.log("\nStudent 2 - " + bsit_students.Student2.name);
console.log("GWA: " + gwaStudent2.toFixed(2));
console.log("Letter Grade: " + letterGradeStudent2);

console.log("\nStudent 3 - " + bsit_students.Student3.name);
console.log("GWA: " + gwaStudent3.toFixed(2));
console.log("Letter Grade: " + letterGradeStudent3);