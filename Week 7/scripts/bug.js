

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
    };
};

function reportBug() {
    
    objBug = new Bug (
        document.querySelector('#reportedBy').value,
        document.querySelector('#system').selectedOptions[0].text,
        document.querySelector('#subSystem').selectedOptions[0].text,
        document.querySelector('#bugDesc').value
    )
    objBug.addBug();
};


// Calls get system function to fetch data from json file. 
getSystems(0, document.querySelector('#system'))

// Fetches out data from json file. Filters if parentID is equal to id, sends to populate function.
function getSystems(id, obj) {
    fetch('data.json')
    .then(res => res.json())
    .then(data => {
        const arrayOfSystems = data.systems.filter((item) => {
            return item.parentID === parseInt(id);
        })
        populateDD(arrayOfSystems, obj);
    })
    .catch(err => console.warn(err))
}
// Populates options based off of previous data. 
function populateDD(array, object) {
    object.options[0] = new Option('Select an Item', -1);
    for (let i = 0; i < array.length; i++){
        object.options[i + 1] = new Option(array[i].sysName, array[i].sysID);
    };
};

function onChange() {
    const sysID = document.querySelector('#system').value;
    getSystems(sysID, document.querySelector('#subSystem'));
};

document.querySelector('#system').addEventListener('change', onChange);