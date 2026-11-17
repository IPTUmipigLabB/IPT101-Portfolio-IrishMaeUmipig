
const PersonalInfo = {
    name: "Umipig, Irish Mae F.",
    idNumber: "2026-6638",
    YearLevel: "2nd Year",
    Program: "Information Technology"
};

const enrolled_courses = {
    course1: {
        subject: "Web Development",
        units: 3,
        grade: 98
    },
    course2: {
        subject: "Living in the IT Era",
        units: 3,
        grade: 85
    },
    course3: {
        subject: "Networking 1",
        units: 3,
        grade: 74
    },
    course4: {
        subject: "Purposive Communication",
        units: 3,
        grade: 92
    }
};

if (enrolled_courses.course1.grade >= 90 && enrolled_courses.course1.grade <= 100) {
    enrolled_courses.course1.letterGrade = "A";
} else if (enrolled_courses.course1.grade >= 85 && enrolled_courses.course1.grade < 90) {
    enrolled_courses.course1.letterGrade = "B";
} else if (enrolled_courses.course1.grade >= 75 && enrolled_courses.course1.grade < 85) {
    enrolled_courses.course1.letterGrade = "C";
} else {
    enrolled_courses.course1.letterGrade = "F";
}

if (enrolled_courses.course2.grade >= 90 && enrolled_courses.course2.grade <= 100) {
    enrolled_courses.course2.letterGrade = "A";
} else if (enrolled_courses.course2.grade >= 85 && enrolled_courses.course2.grade < 90) {
    enrolled_courses.course2.letterGrade = "B";
} else if (enrolled_courses.course2.grade >= 75 && enrolled_courses.course2.grade < 85) {
    enrolled_courses.course2.letterGrade = "C";
} else {
    enrolled_courses.course2.letterGrade = "F";
}

if (enrolled_courses.course3.grade >= 90 && enrolled_courses.course3.grade <= 100) {
    enrolled_courses.course3.letterGrade = "A";
} else if (enrolled_courses.course3.grade >= 85 && enrolled_courses.course3.grade < 90) {
    enrolled_courses.course3.letterGrade = "B";
} else if (enrolled_courses.course3.grade >= 75 && enrolled_courses.course3.grade < 85) {
    enrolled_courses.course3.letterGrade = "C";
} else {
    enrolled_courses.course3.letterGrade = "F";
}

if (enrolled_courses.course4.grade >= 90 && enrolled_courses.course4.grade <= 100) {
    enrolled_courses.course4.letterGrade = "A";
} else if (enrolled_courses.course4.grade >= 85 && enrolled_courses.course4.grade < 90) {
    enrolled_courses.course4.letterGrade = "B";
} else if (enrolled_courses.course4.grade >= 75 && enrolled_courses.course4.grade < 85) {
    enrolled_courses.course4.letterGrade = "C";
} else {
    enrolled_courses.course4.letterGrade = "F";
}

let totalUnits = enrolled_courses.course1.units +
                 enrolled_courses.course2.units +
                 enrolled_courses.course3.units +
                 enrolled_courses.course4.units;

let totalGrades =
    (enrolled_courses.course1.grade * enrolled_courses.course1.units) +
    (enrolled_courses.course2.grade * enrolled_courses.course2.units) +
    (enrolled_courses.course3.grade * enrolled_courses.course3.units) +
    (enrolled_courses.course4.grade * enrolled_courses.course4.units);

let gwa = 0;

if (totalUnits > 0) {
    gwa = totalGrades / totalUnits;
} else {
    console.log("Total units is zero. Cannot calculate GWA.");
}

console.log("====== PERSONAL INFORMATION ======");
console.log("Name: " + PersonalInfo.name);
console.log("ID Number: " + PersonalInfo.idNumber);
console.log("Year Level: " + PersonalInfo.YearLevel);
console.log("Program: " + PersonalInfo.Program);

console.log("\n====== COURSE INFORMATION ======");

console.log("Course 1: " + enrolled_courses.course1.subject +
    " | Units: " + enrolled_courses.course1.units +
    " | Grade: " + enrolled_courses.course1.grade +
    " | Letter Grade: " + enrolled_courses.course1.letterGrade);

console.log("Course 2: " + enrolled_courses.course2.subject +
    " | Units: " + enrolled_courses.course2.units +
    " | Grade: " + enrolled_courses.course2.grade +
    " | Letter Grade: " + enrolled_courses.course2.letterGrade);

console.log("Course 3: " + enrolled_courses.course3.subject +
    " | Units: " + enrolled_courses.course3.units +
    " | Grade: " + enrolled_courses.course3.grade +
    " | Letter Grade: " + enrolled_courses.course3.letterGrade);

console.log("Course 4: " + enrolled_courses.course4.subject +
    " | Units: " + enrolled_courses.course4.units +
    " | Grade: " + enrolled_courses.course4.grade +
    " | Letter Grade: " + enrolled_courses.course4.letterGrade);

// Display GWA
console.log("\n====== GWA CALCULATION ======");
console.log("Total Units: " + totalUnits);
console.log("GWA: " + gwa.toFixed(2));
