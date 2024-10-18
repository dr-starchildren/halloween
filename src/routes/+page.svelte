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
		{ name: 'Ghost Whispering', file: '07-ghost-whispering.mp3' },
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
	<div>
		{#each sounds as sound}
			<button class="halloween-button" onclick={() => loadAndPlay(sound.file)}
				>Play {sound.name}</button
			>
		{/each}
	</div>
	<button class="halloween-button" onclick={backgroundStartStop}
		>{#if !playing}Start{:else}Stop{/if} Background</button
	>
</main>

<style>
	main {
		text-align: center;
		background: linear-gradient(135deg, #2e003e, #000000); /* Purple to Black gradient */
		min-height: 100vh;
		color: #f2f2f2; /* Light text color for contrast */
		font-family: 'Creepster', cursive; /* Halloween-themed font */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0;
	}

	button {
		margin: 0.5rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
	}

	.halloween-button {
		margin: 1rem;
		padding: 1rem 2rem;
		font-size: 1.5rem;
		color: #fff;
		background: linear-gradient(145deg, #ff7518, #ff4500);
		border: 2px solid #ff7518;
		border-radius: 8px;
		box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
		cursor: pointer;
		transition: all 0.3s ease;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.halloween-button:hover {
		background: linear-gradient(145deg, #800080, #4b0082); /* Purple spooky gradient on hover */
		border-color: #4b0082;
		transform: scale(1.1); /* Slightly increase size on hover */
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.7); /* Stronger shadow */
	}

	.halloween-button:active {
		transform: scale(0.95); /* Reduce size slightly when clicked */
		box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.4); /* Reduce shadow on click */
	}
</style>
