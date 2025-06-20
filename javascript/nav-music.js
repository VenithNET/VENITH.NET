// Volume
document.querySelectorAll("audio").forEach((audio) => {
  audio.volume = 0.5; // Volume range is from 0.0 (silent) to 1.0 (maximum)
});

// Shuffle Playlist
function fisherYatesShuffle(songs) {
  for (let i = songs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [songs[i], songs[j]] = [songs[j], songs[i]];
  }
  return songs;
}

// Playlist of songs
const songs = [
  { title: "Monkeys - Mario Artist: Paint Studio", url: "music/Monkeys.mp3" },
{ title: "24 Wave - The Silver Case 2425", url: "music/24Wave.mp3" },
{ title: "Aspertia City - Pokemon Black 2 & White 2", url: "music/AspertiaCity.mp3" },
{ title: "Challenge Mode - Pikmin", url: "music/Challenge.mp3" },
{ title: "Coin Attack - Mario Golf: Toadstool Tour", url: "music/CoinAttack.mp3" },
{ title: "White Ice - Bomberman 64", url: "music/WhiteIce.mp3" },
{ title: "Main Menu - Kirby's Dream Collection", url: "music/KirbyMainMenu.mp3" },
{ title: "A Dream of Clouds - Kirby's Return to Dream Land", url: "music/DreamingOfClouds.mp3" },
{ title: "Embraced - Briganty: The Roots of Darkness", url: "music/Embraced.mp3" },
{ title: "Floaroma Town - Pokemon Diamond & Pearl", url: "music/FloaromaTown.mp3" },
{ title: "Forest of Hope - Pikmin", url: "music/ForestOfHope.mp3" },
{ title: "Fourside - Earthbound", url: "music/Fourside.mp3" },
{ title: "Friends 1 - Kirby's Dreamland 3", url: "music/Friends1.mp3" },
{ title: "Friends 2 - Kirby's Dreamland 3", url: "music/Friends2.mp3" },
{ title: "Garage - Gardenscapes", url: "music/Garage.mp3" },
{ title: "Guiding Wind - Another Mind", url: "music/GuidingWind.mp3" },
{ title: "Heart Star Unearned - Kirby's Dreamland 3", url: "music/HeartStarUnearned.mp3" },
{ title: "High Score - Pikmin 2", url: "music/Highscore.mp3" },
{ title: "High Scores - Hamsterball", url: "music/HighScoreHB.mp3" },
{ title: "Home Sweet Home - Earthbound", url: "music/HomeSweetHome.mp3" },
{ title: "Hospital - Earthbound", url: "music/Hospital.mp3" },
{ title: "Humilau City Gym - Pokemon Black 2 & White 2", url: "music/HumilauCityGym.mp3" },
{ title: "Jellyfloat Pool - Pikmin 2", url: "music/JellyfloatPool.mp3" },
{ title: "Milky - Bomberman Hero", url: "music/Milky.mp3" },
{ title: "Mt. Dedede - Kirby's Dreamland 3", url: "music/MtDedede.mp3" },
{ title: "Mystic Marsh - Pikmin 2", url: "music/MysticMarsh.mp3" },
{ title: "Nuvema Town - Pokemon Black & White", url: "music/NuvemaTown.mp3" },
{ title: "On the Beach at Dusk - Pokemon Mystery Dungeon: Explorers of Sky", url: "music/OnTheBeachAtDusk.mp3" },
{ title: "Options - Pikmin 2", url: "music/Options.mp3" },
{ title: "Perplexing Pool - Pikmin 2", url: "music/PerplexingPool.mp3" },
{ title: "Piklopedia - Pikmin 2", url: "music/Piklopedia.mp3" },
{ title: "Pressure - Briganty: The Roots of Darkness", url: "music/Pressure.mp3" },
{ title: "Rainbow Palace - Bomberman 64", url: "music/RainbowPalace.mp3" },
{ title: "Rainbow Resort - Kirby's Air Ride", url: "music/RainbowResort.mp3" },
{ title: "Ravaged Rustworks - Hey! Pikmin", url: "music/RavagedRustworks.mp3" },
{ title: "Reconciliation - Another Mind", url: "music/Reconciliation.mp3" },
{ title: "Ripple Star - Kirby's Epic Yarn", url: "music/RippleStar.mp3" },
{ title: "Room Track #3 - Gardenscapes", url: "music/RoomTrack3.mp3" },
{ title: "Sad Village - Drawn to Life", url: "music/SadVillage.mp3" },
{ title: "Serenity - Briganty: The Roots of Darkness", url: "music/Serenity.mp3" },
{ title: "Shop - New Super Mario Bros. 2", url: "music/Shop.mp3" },
{ title: "Sizzling Precipice - Hey! Pikmin", url: "music/SizzlingPrecipice.mp3" },
{ title: "Snapshot - Briganty: The Roots of Darkness", url: "music/Snapshot.mp3" },
{ title: "Summers, Eternal Tourist Trap - Earthbound", url: "music/Summers.mp3" },
{ title: "Sweltering Parchlands - Hey! Pikmin", url: "music/SwelteringParchlands.mp3" },
{ title: "Tearoom - The Silver Case 2425", url: "music/Tearoom.mp3" },
{ title: "The Forest - Pikuniku", url: "music/TheForest.mp3" },
{ title: "Threed, Free at Last - Earthbound", url: "music/ThreedFreeAtLast.mp3" },
{ title: "Tower Race - Hamsterball", url: "music/TowerRace.mp3" },
{ title: "Credits - Bomberman Hero", url: "music/Credits.mp3" },
{ title: "8 Bit Retro Funk - David Renda", url: "music/8_Bit_Retro_Funk_-_David_Renda.mp3" },
{ title: "8 Bit Surf - David Renda", url: "music/8_Bit_Surf_-_David_Renda.mp3" },
{ title: "A Bit Of Hope - David Fesliyan", url: "music/A_Bit_Of_Hope_-_David_Fesliyan.mp3" },
{ title: "Arcade Kid - David Renda", url: "music/Arcade_Kid_-_David_Renda.mp3" },
{ title: "Hall of the Mountain King", url: "music/HallofMountainKing.mp3" },
{ title: "Mii", url: "music/Mii.mp3" },
{ title: "Old Video Game Music - David Fesliyan", url: "music/Old_Video_Game_Music_-_David_Fesliyan.mp3" },
{ title: "Overture", url: "music/Overture.ogg" },
{ title: "aa", url: "music/aa.ogg" },
{ title: "background", url: "music/background.mp3" },
{ title: "background 2", url: "music/background2.mp3" },
{ title: "background Original", url: "music/backgroundOrig.mp3" },
{ title: "battle", url: "music/battle.mp3" },
{ title: "ca", url: "music/ca.ogg" },
{ title: "city", url: "music/city.mp3" },
{ title: "de", url: "music/de.mp3" },
{ title: "desert", url: "music/desert.mp3" },
{ title: "drylands", url: "music/drylands.mp3" },
{ title: "ed", url: "music/ed.mp3" },
{ title: "fiery", url: "music/fiery.mp3" },
{ title: "fiery 2", url: "music/fiery2.mp3" },
{ title: "fiery 3", url: "music/fiery3.mp3" },
{ title: "forest", url: "music/forest.mp3" },
{ title: "forest 2", url: "music/forest2.mp3" },
{ title: "holyland", url: "music/holyland.mp3" },
{ title: "holyland 2", url: "music/holyland2.mp3" },
{ title: "mountains", url: "music/mountains.mp3" },
{ title: "nc", url: "music/nc.mp3" },
{ title: "op", url: "music/op.mp3" },
{ title: "oops", url: "music/oops.mp3" },
{ title: "sho3", url: "music/sho3.mp3" },
{ title: "smg", url: "music/smg.mp3" },
{ title: "song", url: "music/song.mp3" },
{ title: "sp", url: "music/sp.mp3" },
{ title: "starfest", url: "music/starfest.ogg" },
{ title: "su1", url: "music/su1.mp3" },
{ title: "super", url: "music/super.mp3" },
{ title: "swamp", url: "music/swamp.mp3" },
{ title: "village", url: "music/village.mp3" }
];


fisherYatesShuffle(songs);

// Define Music Player
const NAV_MUSIC = document.getElementById("navMusic");
const BUTTON_PLAY = document.getElementById("navMusicPlay");
const BUTTON_PAUSE = document.getElementById("navMusicPause");
const BUTTON_PREVIOUS = document.getElementById("navMusicPrevious");
const BUTTON_NEXT = document.getElementById("navMusicNext");
const CURRENT_SONG_INFO = document.getElementById("currentSongInfo");

let currentIndex = 0;
let currentTime = 0;
let isPlaying = false; // Track play/pause state

// Save state to sessionStorage
function saveState() {
  sessionStorage.setItem("isPlaying", isPlaying);
}

// Load state from sessionStorage
function loadState() {
  const savedIsPlaying = sessionStorage.getItem("isPlaying");

  if (savedIsPlaying !== null) {
    isPlaying = savedIsPlaying === "true";
  }
}

// Load the current song
function loadSong(index) {
  if (index < 0 || index >= songs.length) return;
  NAV_MUSIC.src = songs[index].url;
  CURRENT_SONG_INFO.innerText = `Featured song: ${songs[index].title}`;
  NAV_MUSIC.load();
}

// Update button states based on `isPlaying`
function updateButtonStates() {
  if (isPlaying) {
    BUTTON_PLAY.classList.add("active");
    BUTTON_PAUSE.classList.remove("active");
  } else {
    BUTTON_PAUSE.classList.add("active");
    BUTTON_PLAY.classList.remove("active");
  }
}

// Event listeners for playback controls
BUTTON_PLAY.addEventListener("click", function () {
  isPlaying = true;
  NAV_MUSIC.play();
  updateButtonStates();
  saveState();
});

BUTTON_PAUSE.addEventListener("click", function () {
  isPlaying = false;
  NAV_MUSIC.pause();
  updateButtonStates();
  saveState();
});

BUTTON_PREVIOUS.addEventListener("click", function () {
  currentIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
  currentTime = 0; // Reset time when switching songs
  loadSong(currentIndex);
  if (isPlaying) {
    NAV_MUSIC.play();
  }
  updateButtonStates();
  saveState();
});

BUTTON_NEXT.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % songs.length;
  currentTime = 0; // Reset time when switching songs
  loadSong(currentIndex);
  if (isPlaying) {
    NAV_MUSIC.play();
  }
  updateButtonStates();
  saveState();
});

// Autoplay next song when current ends
NAV_MUSIC.addEventListener("ended", function () {
  currentIndex = (currentIndex + 1) % songs.length;
  currentTime = 0; // Reset time when a new song starts
  loadSong(currentIndex);
  if (isPlaying) {
    NAV_MUSIC.play();
  }
  saveState();
});

// Initial load
window.addEventListener("load", () => {
  loadState();
  loadSong(currentIndex);
  if (isPlaying) {
    NAV_MUSIC.play();
  }
  updateButtonStates();
});

// Pause all audio if user press play on a audio element
document.addEventListener(
  "play",
  function (e) {
    var audios = document.getElementsByTagName("audio");
    for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
        audios[i].pause();
      }
    }
  },
  true
);
