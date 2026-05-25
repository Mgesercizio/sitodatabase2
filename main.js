var logInType=true;
var username=null;


function logIntype(x){
    if(x){document.getElementById("signUp").style.display="none";logInType=true;}
    else{document.getElementById("signUp").style.display="block";logInType=false;}
}


function loop(){
    var target1="documenti/modelloLogico.html"
    var target2="documenti/modelloER.html"
    var target3="documenti/sql.html"
    if(localStorage.getItem("loopControl")==1){
        target1="modelloLogico.html";
        target2="modelloER.html";
        target3="sql.html";
    }
    else if(localStorage.getItem("loopControl")==2){
        target1="../documenti/modelloLogico.html";
        target2="../documenti/modelloER.html";
        target3="../documenti/sql.html";
    }
        if(document.getElementById("select").value=="modelloLogico"){
            document.getElementById("select").value="default";
            location.href=target1;
            return;
        }
        else if(document.getElementById("select").value=="modelloER"){
            document.getElementById("select").value="default";
            location.href=target2;
            return;
        }
        else if(document.getElementById("select").value=="sql"){
            document.getElementById("select").value="default";
            location.href=target3;
            return;
        }
    requestAnimationFrame(loop);
}

function changeArtistiPage(){
    if(localStorage.getItem("sceltaArtisti")==0){
        document.getElementById("titleArtisti").innerHTML="Artisti";
    }
    else{
        document.getElementById("titleArtisti").innerHTML="Scegli 3 Artisti che ti piaciono";
    }
}

function submit(){
    if(logInType){
        username=document.getElementById("username").value;
        localStorage.setItem("username",username);
        location.href = "index.html";
    }
    else{
        localStorage.removeItem("sceltaArtisti");
        localStorage.setItem("sceltaArtisti", 1);
        localStorage.setItem("numeroArtisti", 0);
        location.href="artisti.html";
    }
}

function changeMainPage(){
    localStorage.removeItem("loopControl");
    if(localStorage.getItem("username")){
        document.getElementById("LogInPageLink").innerHTML="Ciao "+localStorage.getItem("username")+"!";
    }
    localStorage.removeItem("username");
    localStorage.setItem("loopControl", 0);
    loop()
}

function changeDocPages(){
    localStorage.removeItem("loopControl");
    localStorage.setItem("loopControl",1);
    loop();
}

function changeOtherPages(){
    localStorage.removeItem("loopControl");
    localStorage.setItem("loopControl",2);
    loop();
}

function openGenre(x){
    var genere=x;
    switch(genere){
        case 0: location.href="generi/pop.html" ;break;
        case 1: location.href="generi/rock.html" ;break;
        case 2: location.href="generi/latin.html" ;break;
        case 3: location.href="generi/rap.html" ;break;
        case 4: location.href="generi/jazz.html" ;break;
    }
}

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;
function showSlides(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } 
    else if (index < 0) {
        currentIndex = slides.length - 1;
    } 
    else {
        currentIndex = index;
    }

    slider.style.transform =`translateX(-${currentIndex * 100}%)`;
}
function nextSlide() {
    showSlides(currentIndex + 1);
}
function prevSlide() {
    showSlides(currentIndex - 1);
}

function sceltaArtisti(x){
    var num=parseInt(localStorage.getItem("numeroArtisti"));
    if(localStorage.getItem("sceltaArtisti")==1){
        localStorage.setItem("numeroArtisti", (num+1));
        if(localStorage.getItem("numeroArtisti")==3){
            localStorage.removeItem("numeroArtisti");
            localStorage.removeItem("sceltaArtisti");
            localStorage.setItem("sceltaArtisti", 0);
            location.href="index.html";
            return;
        }
    }
    else{
        switch(x){
            case 0: location.href="artisti/mj.html"; break;
            case 1: location.href="artisti/bm.html"; break;
            case 2: location.href="artisti/rhcp.html"; break;
            case 3: location.href="artisti/gnr.html"; break;
            case 4: location.href="artisti/jb.html"; break;
            case 5: location.href="artisti/bb.html"; break;
            case 6: location.href="artisti/em.html"; break;
            case 7: location.href="artisti/kl.html"; break;
            case 8: location.href="artisti/la.html"; break;
            case 9: location.href="artisti/jc.html"; break;

        }

    }
}

function slideClick(x){  
    switch(x){
        case 1: location.href="album.html";break;
        case 2: location.href="generi/latin.html";break;
        case 3: location.href="artisti/la.html";break;
        case 5: location.href="artisti/gnr.html";break;
    }
}