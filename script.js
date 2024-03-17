// const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    console.log("LOAD!")

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    })
    
    const formSubmit = document.getElementById('formSubmit');

    formSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        let document = this.document;
        let list = this.window;
        let pilot = document.getElementById('pilotName').value;
        let copilot = document.getElementById('copilotName').value;
        let fuelLevel = document.getElementById('fuelLevel').value;
        let cargoMass = document.getElementById('cargoMass').value;

        // console.log(`pilot: ${pilot}`);
        // console.log(`copilot: ${copilot}`);
        // console.log(`fuelStatus: ${fuelLevel}`);
        // console.log(`cargoMass: ${cargoMass}`);
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    });

    
 }); 