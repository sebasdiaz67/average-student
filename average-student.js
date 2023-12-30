// grades
document.getElementById('grade1').innerHTML = '0.0';
document.getElementById('grade2').innerHTML = '0.0';
document.getElementById('grade3').innerHTML = '0.0';
// average
document.getElementById('average').innerHTML = '';

// enter the name
function insertStudent() {
    let student = prompt('Enter the student name:');
    if (student != null) {
        if (!isNaN(student)) { // validate if is not a string
            alert('Please insert a valid name...')
        } else {
            document.getElementById('nameStudent').innerHTML = student.toLocaleUpperCase();
        }
    }
}

// enter the grades
function insertGrades() {
    const maxGrades = 3; // total of grades to insert
    // firts validate the student name
    let nameInput = document.getElementById('nameStudent');
    if (nameInput.textContent == '') {
        alert('Insert the student name');
    } else {
        // add the 3 grades
        for (let i = 1; i <= maxGrades; i++) {
            let grade = prompt('Enter the grade' + i + ':');
            if (grade == '') {
                alert('Please insert the grade...');
                clean();
                return;
            } else {
                if (isNaN(grade)) {// validate if is not a number
                    alert('Please insert a valid grade...');
                    clean();
                    return;
                }
                if (grade >= 0 && grade <= 10) {
                    document.getElementById('grade' + i).innerHTML = Number(grade).toFixed(2); // validate the decimal to show
                } else {
                    alert('Please insert grades between 0 and 10');
                    clean();
                    return;
                }
            }
        }
        // calculate the average
        let grade1 = document.getElementById('grade1');
        let grade2 = document.getElementById('grade2');
        let grade3 = document.getElementById('grade3');
        if (grade1.textContent != '' && grade2.textContent != '' && grade3.textContent != '') { // validate if exist all the grades
            let average = (Number(grade1.textContent) + Number(grade2.textContent) + Number(grade3.textContent)) / maxGrades;
            let message = '';
            if (average >= 7) {
                message = nameInput.textContent.toLocaleUpperCase() +
                    ', congratulations! You have passed with an average of ' + average.toFixed(2) + '.';
            } else {
                message = nameInput.textContent.toLocaleUpperCase() +
                    ', thank you for your effort. See you soon in class. The average obtained is ' + average.toFixed(2) + '.';
            }
            document.getElementById('average').innerHTML = message;
        }
    }
}

// clean de data
function clean() {
    // grades
    document.getElementById('grade1').innerHTML = '0.0';
    document.getElementById('grade2').innerHTML = '0.0';
    document.getElementById('grade3').innerHTML = '0.0';
    // average
    document.getElementById('average').innerHTML = '';
}