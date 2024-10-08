/* © 2024. SumantDhonde All rights reserved. */
const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: " Dildara",
    name: "Vishal-Shekhar",
    source:
      "Audio/Dildara.mp3",
  },
  {
    title: "SubhanAllah",
    name: "Shilpa Rao and Sreerama Chandra",
    source:
      "Audio/SubhanAllah.mp3",
  },
  {
    title: "Ram Aayenge ",
    name: "Vishal Mishra",
    source:
      "Audio/Ram Aayenge.mp3",
  },
  {
    title: "Main Ishq Mein Hoon",
    name: "Manan Bhardwaj",
    source:
      "Audio/Main Ishq Mein Hoon.mp3",
  },
  {
    title: "Dil Tu Jaan Tu",
    name: "Gurnazar",
    source:
      "Audio/Dil Tu Jaan Tu.mp3 ",
  },

  {
    title: "Ve Kamleya",
    name: "Arjit Singh",
    source:
      "Audio/Ve Kamleya 2.mp3",
  },
  {
    title: "Sajni",
    name: "Arijit Singh and Ram Sampath",
    source:
      "Audio/Sajni.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});
// © 2024. shobhitDev All rights reserved.