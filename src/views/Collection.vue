<template>
  <div>
    <body class="h-screen">
      <!-- logo and search box and icon design start -->
      <header class="bg-gray-100 h-18">
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
            <div class="group inline-block relative">
              <button
                class="inline-flex items-center justify-center border border-gray-500 bg-gray-200 h-8 w-16 focus:outline-none hover:bg-gray-300 border-r-0 rounded-l-lg border-t-4 border-b-4 border-l-4"
              >
                <span class="px-1">All</span>
                <i class="material-icons">arrow_drop_down</i>
              </button>
              <ul class="absolute hidden group-hover:block ml-1 bg-gray-500">
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

      <!-- logo and search box and icon design end -->

      <div>
        <!-- nav bar design start -->
        <nav
          class="relative flex items-center justify-between bg-gray-800 text-gray-100 pl-5 pr-4"
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
          <!-- <a href="login.html" class="flex items-center hover:text-red-800">
        <i class="material-icons items-center ">account_circle</i>
        <span class="px-1 mb-1">Sign In</span> -->
        </nav>
      </div>
      <!-- nav bar design end -->
      <!-- main block design start -->
      <main>
        <div class="w-full">
          <div
            class="grid grid-cols-2 gap-2 my-4 mx-6 divide-x divide-black divide-opacity-20"
          >
            <div class="bg-gray-50">
              <img src="../image/car-side1.jpg" class="w-120" alt="prod1" />
            </div>
            <div class="w-120">
              <div class="mx-3 h-full">
                <h1 class="text-2xl font-semibold">
                  Tipmant Antique Vintage Car Tin Metal Truck Home Décor Accents
                  Decoration Ornaments Collections Collectible Vehicle Model
                </h1>
                <br />
                <h2 class="font-semibold">About this item</h2>
                <div>
                  <ul class="list-disc ml-4 mt-2 text-sm">
                    <li>
                      <p>
                        Vintage car vehicle model, used for home decoration,
                        room decor, kids toys, gifts or even collections.
                      </p>
                    </li>
                    <li>
                      <p>
                        Full handmade with plating technology which shows a
                        sense of age and history.
                      </p>
                    </li>
                    <li>
                      <p>
                        Handmade, excellent workmanship, fine handicrafts;It is
                        a great choice for gift of family, kids, friends, etc.
                      </p>
                    </li>
                    <li>
                      <p>
                        Material: Iron; Model Name: Vintage Fire Fighting Truck;
                        Color: Bronze
                      </p>
                    </li>
                    <li>
                      <p>
                        Car Size: 21 x 8.5 x 10 cm / 8.3 x 3.3 x 3.9 inch, Net
                        Weight: 0.55 kg / 1.2 lb
                      </p>
                    </li>
                  </ul>
                  <div class="grid grid-cols-4 gap-1">
                    <div class="mt-3">
                      <h2 class="font-semibold py-1 text-sm">Owner</h2>
                      <h2 class="font-semibold py-1 text-sm">Contact No</h2>
                      <h2 class="font-semibold py-1 text-sm">E-mail</h2>
                      <h2 class="font-semibold py-1 text-sm">Start Price</h2>
                      <h2 class="font-semibold py-1 text-sm">Current Price</h2>
                    </div>
                    <div class="col-span-3 mt-3">
                      <h2 class="px-1 text-sm py-1 font-semibold">
                        Shimul Chakraborty
                      </h2>
                      <h2 class="px-1 text-sm py-1 font-semibold">
                        01786227277
                      </h2>
                      <h2 class="px-1 text-sm py-1 font-semibold">
                        shimulckbt101@gmail.com
                      </h2>
                      <h2 class="px-1 text-sm py-1 font-semibold">5000 Taka</h2>
                      <h2 class="px-1 text-sm py-1 font-semibold">
                        21000 Taka
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="flex items-center justify-center py-4">
                  <button
                    class="flex items-center justify-center bg-red-800 hover:bg-red-900 w-full rounded-sm focus:outline-none text-gray-900 hover:text-gray-50 font-bold text-2xl"
                  >
                    Bid Here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  </div>
</template>

<script>
export default {
  name: "Collection",
};
</script>

<style>
</style>