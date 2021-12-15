let bugTracker = 0; 

class Bug {
    constructor() {
        this.reportedBy = arguments[0],
        this.system = arguments[1],
        this.subSystem = arguments[2],
        this.bugDesc = arguments[3]
    };

    addBug() {
        bugTracker ++;
        let newBug = '<div id="bug' + bugTracker + '" class="bugRpt"><p>';
            newBug += 'Reported by: ' + this.reportedBy + '/' + this.subSystem + '<br/>';
            newBug += 'System: ' + this.system + '/' + this.subSystem + '<br />';
            newBug += this.bugDesc + '</p>';
            newBug += '<div class="bugButtons">'
                newBug += '<button onClick="objBug.deleteBug(' + bugTracker + ')" class="bugBttn">X</button>';
                newBug += '<button onClick="objBug.resolveBug(' + bugTracker + ')" class="bugBttn">&#x2713;</button>'
            newBug += '</div>';
        newBug += '</div>';

        document.querySelector('#listWrapper').innerHTML += newBug;
    };

    deleteBug(bugTracker) {
        let element = document.getElementById('bug' + bugTracker);
        element.remove();
    };
    

    resolveBug(bugTracker) {
        let element = document.getElementById('bug' + bugTracker);
        element.style.backgroundColor = '#111111';
        element.style.color = 'silver';
    };
};

function reportBug() {
    
    let objBug = new Bug (
        document.querySelector('#reportedBy').value,
        document.querySelector('#system').selectedOptions[0].text,
        document.querySelector('#subSystem').selectedOptions[0].text,
        document.querySelector('#bugDesc').value,
        console.log(objBug)
    )
    objBug.addBug();
    console.log(objBug)
};

document.getElementById('bugForm').addEventListener('submit', reportBug);