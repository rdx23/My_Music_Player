let progress = document.getElementById("progress");
let track_art = document.querySelector(".track-art");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songTitle = document.getElementById("song-title");
let songArtist = document.getElementById("song-artist");

let updateInterval;
let songIndex = 0; // Current song index

// Array of songs with title, artist, and image
let songs = [
  {
    url: "music/Jawan_ Not Ramaiya Vastavaiya Extended Version (Hindi)_ Shah Rukh Khan _Atlee _Anirudh _Nayanthara.mp4",
    img: "images/maxresde.jpg",
    title: "Not Ramaiya Vastavaiya",
    artist: "Anirudh Ravichander, Vishal Dadlani, Shilpa Rao",
  },
  {
    url: "music/videoplayback.mp4",
    img: "images/hq720.jpg",
    title: "Aayi Nai",
    artist: "Pawan Singh, Simran Choudhary, Divya Kumar & Sachin-Jigar",
  },
  {
    url: "music/Aaj Se Teri - Lyrical _ Padman _ Akshay Kumar & Radhika Apte _ Arijit Singh _ Amit Trivedi.mp4",
    img: "images/maxresdefaultt.jpg",
    title: "Aaj se tera",
    artist: "Arijit Singh, Amit Trivedi",
  },
  {
    url: "music/Bol Na Halke Halke _ Full Song _ Jhoom Barabar Jhoom _ Abhishek, Preity _ Shankar-Ehsaan-Loy, Gulzar.mp4",
    img: "images/maxresdefault.jpg",
    title: "Bol Na Halke Halke",
    artist: "Shankar-Ehsaan-Loy, Gulzar",
  },
  {
    url: "music/Falak Tak Song _ Tashan _ Akshay Kumar, Kareena Kapoor, Udit Narayan, Mahalaxmi Iyer, Vishal-Shekhar.mp4",
    img: "images/maxresdefaul.jpg",
    title: "Falak Tak",
    artist: "Udit Narayan, Mahalaxmi Iyer, Vishal-Shekhar",
  },
  {
    url: "music/nadadiyaan.mp4",
    img: "images/maxresdefauit.jpg",
    title: "Nadadiyaan",
    artist: "Akshath",
  },
  {
    url: "music/O Meri Laila _ Laila Majnu _ Atif Aslam & Jyotica Tangri _ Avinash Tiwary,Tripti Dimri _ Joi, Irshad.mp4",
    img: "images/maxre.jpg",
    title: "O Meri Laila",
    artist: "Atif Aslam & Jyotica Tangri",
  },
  {
    url: "music/Tujh Mein Rab Dikhta Hai Song _ Rab Ne Bana Di Jodi _ Shah Rukh Khan, Anushka Sharma _ Roop Kumar.mp4",
    img: "images/maxres.jpg",
    title: "Tujh Mein Rab Dikhta Hai",
    artist: "Sachin-Jigar, Jasmine Sandlas, Amitabh Bhattacharya",
  },
  {
    url: "music/Haule Haule - Full Song _ Rab Ne Bana Di Jodi _ Shah Rukh Khan _ Anushka Sharma _ Sukhwinder Singh.mp4",
    img: "images/max.jpg",
    title: "Haule Haule",
    artist: "Sukhwinder Singh",
  },
  {
    url: "music/taras.mp4",
    img: "images/Munjya-Hindi-2024-20240617102525-500x500.jpg",
    title: "Taras ne Aya",
    artist: "Sachin-Jigar, Jasmine Sandlas, Amitabh Bhattacharya",
  },
];

// Load the first song
loadSong(songIndex);

function loadSong(index) {
  song.src = songs[index].url;
  track_art.style.backgroundImage = "url(" + songs[index].img + ")"; // Fixed array access
  songTitle.textContent = songs[index].title;
  songArtist.textContent = songs[index].artist;
  song.load();
  song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
  };
  song.play();
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
  updateInterval = setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    clearInterval(updateInterval);
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    updateInterval = setInterval(() => {
      progress.value = song.currentTime;
    }, 500);
  }
}

function nextSong() {
  songIndex = (songIndex + 1) % songs.length; // Move to the next song
  loadSong(songIndex);
}

function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length; // Move to the previous song
  loadSong(songIndex);
}

progress.onchange = function () {
  song.currentTime = progress.value;
  if (!ctrlIcon.classList.contains("fa-pause")) {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    updateInterval = setInterval(() => {
      progress.value = song.currentTime;
    }, 500);
  }
};
