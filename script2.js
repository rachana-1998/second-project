console.log("welcome to spotify");
let songindex =  0;
let audioElement=new Audio("songs/song1.mp3");
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let masterSongName=document.getElementById('masterSongName');
let songs = [
  { SongName: "ab to forever", filePath: "songs/song1.mp3", coverPath: "cover/cover1.jpeg" },
  { SongName: "ajj din chadhiya", filePath: "songs/song2.mp3", coverPath: "cover/cover2.jpeg" },
  { SongName: "beeten lamhe", filePath: "songs/song3.mp3", coverPath: "cover/cover3.jpeg" },
  { SongName: "barish", filePath: "songs/song4.mp3", coverPath: "cover/cover4.jpeg" },
  { SongName: "dile ye mera", filePath: "songs/song5.mp3", coverPath: "cover/cover5.jpeg" },
  { SongName: "dil ibaadat", filePath: "songs/song6.mp3", coverPath: "cover/cover6.jpeg" },
  { SongName: " guzarish", filePath: "songs/song7.mp3", coverPath: "cover/cover7.jpeg" },
  { SongName: "khuda jaane", filePath: "songs/song8.mp3", coverPath: "cover/cover8.jpeg" },
  { SongName: "sajde", filePath: "songs/song9.mp3", coverPath: "cover/cover9.jpeg" },
  {SongName:"tum ho mera pyar",filePath:"songs/song10.mp3",coverPath:"cover/cover10.jpeg"},
];
songitem.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('SongName')[0].innerText=songs[i].SongName;

})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause'); 
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause'); 
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/song${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
       
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>9){
        songindex=0;
    }
    else
    songindex+=1;
    audioElement.src=`songs/song${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause'); 
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else
    songindex-=1;
    audioElement.src=`songs/song${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause'); 
})
 