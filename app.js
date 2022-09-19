const backToFilesList=document.getElementById("backToFilesList");
const filesList=document.getElementById("filesList");
const playedScreen=document.getElementById("playedScreen");
const bigRoundDisc=document.getElementById("bigRoundDisc");

const body=document.querySelector("body");

const playedScreenPLayButton=document.getElementById("playedScreenPLayButton");
const listScreenPLayButton=document.getElementById("listScreenPLayButton");

const playmusic=document.getElementById("playmusic");

const soundIcon=document.getElementById("soundIcon");


/* CHANGE PLAY AND PASUE ICONS And Play And Pause Music*/
function changeIcon(){
    if (listScreenPLayButton.classList.contains("fa-pause") || playedScreenPLayButton.classList.contains("fa-pause"))  {
        listScreenPLayButton.classList.remove("fa-pause");
        playedScreenPLayButton.classList.remove("fa-pause");

        listScreenPLayButton.classList.add("fa-play");
        playedScreenPLayButton.classList.add("fa-play");
        soundIcon.style.display="none"
        playmusic.pause()


    }
    else{
        listScreenPLayButton.classList.remove("fa-play");
        playedScreenPLayButton.classList.remove("fa-play");

        listScreenPLayButton.classList.add("fa-pause");
        playedScreenPLayButton.classList.add("fa-pause");
        soundIcon.style.display="block"

        if(body.clientWidth <= 768){
            soundIcon.style.display="none";
        }
        
        playmusic.play()
    }
}

function muteMusic(){
   
    if (playmusic.muted != true){
        playmusic.muted=true;
        soundIcon.style.color="red";
    }
    
    else{
        playmusic.muted=false;
        soundIcon.style.color="gray";

    }

}


/* show display of the list songs*/ 
function goToList(){

    if (filesList.style.display != "flex"){
        filesList.style.display="flex";
        playedScreen.style.display="none";
    }

    else{
        filesList.style.display="none";
        playedScreen.style.display="flex"
    }
}

/* show played screen when clicked to the song cover*/ 
function goToPlayedScreen(){
    if (playedScreen.style.display != "flex"){
        filesList.style.display="none";
        playedScreen.style.display="flex";
    }

}


