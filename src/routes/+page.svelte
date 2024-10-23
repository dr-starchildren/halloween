<script>
	import { loadSound, playSound } from '$lib/sounds.js';
	import { Howl } from 'howler';

	// Base path for your sounds
	const soundPath = '/audio/';
	let playing = $state(false);
	const background = new Howl({
		src: ['/audio/background-halloween.mp3'],
		html5: true,
		loop: true
	});
	// Sound files
	const sounds = [
		{ name: 'Zombie Roar', file: '01-zombie-finished.mp3' },
		{ name: 'Wolf Howl', file: '02-wolf-howl.mp3' },
		{ name: 'Zombie Growl', file: '03-zombie-growling.mp3' },
		{ name: 'Chainsaw', file: '04-chainsaw.mp3' },
		{ name: 'Witch Laugh', file: '05-witch-laugh.mp3' },
		{ name: 'Cat Hiss', file: '06-cat-hiss.mp3' },
		{ name: 'Ghost Whispers', file: '07-ghost-whispering.mp3' },
		{ name: 'Ghost scream', file: '08-ghost-scream.mp3' }
	];

	// Function to load and play a sound
	function loadAndPlay(file) {
		const sound = loadSound(`${soundPath}${file}`);
		sound.once('load', () => {
			playSound();
		});
	}

	function backgroundStartStop() {
		if (background.playing()) {
			playing = false;
			background.stop();
		} else {
			playing = true;
			background.play();
		}
	}
</script>

<main>
	<h1>Halloween Sound Player</h1>
	<div class="buttons">
		{#each sounds as sound}
			<button class="halloween-button" onclick={() => loadAndPlay(sound.file)}>{sound.name}</button>
		{/each}
	</div>
	<button class="halloween-button" onclick={backgroundStartStop}
		>{#if !playing}Start{:else}Stop{/if} Background</button
	>
</main>

<style>
	main {
		text-align: center;
		background: linear-gradient(135deg, rgba(46, 0, 62, 0.8), rgba(0, 0, 0, 0.8)),
			url('/spookyvine.webp');
		background-size: cover; /* Ensure the image covers the entire background */
		background-position: center;
		background-repeat: no-repeat;
		min-height: 100vh;
		color: #f2f2f2; /* Light text color for contrast */
		font-family: 'Creepster', cursive; /* Halloween-themed font */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0;
	}
	h1 {
		font-size: 3rem;
		margin-bottom: 2rem;
		color: #ff7518; /* Halloween orange */
	}

	button {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.buttons {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		max-width: 1200px;
	}

	.halloween-button {
		margin: 1rem;
		padding: 1rem 1rem;
		font-size: 1.5rem;
		color: #fff;
		background: linear-gradient(145deg, #320650ef, #584f4f);
		border: 2px solid #1d2657e1;
		border-radius: 8px;
		box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
		cursor: pointer;
		transition: all 0.3s ease;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.halloween-button:hover {
		background: linear-gradient(145deg, #800080, #50110ec5); /* Purple spooky gradient on hover */
		border-color: #4b0082;
		transform: scale(1.1); /* Slightly increase size on hover */
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.7); /* Stronger shadow */
	}

	.halloween-button:active {
		transform: scale(0.95); /* Reduce size slightly when clicked */
		box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.4); /* Reduce shadow on click */
	}

	/* Responsive design for mobile screens */
	@media (max-width: 768px) {
		h1 {
			font-size: 2.5rem;
		}

		.halloween-button {
			padding: 0.8rem 1.5rem;
			font-size: 1.2rem;
			margin: 0.8rem;
		}
	}

	@media (max-width: 480px) {
		h1 {
			font-size: 2rem;
		}

		.halloween-button {
			padding: 0.6rem 1.2rem;
			font-size: 1rem;
			margin: 0.6rem;
		}
	}
</style>
