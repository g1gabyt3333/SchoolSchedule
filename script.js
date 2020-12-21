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
    


    curTime = formatTime();
    document.getElementById("curTime").innerHTML = curTime;

    
    
}

function formatTime(){

    var time = returnDate()
    let hour = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
    seconds = (seconds < 10) ? ("0" + seconds): seconds; 
    minutes = (minutes < 10) ? ("0" + minutes): minutes;
    curTime = hour + ":" + minutes + ":" + seconds + amOrPm();
    return curTime;

}

// function formatTime(thing){
//     hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
//     if (minutes < 10){
//         minutes = "0" + minutes;
//     }
//     if (seconds < 10){
//         seconds = "0" + seconds;
//     }


// }

// function changeTime(){
//     var timeId = document.getElementById("curTime");
//     curTime = setTime();
//     formatTime();
//     timeId.innerText = curTime
//     console.log("success")
// }

function returnDate(){
    var time = new Date();
    return time;
}

function setCurPer(){
    if(returnDate().getHours == 17 && returnDate().getMinutes == 44){
       document.getElementsByTagName("tr")[1].setClass("curPer")
       console.log("Success")
    }

}


function amOrPm(){
    var time = new Date();

    if(time.getHours() >= 12){
        return "PM"
    }
    else{
        return "AM"
    }

}

setInterval(setTime, 1000)
setInterval(setCurPer, 1000)

