document.addEventListener("DOMContentLoaded", function() {

    var team1 = document.querySelector("#team1");
    var team2 = document.querySelector("#team2");
    var points1 = document.querySelector("#points1");
    var points2 = document.querySelector("#points2");
    var table = document.querySelector("table");
    var submitBttn = document.querySelector("button");

    submitBttn.addEventListener("click", function(submit) {
        submit.preventDefault();
        if (checkTeams(team1.value, team2.value) && checkGoals(points1.value, points2.value)) {
            let tableData1 = document.createElement("td");
            tableData1.innerText = team1.value;

            let tData2 = document.createElement("td");
            tData2.innerText = team2.value;

            let tData3 = document.createElement("td");
            tData3.innerText = `${points1.value} - ${points2.value}`;

            let tableRow = document.createElement("tr");
            tableRow.appendChild(tableData1);
            tableRow.appendChild(tData2);
            tableRow.appendChild(tData3);
            table.children[0].appendChild(tableRow);
        }
    });
    function checkTeams(t1, t2) {
        let checkIt;
        if(t1 !== t2) checkIt = true
        else checkIt = false;
        return checkIt;
    }
    function checkGoals(g1, g2) {
        if (g1 >= 0 && g2 >=0) {
            return true;
        } else {
            return false;
        }
    }

});