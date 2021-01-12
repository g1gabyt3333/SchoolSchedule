var periods = [1, 2, 3, 4, 5, 6, 7, 8]
var classes = ["Gym", "Language Arts", "Chemistry", "AP Comp Sci", "Geometry", "Study Hall", "AS I", "French"]
var links = [
    "https://zoom.us/j/97991291140?pwd=RFpIK25tSHFTclh6ZnJVSW9NZHFrdz09",
    "https://zoom.us/j/9437202128",
    "https://zoom.us/j/94242533946?pwd=K1h2SVZhQStPUE1iQWM0TE54aDJUdz09 ",
    "https://zoom.us/j/91881714994",
    "https://zoom.us/my/grygiel",
    "#",
    "https://zoom.us/j/95876814970?pwd=cytBUHlmRUpidDd5ZnY0Rm94WDJVZz09",
    "https://zoom.us/j/94176617821?pwd=cVhOUmM3cUtEbllIZVhoN2o2djFDdz09",
]

var aDay = [1, 2, 3, 4, 5, 6];
var bDay = [5, 6, 7, 8, 1, 2];
var cDay = [4, 1, 2, 3, 7, 8];
var dDay = [8, 5, 6, 7, 3, 4]



function setDay(){
    var day = document.getElementsByTagName("input")[0].value;
    


    if(day === "a"){
        for(var i = 0; i<aDay.length; i++){

                document.getElementsByClassName("class")[i].innerText = classes[aDay[i]-1];
                document.getElementsByClassName("zoom")[i].setAttribute("href", links[aDay[i]-1])


            
            // console.log("test")
        }
    }
    else if(day === "b"){
        for(var i = 0; i<bDay.length; i++){
            document.getElementsByClassName("class")[i].innerText = classes[bDay[i]-1];
            document.getElementsByClassName("zoom")[i].setAttribute("href", links[bDay[i]-1])
            // console.log("test2")
        }
    }
    else if(day === "c"){
        for(var i = 0; i<cDay.length; i++){
            document.getElementsByClassName("class")[i].innerText = classes[cDay[i]-1];
            document.getElementsByClassName("zoom")[i].setAttribute("href", links[cDay[i]-1])
            // console.log("test3")
        }
    }
    else if(day === "d"){
        for(var i = 0; i<dDay.length; i++){
            document.getElementsByClassName("class")[i].innerText = classes[dDay[i]-1];
            document.getElementsByClassName("zoom")[i].setAttribute("href", links[dDay[i]-1])
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

function timeToNum(){ //converts time object into a number object which i can use to set periods and compare
    var time = returnDate();
    let hour = time.getHours()
    let minutes = time.getMinutes()
    

    return (parseInt((hour.toString()).concat(minutes)))

}

function setCurPer(){
    var time = timeToNum()
    if(time >= 740 && time <= 850){
        document.getElementsByTagName("tr")[1].classList.add("curPer")
        
    }
    else if(time >= 855 && time <= 955){
        document.getElementsByTagName("tr")[2].classList.add("curPer")
        document.getElementsByTagName("tr")[1].classList.remove("curPer")
    }
    else if(time >= 1000 && time <= 1100){
        document.getElementsByTagName("tr")[3].classList.add("curPer")
        document.getElementsByTagName("tr")[2].classList.remove("curPer")

    }
    else if(time >= 1105 && time <= 1205){
        document.getElementsByTagName("tr")[4].classList.add("curPer")
        document.getElementsByTagName("tr")[3].classList.remove("curPer")

    }
    else if(time >= 1315 && time <= 1400){
        document.getElementsByTagName("tr")[5].classList.add("curPer")
        document.getElementsByTagName("tr")[4].classList.remove("curPer")

    }
    else if(time >= 1405 && time <= 1450){
        document.getElementsByTagName("tr")[6].classList.add("curPer")
        document.getElementsByTagName("tr")[5].classList.remove("curPer")

    }

    else if(time >= 1206 && time <= 1314){
        document.getElementsByTagName("tr")[4].classList.remove("curPer")
        alert("Lunch Time")

    }

    else{
        // console.log("school is closed")
        document.getElementsByTagName("tr")[6].classList.remove("curPer")
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
setInterval(setCurPer, 1000)


