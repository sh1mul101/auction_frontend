<template>
    <div>
        <!-- nav bar design start -->
        <nav
          class="relative flex items-center justify-between bg-gray-500 pl-5 pr-4"
        >
          <div class="mt-1 flex items-center">
            <!-- category button design -->
            <div class="group inline-block relative">
              <button
                class="inline-flex items-center justify-center hover:text-red-800 focus:outline-none"
              >
                <i class="material-icons mt-1">menu</i>
                <span class="px-1">Categories</span>
                <i class="material-icons mt-1">arrow_drop_down</i>
              </button>
              <ul class="absolute hidden group-hover:block ml-7 bg-gray-500">
                <li class="text-sm py-1">
                  <a
                    class="rounded-t hover:bg-gray-400 block whitespace-nowrap"
                    href="#"
                    >One category</a
                  >
                </li>
                <li class="text-sm py-1">
                  <a class="hover:bg-gray-400 block whitespace-nowrap" href="#"
                    >One category</a
                  >
                </li>
                <li class="text-sm py-1">
                  <a class="hover:bg-gray-400 block whitespace-nowrap" href="#"
                    >One category</a
                  >
                </li>
                <li class="text-sm py-1">
                  <a
                    class="rounded-b hover:bg-gray-400 block whitespace-nowrap"
                    href="#"
                    >One category</a
                  >
                </li>
              </ul>
            </div>
            <!-- category button design end-->

            <!-- home link design start -->
            <div class="flex items-center justify-center px-4">
              <router-link
                to="/"
                class="flex items-center hover:text-red-800 px-4"
              >
                <i class="material-icons items-center">home</i>
                <span class="px-1">Home</span></router-link
              >
              <!-- home link design end -->

              <!-- auction button design start -->
              <div class="group inline-block relative">
                <button
                  class="inline-flex items-center justify-center hover:text-red-800 focus:outline-none px-4"
                >
                  <!-- <img src="./image/auction-icon2.png" alt="" class="h-4"> -->
                  <span class="px-1">Auction</span>
                  <i class="material-icons mt-1">arrow_drop_down</i>
                </button>
                <ul
                  class="absolute hidden group-hover:block ml-5 bg-gray-500 py-1 w-18 px-3"
                >
                  <li class="text-sm py-1">
                    <a
                      class="rounded-t hover:bg-gray-400 block whitespace-nowrap"
                      href="#"
                      >Public</a
                    >
                  </li>
                  <li class="text-sm py-1">
                    <a
                      class="rounded-b hover:bg-gray-400 block whitespace-nowrap"
                      href="#"
                      >Private</a
                    >
                  </li>
                </ul>
              </div>
              <!-- auction button design end -->

              <a href="" class="flex items-center hover:text-red-800 px-4">
                <!-- <i class="material-icons mt-1">home</i> -->
                <span class="px-1">News Feed</span>
              </a>

              <a href="" class="flex items-center hover:text-red-800 px-4">
                <!-- <i class="material-icons mt-1">home</i> -->
                <span class="px-1">Help</span>
              </a>
            </div>
          </div>
          <router-link to="/login" class="flex items-center hover:text-red-800"
            ><i class="material-icons items-center">account_circle</i>
            <span class="px-1 mb-1">Sign In</span></router-link
          >
        </nav>
      </div>
</template>

<script>
export default {
    name: "Nav",

}
</script>

<style>

</style>