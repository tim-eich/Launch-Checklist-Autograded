// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    console.log("LOAD!")

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
    const { formSubmit } = document.getElementById('formSubmit');

    formSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("CLICK!")
        window.alert("CLICK!");
    })

    
 });