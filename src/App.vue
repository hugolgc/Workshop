<template>
  <header class="py-8 flex-none">
    <nav class="max-w-screen-xl mx-auto px-8 flex justify-between items-center">
      <router-link to="/">
        <h1 class="text-2xl font-semibold">TOVID</h1>
      </router-link>
      <router-link to="/menu" class="block">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </router-link>
    </nav>
  </header>
  <router-view v-slot="{ Component }">
    <transition name="slide">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="css">

.slide-enter-active {
  transition: opacity 1s, transform 1s;
}

.slide-leave-active {
  transition: opacity .5s, transform .5s;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-20%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(20%);
}

</style>