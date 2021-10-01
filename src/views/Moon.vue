<template>
  <main class="calc__screen flex-auto flex items-center">
    <section class="relative max-w-screen-xl mx-auto px-8 flex-auto flex jsutify-between items-center">
      <div>
        <h2 class="text-8xl font-bold leading-slug">Lune</h2>
        <div class="pt-12 pb-24 space-y-8">
          <p class="text-xl opacity-70">362 847 km de la Terre</p>
          <p class="text-xl opacity-70">Pleine Lune le 20 octobre</p>
        </div>
        <div class="flex wrap gap-16">
          <div class="flex-none space-y-2">
            <h3 class="text-orange text-sm font-semibold">TEMPÉRATURE MOY.</h3>
            <p>
              <span class="text-2xl">+/-</span> <span class="text-4xl">150°C</span>
            </p>
          </div>
          <div class="flex-none space-y-2">
            <h3 class="text-orange text-sm font-semibold">RÉVOLUTION</h3>
            <p class="text-4xl">28j</p>
          </div>
          <div class="flex-none space-y-2">
            <h3 class="text-orange text-sm font-semibold">VITESSE DE ROTATION</h3>
            <p>
              <span class="text-4xl">16 657</span> <span class="text-2xl">km/h</span>
            </p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 "></div>
      <iframe name="planet" id="planet" src="https://my.spline.design/moon-d6bcda4e52ac06f744604e9f03fa4e2b/" frameborder="0"></iframe>
    </section>
  </main>
</template>

<script>
export default { name: 'Moon' }
</script>