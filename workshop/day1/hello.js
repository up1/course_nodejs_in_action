var score =  50
var grade = 'F'

if( score >= 80 ) {
    grade = 'A'
} else if( score >= 70 ) {
    grade = 'B'
} else if( score >= 60 ) {
    grade = 'C'
} else if( score >= 50 ) {
    grade = 'D'
}

console.log("Grade : " + grade)
