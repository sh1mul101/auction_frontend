<template>
    <div class=""> 
        <!-- nav bar design start -->
        <nav
          class="relative flex items-center justify-between bg-green-400 pl-5 pr-4"
        >
          <div class="mt-1 flex items-center">
            <!-- category button design -->
            <button
              class="flex items-center justify-center hover:text-green-200 focus:outline-none"
            >
              <i class="material-icons mt-1">menu</i>
              <span class="px-1">Categories</span>
              <i class="material-icons mt-1">arrow_drop_down</i>
            </button>
            <!-- category button design end-->

            <!-- home link design start -->
            <div class="flex items-center justify-center px-4">
              <router-link
                to="/"
                class="flex items-center justify-center hover:text-green-200 px-4"
              >
                <i class="material-icons items-center">home</i>
                <span class="px-1">Home</span></router-link
              >
              <!-- home link design end -->

              <!-- auction button design start -->
              <button
                  class="flex items-center justify-center hover:text-green-200 focus:outline-none px-4"
                >
                  <!-- <img src="./image/auction-icon2.png" alt="" class="h-4"> -->
                  <span class="px-1">Auction</span>
                  <i class="material-icons mt-1">arrow_drop_down</i>
              </button>
              <!-- auction button design end -->

              <router-link to='/' href="" class="flex items-center justify-center hover:text-green-200 px-4">
                <!-- <i class="material-icons mt-1">home</i> -->
                <span class="px-1">News Feed</span>
              </router-link>

              <router-link to='/' class="flex items-center justify-center hover:text-green-200 px-4">
                <!-- <i class="material-icons mt-1">home</i> -->
                <span class="px-1">Help</span>
              </router-link>
            </div>
          </div>
          <div class="flex">
            <router-link to="/login" class="flex items-center justify-center px-2 hover:text-green-200"
            >
            <span class="px-1 mb-1">Sign In</span></router-link
          >
          <router-link to="/register" class="flex items-center justify-center hover:text-green-200"
            >
            <span class="px-1 mb-1">Sign Up</span></router-link
          >
          </div>
        </nav>
      </div>
</template>

<script>
export default {
    name: "Nav",

}
</script>