<script>
  export let audioElement
  export const className = 'audio-player'

  audioElement.style.display = 'none'

  console.log(audioElement)
</script>

<style>
  div {
    background-color: tomato;
  }
</style>

<div class={className}>hello world!</div>
