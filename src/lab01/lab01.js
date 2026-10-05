console.log("lab 01")

// fullName: tên đầy đủ (string)

// birthYear: năm sinh (number)

// isStudent: true/false

const fullName  = "Alan"

const birthYear = 1978

const isStudent = false

const today = new Date();
const currentYear = today.getFullYear();

console.log(currentYear, typeof currentYear)

const calculateAge = currentYear - birthYear;

// In ra console theo format:
// Tên: [fullName]
// Tuổi: [calculatedAge]
// Sinh viên: [Đúng/Sai]

console.log(` 
Tên: ${fullName}
Tuổi: ${calculateAge}
Sinh viên: ${isStudent}

    `);

console.log("==========")    ;

console.log("Ten:", fullName)
console.log("Tuoi:", calculateAge)
console.log("Sinh vien:", isStudent)