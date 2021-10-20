
// Hackerland University
//  0 <= grade <= 100
// Any grade less than 40 is a failing grade.
// Sam is a professor at the university and likes to round each student's grade according to these rules:
// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.
// Examples

//  round to  (85 - 84 is less than 3)
//  do not round (result is less than 40)
//  do not round (60 - 57 is 3 or higher)
// Given the initial value of  for each of Sam's  students, write code to automate the rounding process.

// Function Description

// Complete the function gradingStudents in the editor below.

// gradingStudents has the following parameter(s):

// int grades[n]: the grades before rounding
// Returns

// int[n]: the grades after rounding as appropriate
// Input Format

// The first line contains a single integer, , the number of students.
// Each line  of the  subsequent lines contains a single integer, .


function gradingStudents(grades) {

  const nextMultiple = (num) => {
    //dividimos por 5 y multiplicamos por 5 para sacar el multiplo, gracias al Math.ceil() el cual aproxima por arriba, podemos sacar el multiplo por arriba
    // si fuera aproximar por debajo, usariamos Math.floor()
    const multiple =  Math.ceil(num / 5) * 5;

    if(multiple - num < 3){
      return multiple;
    }

    return num;
  }

  return grades.map(grade => {
    if( grade < 38){
      return grade;
    }

    return nextMultiple(grade);
  })



console.log(gradingStudents(72))
