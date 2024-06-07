<template>
  <div>
    <div class="relative">
      <slot name="fondo">
        <img
          src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          class="absolute inset-0 h-full w-full object-cover" alt="" />
      </slot>


      <div class="relative bg-CinemaColorPelicula bg-opacity-60">


        <!-- <svg class="absolute inset-x-0 -bottom-1 text-white " viewBox="0 0 1160 163">
          <path fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z">
          </path>
        </svg> -->

        <div
          class="relative mx-auto overflow-hidden px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">

          <!-- <div class="flex flex-col items-center justify-between xl:flex-row"> -->
          <div class=" grid grid-flow-row grid-cols-3 gap-10">

            <div class=" col-span-1">
              <div
                class="overflow-hidden rounded-xl border-t-4 border-CinemaColorPelicula bg-white shadow-2xl  shadow-CinemaColorPelicula ">
                <slot name="poster">
                  <img
                    src="https://admin.sociovirtual.com/wp-content/uploads/2024/06/aQnbNiadeGzGSjWLaXyeNxpAUIx-scaled.jpg"
                    alt="xxxx" srcset="">
                </slot>

              </div>
            </div>


            <div class=" col-span-2">

              <slot name="contenido">
                <h1> titulo PELICULA </h1>

                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus laudantium fuga
                atque eligendi ad reiciendis animi sed laboriosam, amet iste illo assumenda, error, facilis deserunt
                quas
                quibusdam delectus quo modi?
              </slot>

            </div>


          </div>


        </div>
      </div>

    </div>

  </div>
</template>

<script setup>

</script>

<style lang="css" scoped></style>