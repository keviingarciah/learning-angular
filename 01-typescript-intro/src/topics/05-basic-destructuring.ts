// Object destructuring
interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36.5,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

const song = "New Song";

const { audioVolume, songDuration, song: anotherSong, details } = audioPlayer;
const { author, year } = details;

console.log("Audio Volume: ", audioVolume);
console.log("Song Duration: ", songDuration);
console.log("Song: ", song);
console.log("Another Song: ", anotherSong);
console.log("Author: ", author);
console.log("Year: ", year);

// Array destructuring
const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [goku, vegeta, trunks, bibidi = "Not found"] = dbz;

console.error("Perzonaje 1: ", goku);
console.error("Perzonaje 2: ", vegeta);
console.error("Perzonaje 3: ", trunks);
console.error("Perzonaje 4: ", bibidi);

export {};
