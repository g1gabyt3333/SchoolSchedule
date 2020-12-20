var periods = [1, 2, 3, 4, 5, 6, 7, 8]
var classes = ["Gym", "Language Arts", "Chemistry", "AP Comp Sci", "Geometry", "Study Hall", "AS I", "French"]



function setPer(){
    for(var i = 0; i<=5; i++){
        var getPerCol = document.getElementsByClassName("per")[i].innerText = periods[i];
    }
}

function setClass(day){

    for(var i = 0; i<=7; i++){
        var getPerCol = document.getElementsByClassName("class")[i].innerText = classes[i];
    }

}

setPer();
function main(){
    var day = document.getElementsByTagName("input")[0].value.toLocaleUpperCase
    setPer();
    setClass();
}

function setTime(){
    var time = new Date();
    let hour = time.getHours
    let minutes = time.getMinutes
    let seconds = time.getSeconds
    curTime = hour + ":" + minutes + ":" + seconds;
    return curTime;
    // hour = (hour > 12) ? hour-12 : hour;
    
}

function formatTime(thing){
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (seconds < 10){
        seconds = "0" + seconds;
    }


}

function changeTime(){
    var timeId = document.getElementById("curTime");
    curTime = setTime();
    formatTime();
    timeId.innerText = curTime
    console.log("success")
}

setInterval(changeTime(), 1000)


