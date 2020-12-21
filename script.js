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
    
    if(returnDate().getHours() >= 7 && returnDate().getMinutes() >= 40 &&  (returnDate().getHours() <= 8 && returnDate().getMinutes() <= 50)){ //7:40 - 8:50
       document.getElementsByTagName("tr")[1].classList.add("curPer")
       console.log("Success1")
    }
    else if(returnDate().getHours() >= 8 && returnDate().getMinutes() >= 55 &&  (returnDate().getHours() <= 9 && returnDate().getMinutes() <= 55)){ //8:55 - 9:55
        document.getElementsByTagName("tr")[1].classList.remove("curPer")
        document.getElementsByTagName("tr")[2].classList.add("curPer")
        console.log("Success2")
    }
    else if(returnDate().getHours() >= 10 && returnDate().getMinutes() >= 0 &&  (returnDate().getHours() <= 11 && returnDate().getMinutes() <= 0)){ // 10-11
        document.getElementsByTagName("tr")[2].classList.remove("curPer")
        document.getElementsByTagName("tr")[3].classList.add("curPer")
        console.log("Success3")
    }
    else if(returnDate().getHours() >= 11 && returnDate().getMinutes() >= 5 &&  (returnDate().getHours(12, 5) <= 12)){ //11:05 - 12:05
        document.getElementsByTagName("tr")[3].classList.remove("curPer")
        document.getElementsByTagName("tr")[4].classList.add("curPer")
        console.log("Success4")
    }
    else if(returnDate().getHours() >= 13 && returnDate().getMinutes() >= 15 &&  (returnDate().getHours() <= 14 && returnDate().getMinutes() <= 5)){ //1:15 - 2:05
        document.getElementsByTagName("tr")[4].classList.remove("curPer")
        document.getElementsByTagName("tr")[5].classList.add("curPer")
        console.log("Success5")
    }
    else if(returnDate().getHours() >= 14 && returnDate().getMinutes() >= 10 &&  (returnDate().getHours() <= 14 && returnDate().getMinutes() <= 50)){ //2:10 - 2:50
        document.getElementsByTagName("tr")[5].classList.remove("curPer")
        document.getElementsByTagName("tr")[6].classList.add("curPer")
        console.log("Success6")
    }

    else{
        document.getElementsByTagName("tr")[6].classList.remove("curPer");
        console.log("Success7")
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

setTime()
setCurPer()
setInterval(setTime, 1000)


setInterval(setCurPer, 30000)


