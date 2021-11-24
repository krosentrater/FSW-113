let sum, sumGrades, aryGrades, minGrade, maxGrade, mean, range;

function applyBell(grade, index, ary) {
    switch (true) {
        case grade >= (mean + (gradeSlice * 2)): 
            ary[index] = 'A';
            break;
        case grade >= (mean + gradeSlice): 
            ary[index] = 'B';
            break;
        case grade >= (mean):
            ary[index] = 'C';
            break;
        case grade >= (mean - gradeSlice): 
            ary[index] = 'D';
            break;
        default:
            ary[index] = 'F';
            break;
    };
};

function convertArray(obj) {
    ary = obj.value.split(',');
    ary = ary.map(function (x) {
        return parseInt(x);
    });
    return ary;
};

document.getElementById('submit').addEventListener('click', curveGrades);
function curveGrades() {
    sum = (accumulator, currentValue) => accumulator + currentValue;
    sumGrades = array => array.reduce(sum);
    aryGrades = convertArray(document.querySelector('#scores'));
    minGrade = aryGrades.reduce((a, b) => Math.min(a, b));
    maxGrade = aryGrades.reduce((a, b) => Math.max(a, b));
    mean = sumGrades(aryGrades) / aryGrades.length;
    range = maxGrade - minGrade;
    gradeSlice = range / 5;
    aryGrades.forEach(applyBell);
    document.querySelector('#grades').innerText = aryGrades;
};

document.getElementById('reset').addEventListener('click', reset);
function reset(){
    window.location.reload();
};