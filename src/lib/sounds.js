import { Howl } from 'howler';

let soundInstance = null;
// Function to load a sound into the Howler instance
export function loadSound(src) {
	if (soundInstance) {
		soundInstance.unload(); // Unload the current sound
	}

	// Create a new Howler instance for the current sound
	soundInstance = new Howl({
		src: [src],
		html5: true // Use HTML5 audio, helps with larger files or streaming
	});

	return soundInstance;
}

// Function to play the loaded sound
export function playSound() {
	if (soundInstance) {
		soundInstance.play();
	} else {
		console.error('No sound loaded!');
	}
}
