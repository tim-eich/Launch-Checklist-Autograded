require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
// Here is the HTML formatting for our mission target div.
    console.log(`${name}${diameter}${star}${distance}${moons}${image}`);
    document.getElementById('missionTarget').innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${image}">
        `;
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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    let launchStatus = document.getElementById('launchStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    let faultyItems = list;

    // console.log(`pilot: ${pilot}`);
    // console.log(`copilot: ${copilot}`);
    // console.log(`fuelStatus: ${fuelLevel}`);
    // console.log(`cargoMass: ${cargoMass}`);


    // Group validation together:
    
    if (validateInput(pilot) === "Empty" || validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Empty" || validateInput(copilot) === "Is a Number") {
        window.alert("Please enter the names of the pilot and co-pilot using text only.");
    } else {
        document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }

    // if (validateInput(copilot) === "Empty") {
    //     window.alert("All fields are required.");
    // } else if (validateInput(copilot) === "Is a Number") {
    //     window.alert("Please enter text for Co-pilot Name.")
    // } else {
    //     document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot} is ready for launch`;
    // }

    if (validateInput(fuelLevel) === "Empty" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Empty" || validateInput(cargoMass) === "Not a Number") {
        window.alert("Please use a valid number to enter the fuel level and cargo mass");
    } else if (fuelLevel >= 10000 && cargoMass <= 10000) {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = 'green';
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        faultyItems.style.visibility = 'visible';      
    } else if (fuelLevel < 10000 && cargoMass <= 10000) {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'red';
        faultyItems.style.visibility = 'visible';
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    } else if (cargoMass > 10000 && fuelLevel >= 10000) {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'red';
        faultyItems.style.visibility = 'visible';
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    } else if (cargoMass > 10000 && fuelLevel < 10000) {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'red';
        faultyItems.style.visibility = 'visible';
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json')
        .then((response) => {
            return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length) + 1];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

// export {addDestinationInfo, validateInput, formSubmission, myFetch, pickPlanet};

// module.exports = {
//     addDestinationInfo: addDestinationInfo,
//     validateInput: validateInput,
//     formSubmission: formSubmission,
//     pickPlanet: pickPlanet,
//     myFetch: myFetch
// }

// export const addDestinationInfo = addDestinationInfo;
// export const validateInput = validateInput;
// export const formSubmission = formSubmission;
// export const pickPlanet = pickPlanet;
// export const myFetch = myFetch;