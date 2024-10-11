console.log("Welcome to Spotify");

// initialization in js                                                  

let songIndex = 0;
let audioElement = new Audio('images/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar'); 
let gif = document.getElementById('gif'); 
//let currentSongName = document.getElementById('currentSongName'); 
let songItems = Array.from(document.getElementsByClassName('songItem'));

const songList = [
    "1.mp3",
    "2.mp3",
    "3.mp3",
    "4.mp3",
    "5.mp3"
];



let songs = [

    { songName : "Let me Fuck you - Justin Bieber" , filePath : "images/1.mp3", coverPath : "images/DJSnakeLetMeLoveYou.jpg"},
    { songName : "Big Fucking Dawgs - Hanumankind" , filePath : "images/2.mp3", coverPath : "images/Big-Dawgs-Hanumankind-pagalall.com_.jpg.webp"},
    { songName : "Born to Shine - Diljit Doshang" , filePath : "images/3.mp3", coverPath : "images/128Born to Shine - GOAT 128 Kbps.jpg"},
    { songName : "Fucking Billionaire - Yo Yo Honey Singh" , filePath : "images/4.mp3", coverPath : "images/glory-yo-yo-honey-singh.webp"},
    { songName : "Wo Humsafar Tha - QB" , filePath : "images/5.mp3", coverPath : "images/woh-humsafar-cover-image.webp"}
 
]

songItems.forEach((element , i) => {
  //  console.log(element , i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;                // gets the cover image from the above songs array
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;    // gets the song name from above songs array
})



//audioElement.play();

//play pause button
masterPlay.addEventListener('click' , () => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})

// event listening
audioElement.addEventListener('timeupdate' , ()=> {
    //update  seekbar 

    progress = parseInt( ( audioElement.currentTime / audioElement.duration ) * 100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change' , ()=> {
    audioElement.currentTime =( ( myProgressBar.value * audioElement.duration) / 100 );

} )


const makeAllPlays = () => {
    // Instead of looping, manually set each button to play state using its unique id
    document.getElementById('songItemPlay0').classList.add('fa-circle-play');
    document.getElementById('songItemPlay0').classList.remove('fa-circle-pause');
    document.getElementById('songItemPlay1').classList.add('fa-circle-play');
    document.getElementById('songItemPlay1').classList.remove('fa-circle-pause');
    document.getElementById('songItemPlay2').classList.add('fa-circle-play');
    document.getElementById('songItemPlay2').classList.remove('fa-circle-pause');
    document.getElementById('songItemPlay3').classList.add('fa-circle-play');
    document.getElementById('songItemPlay3').classList.remove('fa-circle-pause');
    document.getElementById('songItemPlay4').classList.add('fa-circle-play');
    document.getElementById('songItemPlay4').classList.remove('fa-circle-pause');
    // Add more if you have more play buttons
};

// Add click event listeners for each play button individually
document.getElementById('songItemPlay0').addEventListener('click', (e) => {
    makeAllPlays();
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = "images/1.mp3";
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
});

document.getElementById('songItemPlay1').addEventListener('click', (e) => {
    makeAllPlays();
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = "images/2.mp3";
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
});

document.getElementById('songItemPlay2').addEventListener('click', (e) => {
    makeAllPlays();
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src ="images/3.mp3";
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
});

document.getElementById('songItemPlay3').addEventListener('click', (e) => {
    makeAllPlays();
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = "images/4.mp3";
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
});

document.getElementById('songItemPlay4').addEventListener('click', (e) => {
    makeAllPlays();
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = "images/5.mp3";
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
});




// ----------------------------------------------------------------------------------------------------------------------------------------------------//


// Next button functionality
document.getElementById('next').addEventListener('click', () => {
    //just to store audioElement in song
    const currentSong = songList.find(song => audioElement.src.endsWith(song));
    let nextIndex = (songList.indexOf(currentSong) + 1) % songList.length;
    audioElement.src = `images/${songList[nextIndex]}`;
  //  currentSongName.innerText = songList[nextIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
});

// Previous button functionality
document.getElementById('previous').addEventListener('click', () => {
    const currentSong = songList.find(song => audioElement.src.endsWith(song));
    let prevIndex = (songList.indexOf(currentSong) - 1 + songList.length) % songList.length;
    audioElement.src = `images/${songList[prevIndex]}`;
   // currentSongName.innerText = songList[prevIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
});


