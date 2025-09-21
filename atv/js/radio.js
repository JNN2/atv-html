
const audio = new Audio();
audio.volume = 0.8;

const now = document.getElementById("now");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const vol = document.getElementById("vol");
const playlistDiv = document.getElementById("playlist");


const playlist = [
  { name: "Rádio MPB", src: "https://live.hunter.fm/mpb_high" },
  { name: "Rádio Rock", src: "https://live.hunter.fm/rock_high" },
  { name: "Rádio Sertanejo", src: "https://live.hunter.fm/sertanejo_high" }
];

let current = 0;


playlist.forEach((station, index) => {
  const btn = document.createElement("button");
  btn.textContent = station.name;
  btn.onclick = () => {
    current = index;
    loadStation();
    audio.play();
  };
  playlistDiv.appendChild(btn);
});


function loadStation() {
  audio.src = playlist[current].src;
  now.textContent = "Tocando: " + playlist[current].name;
}


playBtn.onclick = () => {
  if (!audio.src) loadStation();
  audio.play();
};

pauseBtn.onclick = () => {
  audio.pause();
  now.textContent = "Parado";
};

vol.oninput = () => {
  audio.volume = vol.value;
};
