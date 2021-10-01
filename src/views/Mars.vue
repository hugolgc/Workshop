<template>
  <main class="calc__screen flex-auto flex items-center">
    <section class="relative max-w-screen-xl mx-auto px-8 flex-auto flex jsutify-between items-center">
      <div>
        <h2 class="text-8xl font-bold leading-slug">Mars</h2>
        <div class="pt-12 pb-24 space-y-8">
          <p class="text-xl opacity-70">54,7 millions de km de la Terre</p>
          <p class="text-xl opacity-70">196 millions de km du Soleil</p>
        </div>
        <div class="flex wrap gap-16">
          <div class="flex-none space-y-2">
            <h3 class="text-orange text-sm font-semibold">TEMPÉRATURE MOY.</h3>
            <p class="text-4xl">-53°C</p>
          </div>
          <div class="flex-none space-y-2">
            <h3 class="text-orange text-sm font-semibold">RÉVOLUTION</h3>
            <p class="text-4xl">687j</p>
          </div>
          <div class="flex-none space-y-2">
            <h3 class="text-orange text-sm font-semibold">ROTATION</h3>
            <p class="text-4xl">24h40m</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 "></div>
      <iframe name="planet" id="planet" src="https://my.spline.design/mars-b1512584a4f8b101ff83da4907df6c8c/" frameborder="0"></iframe>
    </section>
  </main>
  <section class="slider w-full max-w-screen-xl mx-auto px-8 pt-16 pb-24">
    <img
      v-for="photo in photos"
      :key="photo.id"
      :src="photo.url"
      class="rounded-2xl"
    />
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      photos: [
        { id: 1, url: require('../assets/4.png') },
        { id: 2, url: require('../assets/2.jpeg') },
        { id: 3, url: require('../assets/3.png') },
        { id: 4, url: require('../assets/5.png') }
      ]
    }
  },
  mounted() {
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=wFrvfgxupy7lvs5ZFZqrSBIOCki0Uuv0Sffo5r6y')
    $('.slider').slick({
      dots: false,
      prevArrow: false,
      nextArrow: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000
    })
  }
}
</script>