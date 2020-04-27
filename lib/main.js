import Player from './player.svelte'

export function initPlayer({ audioElement = null } = {}) {
	if (!audioElement || !(audioElement instanceof Audio)) {
		console.error('not a valid audio element', audioElement)
		return
	}
	const parent = audioElement.parentNode
	const div = document.createElement('div')
	parent.insertBefore(div, audioElement)

	new Player({
		target: div,
		props: {
			audioElement: audioElement,
		},
	})
}

export default initPlayer