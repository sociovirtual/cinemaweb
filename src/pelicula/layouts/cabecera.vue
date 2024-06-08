<template>
  <div>
    <div class="relative">
      <slot name="fondo">
        <img
          src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          class="absolute inset-0 h-full w-full object-cover" alt="" />
      </slot>


      <div class="relative bg-CinemaColorPelicula bg-opacity-40 h-[40rem]">


        <!-- <svg class="absolute inset-x-0 -bottom-1 text-white " viewBox="0 0 1160 163">
          <path fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z">
          </path>
        </svg> -->

        <svg class="absolute inset-x-0 -bottom-1 text-white " id="wave" style="transform:rotate(0deg); transition: 0.3s"
          viewBox="0 0 1440 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop>
              <stop stop-color="rgba(0, 0, 0, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)"
            d="M0,48L34.3,48C68.6,48,137,48,206,54C274.3,60,343,72,411,74C480,76,549,68,617,72C685.7,76,754,92,823,90C891.4,88,960,68,1029,54C1097.1,40,1166,32,1234,26C1302.9,20,1371,16,1440,24C1508.6,32,1577,52,1646,52C1714.3,52,1783,32,1851,24C1920,16,1989,20,2057,20C2125.7,20,2194,16,2263,18C2331.4,20,2400,28,2469,42C2537.1,56,2606,76,2674,70C2742.9,64,2811,32,2880,30C2948.6,28,3017,56,3086,60C3154.3,64,3223,44,3291,48C3360,52,3429,80,3497,82C3565.7,84,3634,60,3703,56C3771.4,52,3840,68,3909,68C3977.1,68,4046,52,4114,44C4182.9,36,4251,36,4320,38C4388.6,40,4457,44,4526,52C4594.3,60,4663,72,4731,82C4800,92,4869,100,4903,104L4937.1,108L4937.1,120L4902.9,120C4868.6,120,4800,120,4731,120C4662.9,120,4594,120,4526,120C4457.1,120,4389,120,4320,120C4251.4,120,4183,120,4114,120C4045.7,120,3977,120,3909,120C3840,120,3771,120,3703,120C3634.3,120,3566,120,3497,120C3428.6,120,3360,120,3291,120C3222.9,120,3154,120,3086,120C3017.1,120,2949,120,2880,120C2811.4,120,2743,120,2674,120C2605.7,120,2537,120,2469,120C2400,120,2331,120,2263,120C2194.3,120,2126,120,2057,120C1988.6,120,1920,120,1851,120C1782.9,120,1714,120,1646,120C1577.1,120,1509,120,1440,120C1371.4,120,1303,120,1234,120C1165.7,120,1097,120,1029,120C960,120,891,120,823,120C754.3,120,686,120,617,120C548.6,120,480,120,411,120C342.9,120,274,120,206,120C137.1,120,69,120,34,120L0,120Z">
          </path>
        </svg>

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