const openButton = document.getElementById("openButton");

const envelopeScreen = document.getElementById("envelopeScreen");

const website = document.getElementById("website");



/* =====================
   OPEN ENVELOPE
===================== */


openButton.addEventListener("click",()=>{


    envelopeScreen.style.transition="1s";

    envelopeScreen.style.opacity="0";


    setTimeout(()=>{

        envelopeScreen.style.display="none";

        website.style.display="block";


        startHearts();


    },1000);


});







/* =====================
   MUSIC PLAYER
===================== */


const musicButton =
document.getElementById("musicButton");


const song =
document.getElementById("song");


let playing=false;



musicButton.addEventListener("click",()=>{


if(!playing){


    song.play();

    musicButton.innerHTML=
    "⏸ Pause";


    playing=true;


}


else{


    song.pause();


    musicButton.innerHTML=
    "▶ Play ";


    playing=false;


}



});









/* =====================
   FLOATING HEARTS
===================== */


function startHearts(){



setInterval(()=>{


let heart=document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="fixed";


heart.style.bottom="-20px";


heart.style.left=
Math.random()*100+"vw";


heart.style.fontSize=
Math.random()*20+15+"px";


heart.style.opacity=".7";


heart.style.animation=
"heartRise 6s linear";



document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},6000);



},700);



}






const style=document.createElement("style");


style.innerHTML=`

@keyframes heartRise{


0%{

transform:
translateY(0)
rotate(0deg);

opacity:1;

}


100%{

transform:
translateY(-110vh)
rotate(360deg);

opacity:0;

}


}

`;


document.head.appendChild(style);




document.addEventListener("mousemove", (e) => {
    const sparkle = document.createElement("span");

    sparkle.className = "sparkle";
    sparkle.textContent = ["✨", "💖", "🤍", "✦"][Math.floor(Math.random() * 4)];

    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 700);
});




/* =====================
   TYPEWRITER LETTER
===================== */


const letter = document.getElementById("letterText");

const originalText = letter.innerText;

letter.innerHTML = "";

let index = 0;


function typing(){

    if(index < originalText.length){

        letter.innerHTML += originalText.charAt(index);

        index++;

        setTimeout(typing,60);


    }

}


setTimeout(typing,1500);








/* =====================
   SURPRISE BUTTON
===================== */


const surpriseButton =
document.getElementById("surpriseButton");


const secret =
document.getElementById("secretMessage");



surpriseButton.addEventListener("click",()=>{


secret.style.display="block";


surpriseButton.innerHTML=
"❤️ Hehehe ❤️";



});
