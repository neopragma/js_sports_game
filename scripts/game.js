import { Team } from "./team.js";
import { genHTML } from "./genHTML.js";

var counterID = "";
var gruntSound = document.querySelector("#grunt");
var cheeringSound = document.querySelector("#cheering");
var resetButton = document.querySelector("#reset-button");
var numberOfResets = document.querySelector("#num-resets");
var resetCount = 0;

var teamAlpha = new Team("The Unbearable Lightness of Being", 10);
left.innerHTML = genHTML(teamAlpha);

var teamBeta = new Team("Slaughterhouse Five", 80);
right.innerHTML = genHTML(teamBeta);

clickEvents("left", teamAlpha);
clickEvents("right", teamBeta);

resetButton.addEventListener("click", function() {
    numberOfResets.innerHTML = ++resetCount;
	let teams = [ teamAlpha, teamBeta ];
	for (let team of teams) {
		team.shots = 0;
		team.goals = 0;
		counterID = "#" + team.name + "-numshots";
		document.querySelector(counterID).innerHTML = 0;
		counterID = "#" + team.name + "-numgoals";
		document.querySelector(counterID).innerHTML = 0;
	}
})


function clickEvents(side, team) {
    let shootButton = document.querySelector(team.name + "-shoot-button");
    document.querySelector("#" + side).addEventListener("click", function() {
    	gruntSound.play();
        team.shots++;
        if (team.score()) {
        	cheeringSound.play();
            team.goals++;
        }
        counterID = "#" + team.name + "-numshots";
        document.querySelector(counterID).innerHTML = team.shots;
        counterID = "#" + team.name + "-numgoals";
        document.querySelector(counterID).innerHTML = team.goals;

    });
}        
