let student;

//event listener to call other functions with print button
document.getElementById('print').addEventListener('click', function(){
    instantiate();
    print();
});

//event listener to grab ids from data inputted
document.getElementById('reset').addEventListener('click', function(){
    document.getElementById('studentName').value = ' ';
    document.getElementById('className').value = ' ';
    document.getElementById('studentScores').value = ' ';
    document.getElementById('possibleScores').value = ' ';
    document.getElementById('certStudentName').innerHTML = '';
    document.getElementById('certClassName').innerHTML = '';
    document.getElementById('certGrade').innerHTML = '';
});

//function that creates new student by grabbing name/what class and converting scores of student and possible scores into an array.
function instantiate(){
    student = new Student(
        document.getElementById('studentName').value,
        document.getElementById('className').value,
        convertArray(document.getElementById('studentScores')),
        convertArray(document.getElementById('possibleScores'))
    )
};

function print(){
    document.getElementById('certStudentName').innerHTML = student.studentName;
    document.getElementById('certClassName').innerHTML = student.className;
    document.getElementById('certGrade').innerHTML = student.calculateScores();
};

function convertArray(std) {
    ary = std.value.split(',');
    ary = ary.map(function(i){
        return parseInt(i)
    })
    return ary;
};