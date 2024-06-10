<template>
  <div>


    <header
      class="text-slate-700 max-w-screen-xl mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center sticky">

      <slot name="cinemalogo">
        <RouterLink to="/" class="flex items-center whitespace-nowrap text-5xl font-black font-alpha">CINEMA
        </RouterLink>
      </slot>

      <nav aria-label="Header Navigation"
        class="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
        <slot name="menu">
          <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
            <li class="lg:mr-12"><a
                class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                href="#">Components</a></li>
            <li class="lg:mr-12"><a
                class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                href="#">Pricing</a></li>
            <li class="lg:mr-12"><a
                class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                href="#">Contact</a></li>
            <li class="lg:mr-12"><a
                class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                href="#">FAQ</a></li>
          </ul>
        </slot>

        <hr class="mt-4 w-full lg:hidden" />
        <div class="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
          <slot name="menutwo">
            <a href="#" title=""
              class="whitespace-nowrap rounded font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50">
              Log in </a>
            <a href="#" title=""
              class=" font-alpha whitespace-nowrap rounded-xl bg-blue-700 px-5 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600">COMPRAR
              ENTRADA</a>
          </slot>
        </div>
      </nav>

    </header>


  </div>
</template>

<script setup>

</script>

<style scoped></style>