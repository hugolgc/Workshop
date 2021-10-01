<template>
  <main class="calc__screen flex-auto flex items-center">
    <section class="relative max-w-screen-xl mx-auto px-8 flex-auto flex jsutify-between items-center">
      <div>
        <h2 class="text-8xl font-bold leading-slug">Terre</h2>
        <div class="pt-12 pb-24 space-y-8">
          <p class="text-xl opacity-70">143 millions de km du Soleil</p>
          <p class="text-xl opacity-70 flex">23 milliards de km de Voyager 1</p>
        </div>
        <div class="flex wrap gap-16">
          <div class="flex-none space-y-2">
            <h3 class="text-orange text-sm font-semibold">ECV MÉTÉO</h3>
            <p class="text-4xl">19°C</p>
          </div>
          <div class="flex-none space-y-2">
            <h3 class="text-orange text-sm font-semibold">HEURE</h3>
            <p class="text-4xl">{{ getTime }}</p>
          </div>
          <div class="flex-none space-y-2">
            <h3 class="text-orange text-sm font-semibold">POPULATION</h3>
            <p class="text-4xl">{{ format(population) }}</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 "></div>
      <iframe name="planet" id="planet" src="https://my.spline.design/earth-ab2ed1af4868234be933309c411d4e35/" frameborder="0"></iframe>
    </section>
  </main>
  <section class="pt-16">
    <div id="map" class="w-screen h-screen border-t-4 border-orange"></div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data() {
    return {
      population: parseInt(localStorage.getItem('population')) || '',
      time: new Date(),
      market: false,
      map: false
    }
  },
  methods: {
    format(number) {
      return number.toLocaleString()
    },
    setStation() {
      axios.get('/api.json').then(({ data }) => {
      // axios.get('http://api.open-notify.org/iss-now.json').then(({ data }) => {
        this.map.setView([data.iss_position.latitude, data.iss_position.longitude], 3)
        let icon = L.icon({
          iconUrl: 'https://icons.iconarchive.com/icons/goodstuff-no-nonsense/free-space/256/international-space-station-icon.png',
          iconSize: [50, 50], iconAnchor: [22, 94], popupAnchor: [-3, -76]
        })
        if (this.marker) map.removeLayer(this.marker)
        this.marker = new L.marker([data.iss_position.latitude, data.iss_position.longitude], { icon: icon })
        this.map.addLayer(this.marker)
      })
    }
  },
  computed: {
    getTime() {
      return `${ this.time.getHours() }:${ this.time.getMinutes() }`
    }
  },
  mounted() {

    if (!localStorage.getItem('population')) {
      localStorage.setItem('population', 7895253181)
      this.population = 7895253181
    }

    setInterval(() => {
      this.population = this.population + (Math.floor(Math.random() * 10))
      localStorage.setItem('population', this.population)
      this.time = new Date()
    }, 1000)

    this.map = L.map('map')

    L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
      attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
      bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
      minZoom: 1,
      maxZoom: 8,
      format: 'jpg',
      time: '',
      tilematrixset: 'GoogleMapsCompatible_Level'
    }).addTo(this.map)

    this.setStation()
    setInterval(() => this.setStation(), 10000)
  }
}
</script>