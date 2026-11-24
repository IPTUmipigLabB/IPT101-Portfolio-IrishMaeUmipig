export const studentDetails = {
    name: "Irish Mae F. Umipig",
    id: 6638,
    program: "BSIT",
    yearLevel: 2,
    schoolYear: "2026-2027",
};

export function printSummary(student, status) {
    return `Student: ${student.name} | ID: ${student.id} | Program: ${student.program} | Status: ${status}.`;
}