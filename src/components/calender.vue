<template>
  <q-media-player
  type="video"
  background-color="black"
  :muted="muted"
  radius="1rem"
  :autoplay="false"
  :show-big-play-button="true"
  :sources="video.sources"
  :poster="video.poster"
  :tracks="video.tracks"
  track-language="English"
  @ended="onEnded"
>
  <template v-if="overlay" v-slot:overlay>
    <div>
      <img
        src="quasar-logo.png"
        style="width: 30vw; max-width: 50px; opacity: 0.25;"
      >
    </div>
  </template>
</q-media-player>


</template>

<script>

export default {
data () {
  return {
    video: {
      label: 'Tears of Steel',
      poster: 'media/TearsOfSteel/TearsOfSteel.jpeg',
      sources: [
        {
          src: 'http://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/tears_of_steel_720p.mov',
          type: 'video/mp4'
        }
      ],
      tracks: [
        {
          src: 'media/TearsOfSteel/TOS-en.vtt',
          kind: 'subtitles',
          srclang: 'en',
          label: 'English'
        },
        {
          src: 'media/TearsOfSteel/TOS-de.vtt',
          kind: 'subtitles',
          srclang: 'de',
          label: 'German'
        },
        {
          src: 'media/TearsOfSteel/TOS-es.vtt',
          kind: 'subtitles',
          srclang: 'es',
          label: 'Spanish'
        },
        {
          src: 'media/TearsOfSteel/TOS-fr-Goofy.vtt',
          kind: 'subtitles',
          srclang: 'fr',
          label: 'French'
        },
        {
          src: 'media/TearsOfSteel/TOS-it.vtt',
          kind: 'subtitles',
          srclang: 'it',
          label: 'Italian'
        },
        {
          src: 'media/TearsOfSteel/TOS-nl.vtt',
          kind: 'subtitles',
          srclang: 'nl',
          label: 'Dutch'
        }
      ]
    }
  }
}


}
</script>

<style>

</style>