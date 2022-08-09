export function genHTML(team) {
        var txt = "<h2>";
        txt += team.displayName;
        txt += "</h2>";
        txt += "<div class=\"goals\">";
        txt += "SHOTS TAKEN: <span id=\"";
        txt += team.name;
        txt += "-numshots\">0</span><br>"
        txt += "GOALS: <span id=\"";
        txt += team.name;
        txt += "-numgoals\">0</span>";
        txt += "</div>"
        txt += "<div><button id=\"";
        txt += team.name;
        txt += "-shoot-button\" name=\"" + team.name + "\">SHOOT</button></div>";
        return txt;
	}
