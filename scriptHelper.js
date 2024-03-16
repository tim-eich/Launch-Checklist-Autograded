require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
// Here is the HTML formatting for our mission target div.
/*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
*/
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput) === true) {
        return "Not a Number";
    } else if (isNaN(testInput) === false) {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let launchStatus = document.getElementById('launchStatus');
    let faultyItems = document.getElementById('faultyItems');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    let pilotName;
    let copilotName;
    let fuel;
    let cargo;
    
    if (validateInput(pilot) == "Not a Number") {
        pilotName = pilot;
    }
    if (validateInput(copilot) == "Not a Number") {
        copilotName = copilot;
    }
    if (validateInput(fuelLevel) == "Is a Number") {
        fuel = fuelLevel;
    }
    if (validateInput(cargoLevel) == "Is a Number") {
        cargo = cargoLevel;
    }

    document.getElementById('pilotStatus').innerHTML = `Pilot ${pilotName} is ready for launch`;
    document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilotName} is ready for launch`;

    if (fuel >= 10000 && cargo <= 10000) {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = 'green';
        fuelStatus.innerHTML = "Fuel level high enough for launch"
        cargoStatus.innerHTML = "Cargo mass low enough for launch"        
    } else if (fuel < 10000 && cargo <= 10000) {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'red';
        faultyItems.style.visibility = 'visible';
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    } else if (cargo > 10000 && fuel >= 10000) {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'red';
        faultyItems.style.visibility = 'visible';
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    } else if (cargo > 10000 && fuel < 10000) {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'red';
        faultyItems.style.visibility = 'visible';
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    }
    this.stopPropagation();
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;