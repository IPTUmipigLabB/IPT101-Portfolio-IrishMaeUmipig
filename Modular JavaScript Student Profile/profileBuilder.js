function createStudentProfile(name, id, program, yearLevel, schoolYear){
    return {
        name: name,
        id: id,
        program: program,
        yearLevel: yearLevel,
        schoolYear: schoolYear
    };
} 

const myProfile = createStudentProfile(
    "Irish Mae F. Umipig",
    6638,
    "BSIT",
    2,
    "2026-2027"
);

console.log(myProfile);