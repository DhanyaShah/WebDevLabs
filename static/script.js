function greetingFunc(){
    var d = new Date();
    var h = d.getHours();
    var E = document.getElementById("Greeting");
    if(h>=5 && h<12){
        E.innerHTML = "Good morning, I am Dhanya Shah";
    }else if(h>=12 && h<18){
        E.innerHTML = "Good afternoon, I am Dhanya Shah";
    }else if(h>=18 && h<20){
        E.innerHTML = "Good evening, I am Dhanya Shah";
    }else if(h>=20 && h<24 || h<5){
        E.innerHTML = "Good night, I am Dhanya Shah";
    }
}

var L1 = window.location.href;
console.log(L1);
if (L1.includes("index.html")) { 
   greetingFunc();
}

function addYear(){
    var d = new Date();
    var y = d.getFullYear();
    var E = document.getElementById("copyYear");
    E.innerHTML += y;
}

// function showList(){
//     document.getElementById("FavList").style.display = "block";
//     document.getElementById("SeeMoreBTN").style.display = "none";
// }

$("#readLess").click(function(){
    $("#longIntro").hide();
    $("#readLess").hide();  
    $("#readMore").show();    
});

$("#readMore").click(function(){
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();    
});

function validate() {
    var userName = document.getElementById("UserName");
    var userEmail = document.getElementById("UserEmail");
    var userText = document.getElementById("Usertext");
    var msg = document.getElementById("ValidateMsg");
    
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
 }


let map;

async function initMap() {

 const position = { lat: 40.44332926007748, lng:-79.94249584843838 };

 const { Map } = await google.maps.importLibrary("maps");
 const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

 map = new Map(document.getElementById("map"), {
   zoom: 12,
   center: position,
   mapId: "DEMO_MAP_ID",
});

 const marker = new AdvancedMarkerElement({
   map: map,
   position: position,
   title: "CMU",
 });
}

// var L2 = window.location.href;
// console.log(L2);
// if (L2.includes("fun.html")) {
//     initMap();
// }

function activeNav() {
    var x = document.getElementById("myTopnav");
 
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

