var img1 = document.querySelector("#drum1");
var heading = document.querySelector("h1");
var bodey = document.querySelector("body")
var audio1 = new Audio("Drum Kit Starting Files/tom-1.mp3");
var audio2 = new Audio("Drum Kit Starting Files/tom-2.mp3");
var audio3 = new Audio("Drum Kit Starting Files/tom-3.mp3");
var audio4 = new Audio("Drum Kit Starting Files/tom-4.mp3");
var audio5 = new Audio("Drum Kit Starting Files/snare.mp3");
var audio6 = new Audio("Drum Kit Starting Files/crash.mp3");
var audio7 = new Audio("Drum Kit Starting Files/kick-bass.mp3");
img1.addEventListener("click",function(){
    img1.classList.add("clickme");
    audio1.play();
    bodey.classList.add("fire");
    heading.classList.add("fireH");
    setTimeout(function(){
        img1.classList.remove('clickme')
        bodey.classList.remove('fire')
        heading.classList.remove("fireH")
    },100);

}
)
document.addEventListener("keypress", function(event){
    if (event.key === "w"){
    img1.classList.add("clickme");
    audio1.play();
    bodey.classList.add("fire");
    heading.classList.add("fireH");
    setTimeout(function(){
        img1.classList.remove('clickme')
        bodey.classList.remove('fire')
        heading.classList.remove("fireH");
    },100);


}
}
)


    

var img2 = document.querySelector("#drum2");
img2.addEventListener("click",function(){
    img2.classList.add("clickme");
    bodey.classList.add("fire");
    heading.classList.add("fireH");
    audio2.play();
    setTimeout(function(){
        img2.classList.remove('clickme')
        bodey.classList.remove('fire')
        heading.classList.remove("fireH");
    },100);

})
document.addEventListener("keypress", function(event){
    if (event.key === "a"){
    img2.classList.add("clickme");
    audio2.play();
    bodey.classList.add("fire");
    heading.classList.add("fireH");
    setTimeout(function(){
        img2.classList.remove('clickme')
        bodey.classList.remove('fire')
        heading.classList.remove("fireH");
    },100);


}
}
)
var img3 = document.querySelector("#drum3");
img3.addEventListener("click",function(){
    img3.classList.add("clickme");
    audio3.play();
    bodey.classList.add("fire");
    heading.classList.add("fireH");
    setTimeout(function(){
        img3.classList.remove('clickme')
        bodey.classList.remove('fire')
        heading.classList.remove("fireH");
    },100);

})
document.addEventListener("keypress", function(event){
    if (event.key === "s"){
    img3.classList.add("clickme");
    audio3.play();
    bodey.classList.add("fire");
    heading.classList.add("fireH");
    setTimeout(function(){
        img3.classList.remove('clickme')
        bodey.classList.remove('fire')
        heading.classList.remove("fireH");
    },100);


}
}
)

var img4 = document.querySelector("#drum4");
img4.addEventListener("click",function(){
    img4.classList.add("clickme");
    audio4.play();
    bodey.classList.add("fire");
    heading.classList.add("fireH");
    setTimeout(function(){
        img4.classList.remove('clickme')
        bodey.classList.remove('fire')
        heading.classList.remove("fireH");
    },100);

})
document.addEventListener("keypress", function(event){
    if (event.key === "d"){
    img4.classList.add("clickme");
    audio4.play();
    bodey.classList.add("fire");
    heading.classList.add("fireH");
    setTimeout(function(){
        img4.classList.remove('clickme')
        bodey.classList.remove('fire')
        heading.classList.remove("fireH");
    },100);


}
}
)

var img5 = document.querySelector("#drum5");
img5.addEventListener("click",function(){
    img5.classList.add("clickme");
    audio5.play();
    bodey.classList.add("fire");
    heading.classList.add("fireH");
    setTimeout(function(){
        img5.classList.remove('clickme')
        bodey.classList.remove('fire')
        heading.classList.remove("fireH");
    },100);

})
document.addEventListener("keypress", function(event){
    if (event.key === "j"){
    img5.classList.add("clickme");
    audio5.play();
    bodey.classList.add("fire");
    heading.classList.add("fireH");
    setTimeout(function(){
        img5.classList.remove('clickme')
        bodey.classList.remove('fire')
        heading.classList.remove("fireH");
    },100);


}
}
)

var img6 = document.querySelector("#drum6");
img6.addEventListener("click",function(){
    img6.classList.add("clickme");
    audio6.play();
    bodey.classList.add("fire");
    heading.classList.add("fireH");
    setTimeout(function(){
        img6.classList.remove('clickme')
        bodey.classList.remove('fire')
        heading.classList.remove("fireH");
    },100);

})
document.addEventListener("keypress", function(event){
    if (event.key === "k"){
    img6.classList.add("clickme");
    audio6.play();
    bodey.classList.add("fire");
    heading.classList.add("fireH");
    setTimeout(function(){
        img6.classList.remove('clickme')
        bodey.classList.remove('fire')
        heading.classList.remove("fireH");
    },100);


}
}
)

var img7 = document.querySelector("#drum7");
img7.addEventListener("click",function(){
    img7.classList.add("clickme");
    audio7.play();
    bodey.classList.add("fire");
    heading.classList.add("fireH");
    setTimeout(function(){
        img7.classList.remove('clickme')
        bodey.classList.remove('fire')
        heading.classList.remove("fireH");
    },100);

})
document.addEventListener("keypress", function(event){
    if (event.key === "l"){
    img7.classList.add("clickme");
    audio7.play();
    bodey.classList.add("fire");
    heading.classList.add("fireH");
    setTimeout(function(){
        img7.classList.remove('clickme')
        bodey.classList.remove('fire')
        heading.classList.remove("fireH");
    },100);


}
}
)
// document.querySelector("#drum2").addEventListener("click").classList.add("click");
// document.addEventListener("keypress",function(event){
//     if(event.key === "w"){
//     alert("Key pressed!");
//     }
// })