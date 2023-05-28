let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById('masterSongName');
let songs = [
    {songName: "Ladki kyon", filePath: "1.mp3", coverPath: "Hum_Tum.jpg"},
    {songName: "Kajra Re", filePath: "2.mp3", coverPath: "Kajra_Re.jpg"},
    {songName: "Love mera hit hit", filePath: "3.mp3", coverPath: "Love_mera.jpg"},
    {songName: "Aakhon me teri", filePath: "4.mp3", coverPath: "Aakhon_me.jpg"},
    {songName: "Labon ko", filePath: "5.mp3", coverPath: "Bhool_bhulaiyaa.jpg"},
    {songName: "Dhoom Again", filePath: "6.mp3", coverPath: "Dhoom_2.jpg"}
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

audioElement.addEventListener('timeupdate',updTime);

myProgressBar.addEventListener('change',updProgressBar);

function updTime()
{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
}

function updProgressBar()
{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
}

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle'); 
        element.classList.add('fa-play-circle');  
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(e.target.id=='masterPlay') // Pause/Play button pressed
        {
            if(audioElement.paused || audioElement.currentTime<=0)
            {
                audioElement.play();
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
                gif.style.opacity = 1;
            }
            else
            {
                audioElement.pause();
                masterPlay.classList.remove('fa-pause-circle');
                masterPlay.classList.add('fa-play-circle');
                gif.style.opacity = 0;
            }
        }
        else
        {
            makeAllPlays();
            gif.style.opacity = 1;
            index = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');  
            if(index==1)
                audioElement.src = '1.mp3';
            else if(index==2)
                audioElement.src = '2.mp3';
            else if(index==3)
                audioElement.src = '3.mp3';
            else if(index==4)
                audioElement.src = '4.mp3';
            else if(index==5)
                audioElement.src = '5.mp3';
            else
                audioElement.src = '6.mp3';
            audioElement.currentTime = 0;
            audioElement.play();
            masterSongName.innerText = songs[index-1].songName;
            masterPlay.classList.remove('fa-play-circle'); 
            masterPlay.classList.add('fa-pause-circle');
        }
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5)
        songIndex = 0;
    else
        songIndex+=1;

    if(songIndex==0)
        audioElement.src = '1.mp3';
    else if(songIndex==1)
        audioElement.src = '2.mp3';
    else if(songIndex==2)
        audioElement.src = '3.mp3';
    else if(songIndex==3)
        audioElement.src = '4.mp3';
    else if(songIndex==4)
        audioElement.src = '5.mp3';
    else
        audioElement.src = '6.mp3';

    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle'); 
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
        songIndex = 5;
    else
        songIndex-=1;

    if(songIndex==0)
        audioElement.src = '1.mp3';
    else if(songIndex==1)
        audioElement.src = '2.mp3';
    else if(songIndex==2)
        audioElement.src = '3.mp3';
    else if(songIndex==3)
        audioElement.src = '4.mp3';
    else if(songIndex==4)
        audioElement.src = '5.mp3';
    else
        audioElement.src = '6.mp3';

    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle'); 
    masterPlay.classList.add('fa-pause-circle');
})
