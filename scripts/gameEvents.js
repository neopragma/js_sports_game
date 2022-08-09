export function leftClickEvents(side, team) {
    let leftShootButton = document.querySelector(team.name + "-shoot-button");
    leftShootButton.addEventListener("click", function() {
        team.shots++;
        if (team.score()) {
            team.goals++;
        }
        alert(team.name + " shots: " + team.shots + ", goals: " + team.goals);

    });
    alert("leftShootButton is " + leftShootButton);	
}        

