<template>
  <main class="flex-auto flex items-center">
    <section class="relative max-w-screen-xl mx-auto px-8 flex-auto flex jsutify-between items-center">
      <div>
        <h2 class="text-8xl font-bold leading-slug">Explorez <br> l'Espace</h2>
        <p class="pt-12 pb-16 text-2xl font-medium">Découvrez notre système solaire.</p>
        <div class="flex">
          <router-link to="/menu" class="slide__down block px-20 py-4 border-2 border-blue-500 text-lg font-semibold transition ease-out duration-700">VOIR PLUS</router-link>
        </div>
      </div>
      <iframe name="planet" id="planet" src="https://my.spline.design/earth-ab2ed1af4868234be933309c411d4e35/" frameborder="0"></iframe>
    </section>
  </main>
</template>

<script>
export default { name: 'Home' }
</script>