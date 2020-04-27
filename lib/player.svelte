<script>
  import PlayIcon from './IconPlay.svelte'
  import PauseIcon from './icon_pause.svelte'
  import StopIcon from './icon_stop.svelte'

  // === props ===

  export let audioElement
  export const className = 'audio-player'

  // === state ===

  let loading = true
  let playing = false
  let classes = [className, 'root'].join(' ')
  let playTime = 0
  let totalTime = 0
  let marker

  $: {
    let percentPlayed = Math.floor((100 * playTime) / totalTime) + '%'

    if (marker) {
      marker.style.left = percentPlayed
    }
  }

  // === setup ===

  console.log(audioElement)
  audioElement.style.display = 'none'

  function init() {
    totalTime = isNaN(audioElement.duration) ? 0 : audioElement.duration
    if (totalTime) {
      loading = false
    }
  }

  if (audioElement.readyState >= 2) {
    init()
  }

  audioElement.addEventListener('canplay', init)
  audioElement.addEventListener('ended', stop)
  audioElement.addEventListener('timeupdate', function() {
    playTime = audioElement.currentTime
  })

  // === events ===

  function play() {
    if (!loading) {
      playing = true
      audioElement.play()
    }
  }

  function pause() {
    playing = false
    audioElement.pause()
  }

  function stop() {
    pause()
    audioElement.fastSeek(0)
  }

  // === helpers ===

  function formatTime(time) {
    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60)
    return minutes + ':' + ('0' + seconds).substr(-2)
  }
</script>

<style>
  .root {
    background-color: black;
    color: white;
    display: inline-flex;
  }
  button {
    position: relative;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
  }
  button span {
    position: absolute;
    font-size: 1px;
    color: black;
  }
  .timeline {
    position: relative;
    width: 300px;
    max-width: 50vw;
    height: 15px;
    margin: auto 0;
  }
  .timeline::after {
    content: ' ';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 5px;
    background: white;
    z-index: 0;
    margin: auto;
  }
  .marker {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 5px;
    height: 15px;
    background-color: white;
    border: 3px solid black;
    z-index: 1;
    margin: auto;
    cursor: grab;
  }
  p {
    margin: auto;
    padding: 0 1em;
  }
</style>

<div class={classes}>
  {#if playing}
    <button class="button-pause" on:click={pause}>
      <span>Pause</span>
      <PauseIcon />
    </button>
  {:else}
    <button class="button-play" on:click={play}>
      <span>Play</span>
      <PlayIcon />
    </button>
  {/if}
  <button class="button-stop" on:click={stop}>
    <span>Stop</span>
    <StopIcon />
  </button>
  <div class="timeline">
    <span class="marker" bind:this={marker} />
  </div>
  <p>{formatTime(playTime)} / {formatTime(totalTime)}</p>
</div>
