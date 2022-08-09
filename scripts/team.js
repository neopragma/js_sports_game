export function Team(name, strength) {
    this.displayName = name;
	this.name = name.replace(/\s/g, '');
	if (strength == undefined) {
    	this.strength = 50;
	} else {
		this.strength = strength;
	}
	this.shots = 0;
	this.goals = 0;
	this.score = function() {
		return (Math.floor(Math.random() * 100)) < this.strength;
	}
}