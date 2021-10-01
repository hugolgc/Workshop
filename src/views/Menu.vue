<template>
  <div class="z-10 absolute top-0 right-0 w-screen h-screen bg-gradient-to-br from-blue-900 to-blue-700">
    <ul class="h-full flex flex-row divide-x-2 divide-white divide-opacity-10">
      <div class="router__transition h-full px-16 py-12 flex flex-col justify-between">
        <li class="flex justify-center">
          <router-link to="/" class="block p-3 border-2 border-white border-opacity-10 hover:border-opacity-100 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </router-link>
        </li>
        <li class="w-8 text-center">
          <a href="https://github.com/hugolgc" target="_blank" class="block -rotate-90 text-2xl font-semibold pt-6">HUGOLGC</a>
        </li>
      </div>
      <router-link :to="{ path: `/${ item.slug }` }"
        v-for="item in items"
        :key="item.id"
        class="router__transition menu__option duration-300 relative h-full flex flex-1 flex-col justify-between px-12 py-14"
      >
        <p class="pt-1 text-xl font-semibold">{{ item.id }}</p>
        <li class="space-y-24">
          <img
            :src="require(`../assets/${ item.slug }.png`)"
            :alt="'Astro ' + item.title"
            class="max-h-16"
          >
          <h2 class="text-7xl font-semibold">{{ item.planet }}</h2>
        </li>
        <figure>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </figure>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: '03',
          planet: 'Terre',
          slug: 'earth'
        },
        {
          id: '03.5',
          planet: 'Lune',
          slug: 'moon'
        },
        {
          id: '04',
          planet: 'Mars',
          slug: 'mars'
        }
      ]
    }
  }
}
</script>