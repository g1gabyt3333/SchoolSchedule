var periods = [1, 2, 3, 4, 5, 6, 7, 8]
var classes = ["Gym", "Language Arts", "Chemistry", "AP Comp Sci", "Geometry", "Study Hall", "AS I", "French"]

var aDay = [1, 2, 3, 4, 5, 6];
var bDay = [5, 6, 7, 8, 1, 2];
var cDay = [4, 1, 2, 3, 7, 8];
var dDay = [8, 5, 6, 7, 3, 4]

function setPer(){
    for(var i = 0; i<=5; i++){
        var getPerCol = document.getElementsByClassName("per")[i].innerText = periods[i];
    }
}

function setDay(){
    var day = document.getElementsByTagName("input")[0].value;
    


    if(day === "a"){
        for(var i = 0; i<aDay.length; i++){

                document.getElementsByClassName("class")[i].innerText = classes[aDay[i]-1];
            
            // console.log("test")
        }
    }
    else if(day === "b"){
        for(var i = 0; i<bDay.length; i++){
            document.getElementsByClassName("class")[i].innerText = classes[bDay[i]-1];
            // console.log("test2")
        }
    }
    else if(day === "c"){
        for(var i = 0; i<cDay.length; i++){
            document.getElementsByClassName("class")[i].innerText = classes[cDay[i]-1];
            // console.log("test3")
        }
    }
    else if(day === "d"){
        for(var i = 0; i<dDay.length; i++){
            document.getElementsByClassName("class")[i].innerText = classes[dDay[i]-1];
            // console.log("test4")
        }
    }

    else{
        alert("Invalid Day! Try Again")
    }

}

function setTime(){
    
    
    var curTime = formatTime();
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

function amOrPm(){
    var time = new Date();

    if(time.getHours() >= 12){
        return "PM"
    }
    else{
        return "AM"
    }

}


function returnDate(){
    var time = new Date();
    return time;
}

for(var i = 0; i<=5; i++){
    var getPerCol = document.getElementsByClassName("per")[i].innerText = periods[i];
}


setTime()
setInterval(setTime, 1000)


