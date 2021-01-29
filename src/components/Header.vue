<template>
  <header class="bg-gray-300 h-18">
        <div class="flex justify-between items-center mx-4">
          <div>
            <router-link to="/"
              ><img
                class="w-16 py-4"
                src="../image/auction-final.png"
                alt="auction logo"
            /></router-link>
          </div>

          <div class="relative flex items-center justify-center flex-grow">
            <div class="z-10">
              <CategoryDropdown /> <!-- //// added dropdown menu -->
            </div>

            <input
              type="text"
              placeholder="What are you looking for..."
              class="border border-gray-500 border-l-0 border-r-0 border-t-4 border-b-4 h-8 w-3/5 px-1 py-2 focus:outline-none"
            />
            <button
              class="border border-gray-500 outline-none bg-gray-200 flex items-center justify-center h-8 w-16 focus:outline-none hover:bg-gray-300 border-l-0 rounded-r-lg border-r-4 border-t-4 border-b-4"
            >
              <i class="material-icons">search</i>
            </button>
          </div>
          <div class="flex items-center justify-center space-x-4">
            <button class="flex items-center justify-center hover:text-red-800">
              <i class="material-icons">mail_outline</i>
            </button>
            <button class="flex items-center justify-center hover:text-red-800">
              <i class="material-icons h-5 w-5">chat_bubble_outline</i>
            </button>
            <button class="flex items-center justify-center hover:text-red-800">
              <i class="material-icons">notifications_none</i>
            </button>
            <button class="flex items-center justify-center">
              <div class="h-8 w-8 rounded-full bg-gray-600"></div>
            </button>
          </div>
        </div>
      </header>
</template>

<script>

import CategoryDropdown from "../components/CategoryDropdown";

export default {
    name: "Header",
    components: {
        CategoryDropdown,
    }
}
</script>

<style>

</style>