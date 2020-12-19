var periods = [1, 2, 3, 4, 5, 6, 7, 8]
var classes = ["Gym", "Language Arts", "Chemistry", "AP Comp Sci", "Geometry", "Study Hall", "AS I", "French"]
var day = "A"


function setPer(){
    for(var i = 0; i<=7; i++){
        var getPerCol = document.getElementsByClassName("per")[i].innerText = periods[i];
    }
}

function setClass(){

    for(var i = 0; i<=7; i++){
        var getPerCol = document.getElementsByClassName("class")[i].innerText = classes[i];
    }

}


function main(){
    setPer();
    setClass();
}

main();
