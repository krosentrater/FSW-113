//? Creates a class with a constructor that has information from form as arguments.
class Student {
    constructor(args) {
        this.studentName = arguments[0],
        this.className = arguments[1],
        this.studentScores = arguments[2],
        this.possibleScores = arguments[3]
    };

    //? Creates a method that calculates students grade. Based off of data put in by user.
    calculateScores() {
        let scores = this.calculateStudentScores() / this.calculatePossibleScores();
        switch(true) {
            case (scores < .6): return 'F'; break;
            case (scores < .7): return 'D'; break;
            case (scores < .8): return 'C'; break;
            case (scores < .9): return 'B'; break;
            default: return 'A'; break;
        };
    };

    //? Creates method that gets the data by user to calculate student's stores. 
    calculateStudentScores() {
        let studentScores = this.studentScores.reduce(
            (currentTotal, item) => {
                return item + currentTotal
            },
            0
        )
        return studentScores;
    };

    //? Creates method to calculate possible scores inputed by user.
    calculatePossibleScores() {
        let possibleScores = this.possibleScores.reduce(
            (currentTotal, item) => {
                return item + currentTotal
            },
            0
        )
        return possibleScores;
    };

}